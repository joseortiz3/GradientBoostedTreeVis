// Modified from Michael Hall’s Block 126b3c2c54215b4d1ffbd2d778ce3973

// Acts as a class initilizer, returning this "chart" thing which is a function
// but has member functions also.
function quickRound(number) {
    return Math.round(number * 1000) / 1000
}
function tree() {
	
		// Member variables
        var data,
            // default values
			i           = 0, // dummy
			duration    = 500, // duration of transitions 
			margin      = {top: 20, right: 10, bottom: 60, left: 30}, // margin of layout
			width       = 960 - margin.left - margin.right, // avilable width (not width of enclosing svg)
			height      = 700 - margin.top - margin.bottom, // available height (not height of enclosing svg)
			max_depth,
            update,
            div,
            max_count,
            cmap,
            scale = 1.0,
            startExpanded = true,
			edge_dict   // function for updating
		;
		// the function object that gets returned after all this.
		function chart(selection) {
			// Not sure why use of "each"
			// function in each is passed current datum (d), the current index (i), and the current group (nodes),
			selection.each(function(d,i,nodes) { node = this; // None of these are used apparently.
				// For some reason doing this is necessary...oh they were modified from default by .height() etc.
				height = height - margin.top - margin.bottom;
				width = width - margin.left - margin.right;
                
                // Tooltip
                var div = d3.select("body").append("div")
                .attr("class", "tooltip")
                .style("opacity", 0);

				// append the svg object to the selection
				var svg = selection.append('svg')
					.attr('width', width + margin.left + margin.right)
					.attr('class','tree_svg')
					.attr('height', height + margin.top + margin.bottom)
				  .append('g') // Translates to top-left corner of allowed region (0,0)
					.attr('transform', 'translate(' + margin.left + ',' + margin.top + ') scale('+scale+')');
	
				// declares a tree layout and assigns the size of the tree
                var d3_SizedTree = d3.tree().size([height, width]) // Allowed region
                                .separation(function separation(a, b) {
                                    return a.parent == b.parent ? 1 : 1.3;
                                  });
	
				// assign parent, children, height, depth
				var root = d3.hierarchy(data, function(d) { return d.children });
	
				// Internally used for making transitions pretty
				root.x_old = height / 2; // left edge of the rectangle
				root.y_old = 0; // top edge of the triangle (? or rectangle)
	
                // collapse after the second level
                if (startExpanded) {
                    root.children.forEach(expand);
                } else {
                    root.children.forEach(collapse);
                }
				
                max_depth = root.height;
                max_count = root.data.internal_count;
                cmap = d3.scaleLinear().domain([-0.01,0,0.01]).range(['red','lightgray','blue'])
				updateFromNode(root);
	
				// collapse the node and all it's children (just .children -> ._children)
				function collapse(node) {
					// children are visible children, _children are hidden children.
					if (node.children) { // If there are visible children
						node._children = node.children; // make them not visible anymore.
						node._children.forEach(collapse); // also hide *their* children too, if any.
						node.children = null;
					}
                }
                
                // collapse the node and all it's children (just .children -> ._children)
				function expand(node) {
					// children are visible children, _children are hidden children.
					if (node._children) { // If there are visible children
						node.children = node._children; // make them not visible anymore.
						node.children.forEach(expand); // also hide *their* children too, if any.
						node._children = null;
					}
				}
	
				// Only need to update a node and its children.
				function updateFromNode(updateNode) {
					// assigns the x and y position for the nodes
					var d3_tree = d3_SizedTree(root);
                    max_depth = d3_tree.height
					// compute the new tree layout
					var dataForVisibleNodes = d3_tree.descendants(), // This is the root node and its children
						dataForVisibleChildren = d3_tree.descendants().slice(1); // These are just the children
	
					// Controls the distance between nodes.
					dataForVisibleNodes.forEach(function(node) { node.y = (node.depth/(max_depth+1)) * width; });
	
					// ****************** NODES section ***************************
	
					// update the nodes ...
					var nodesOriginal = svg.selectAll('g.node')
						// use .id as a key for data association
						.data(dataForVisibleNodes, function(d) { return d.id || (d.id = ++i); });
						// if id not set, set it to ++i
	
					// Enter any new nodes at the parent's previous position.
					// nodeEnter is the group containing the new (label and node)
					var nodesEntered = nodesOriginal.enter().append('g')
						.attr('class', 'node')
						.attr('transform', function(d) {
							return 'translate(' + (updateNode.y_old) + ',' + (updateNode.x_old) + ')';
						})
						.on('click', toggleChildrenVisibility);
	
					// add circle for the nodes
					nodesEntered.append('ellipse')
						.attr('class', 'node')
                        .attr('rx', 1e-6)
                        .attr('ry', 1e-6)
						.style('fill', function(d) {
                            if (d.data.leaf_value!=undefined) {
                                var color = cmap(d.data.leaf_value);
                                return color;
                            }
							return d._children ? 'lightsteelblue' : '#fff';
                        })
                        .on("mouseover", function(node) {
                            div.transition()
                                .duration(200)
                                .delay(500)
                                .style("opacity", .95);
                            var tooltipText = ''
                            Object.keys(node.data).forEach(function(key,index) {
                                if (key == 'children' || key == 'label'){return}
                                else {
                                    if (isNaN(quickRound(node.data[key]))) {
                                        tooltipText += key + ' : ' + node.data[key] + '<br>';
                                    } else {
                                        tooltipText += key + ' : ' + quickRound(node.data[key]) + '<br>';
                                    }
                                }
                                // index: the ordinal position of the key within the object 
                            });
                            div.html(tooltipText)
                                .style("left", (node.y+margin.left) + "px")
                                .style("top", (node.x+margin.top - 60) + "px");
                        })
                        .on("mouseout", function(node) {
                            div.transition()
                            .duration(500)
                            .style("opacity", 0);
                        });
	
					// add labels for the nodes
					nodesEntered.append('text')
						.attr('dy', '.35em')
						// Location
						.attr('x', function(d) {
							return d.children || d._children ? 0 : 13;
						})
						.attr('y', function(d) {
							return d.children || d._children ? -margin.top : 0;
						})
						.attr('text-anchor', function(d) {
							return d.children || d._children ? 'middle' : 'start';
						})
						// Text
						.text(function(d) {
                            return;
							//return (d.children || d._children) ? d.data.id.capitalize() : d.data.id;
                        });
                        
	
					// add node text
					nodesEntered.append('text')
						.attr('x', 0)
						.attr('y', 5)
						.attr('cursor', 'pointer')
                        .style('font-size', function(node) {
                            var perc_depth = (max_depth-node.depth)/max_depth
                            return quickRound(15*(perc_depth+2)/3) +'px';
                        })
                        .style('text-anchor','middle')
                        .style('font-weight',700)
						.text(function(node) {
                            if (node.data.leaf_value!=undefined) {
                                return quickRound(node.data.leaf_value);
                            }
							return node.data.split_feature_name;
                        })
                        .on("mouseover", function(node) {
                            div.transition()
                                .duration(200)
                                .delay(500)
                                .style("opacity", .95);
                            var tooltipText = ''
                            Object.keys(node.data).forEach(function(key,index) {
                                if (key == 'children' || key == 'label'){return}
                                else {
                                    if (isNaN(quickRound(node.data[key]))) {
                                        tooltipText += key + ' : ' + node.data[key] + '<br>';
                                    } else {
                                        tooltipText += key + ' : ' + quickRound(node.data[key]) + '<br>';
                                    }
                                }
                                // index: the ordinal position of the key within the object 
                            });
                            div.html(tooltipText)
                                .style("left", (node.y+margin.left) + "px")
                                .style("top", (node.x+margin.top - 60) + "px");
                        })
                        .on("mouseout", function(node) {
                            div.transition()
                            .duration(500)
                            .style("opacity", 0);
                        });
	
					// UPDATE (activate new nodes)
					var nodesUpdated = nodesEntered.merge(nodesOriginal); // merge() returns entered+updated nodes
	
					// transition to the proper position for the node
					nodesUpdated.transition().duration(duration)
						.attr('transform', function(d) {
							return 'translate(' + (d.y + margin.top) + ',' + (d.x + margin.left) + ')';
						});
	
					// update the node attributes and style
					nodesUpdated.select('ellipse.node')
						.attr('rx', function(node) {
                            var perc_depth = (max_depth-node.depth)/max_depth
                            return quickRound(40*(perc_depth+3)/4) +'px';
                        })
                        .attr('ry', function(node) {
                            var perc_depth = (max_depth-node.depth)/max_depth
                            return quickRound(40*(perc_depth+0.3)/1.3) +'px';
                        })
                        .style('fill', function(d) {
                            if (d.data.leaf_value!=undefined) {
                                var color = cmap(d.data.leaf_value);
                                return color;
                            }
							return d._children ? 'lightyellow' : '#fff';
						})
                        .attr('cursor', 'pointer')
                        
	
					// remove any exiting nodes
					var nodesExited = nodesOriginal.exit()
						.transition().duration(duration)
						.attr('transform', function(d) {
							return 'translate(' + (updateNode.y + margin.top) + ',' + (updateNode.x + margin.left) + ')';
						})
						.remove();
	
					// on exit reduce the node circles size to 0
					nodesExited.select('ellipse')
						.attr('rx', 1e-6)
                        .attr('ry', 1e-6);

					// on exit reduce the opacity of text labels
					nodesExited.select('text')
                        .style('fill-opacity', 1e-6);

                    // ------------------ Edge Lables ---------------
                    var edgesOriginal = svg.selectAll('text.edgeLabel')
                        .data(dataForVisibleChildren, function(d) {
                            return d.id});

                    var edgesEntered = edgesOriginal.enter().append('text')
                        .attr('class','edgeLabel')
                        .attr('dy', '.35em')
                        // Location
                        .attr('y', function(child) {
                            return updateNode.x_old;
                        })
                        .attr('x', function(child) {
                            return updateNode.y_old;
                        })
                        .attr('text-anchor', function(child) {
                            return 'middle';
                        })
                        // Text
                        .text(function(child) {
                            childName = child.data.name;
                            parentName = child.parent.data.name;
                            edgeLabel = edge_dict[parentName][childName];
                            var thresh = quickRound(child.parent.data.threshold)
                            if (edgeLabel == undefined) {return ''}
                            else {return edgeLabel + ' ' + thresh}
                        });

                    var edgesUpdated = edgesEntered.merge(edgesOriginal);

                    edgesUpdated.transition().duration(duration)
                        .attr('y', function(child) {
                            var x = margin.top + (child.x + 2*child.parent.x)/3
                            return x+25;
                        })
                        .attr('x', function(child) {
                            var y =  margin.left + (child.y + 2*child.parent.y)/3;
                            return y;
                        })

                    var edgesExited = edgesOriginal.exit()
                        .transition().duration(duration)
                        .attr('y', function(child) {
                            return updateNode.x + margin.top;
                        })
                        .attr('x', function(child) {
                            return updateNode.y + margin.left;
                        })
                        .remove()
	
					// ****************** LINKS (edges) section ***************************
	
					// update the link's data
					var linksOriginal = svg.selectAll('path.link')
						.data(dataForVisibleChildren, function(d) { 
							return d.id });
	
					// enter any new links at the parent's previous position
					// (Draws new links)
					var linksEntered = linksOriginal.enter().insert('path', 'g')
                        .attr('class', 'link')
                        .attr('stroke-width', function(node) {
                            var num_count;
                            if (node.data.internal_count != undefined) {
                                num_count = node.data.internal_count
                            }
                            else {
                                num_count = node.data.leaf_count;
                            }
                            return 0.2+(num_count/max_count)*30;
                        })
						.attr('d', function(d) {
							var o = {x: updateNode.x_old - margin.left, y: updateNode.y_old - margin.top};
							return pathBetweenCoords(o, o); // start out with path going nowhere
						});
	
					// UPDATE
					var linksUpdated = linksEntered.merge(linksOriginal);
	
					// transition back to the parent element position
					linksUpdated.transition().duration(duration)
						.attr('d', function(d) { return pathBetweenCoords(d, d.parent); }); //transition to path going somwhere
	
					// remove any exiting links
					var linksExited = linksOriginal.exit()
						.transition().duration(duration)
						.attr('d', function(d) {
							var o = {x: updateNode.x, y: updateNode.y};
							return pathBetweenCoords(o, o); // transition to path going nowhere
						})
						.remove();
	
					// store the old positions for transition
					dataForVisibleNodes.forEach(function(d) {
						d.x_old = d.x + margin.left;
						d.y_old = d.y + margin.top;
					});
	
					// creates a curved (diagonal) path from parent to the child nodes
					function pathBetweenCoords(child, parent) { // passed objects must have .x and .y attributes
								// Start at x y
						path = 'M ' + (child.y + margin.top) + ' ' + (child.x + margin.left) + ' '+ 
								// curve from current position with slope x1 y1 to...
								'C ' + ((child.y + parent.y + (margin.top * 2)) / 2) + ' ' + (child.x + margin.left) + 
								// ... slope x2 y2 at .....
								', ' + ((child.y + parent.y + (margin.top * 2)) / 2) + ' ' + (parent.x + margin.left) +
								// ... final location x y
								', ' + (parent.y + margin.top) + ' ' + (parent.x + margin.left);
						return path;
					}
	
					// toggle children visibility and update display
					function toggleChildrenVisibility(clicked_node) {
						if (clicked_node.children) { // if the clicked node has children
							clicked_node._children = clicked_node.children; // hide those children
							clicked_node.children = null;
						} else { // its implied that clicked_node has hidden children ._children
							clicked_node.children = clicked_node._children;  // show those children
							clicked_node._children = null;
						}
						updateFromNode(clicked_node); // Only need to update node and its children
					}
				}
			});
		}
		
		// Edge dictionary to label edges.
		chart.edge_dict = function(value) {
			if (!arguments.length) return edge_dict;
			edge_dict = value;
			return chart;
		}
	
		chart.width = function(value) {
			if (!arguments.length) return width;
			width = value;
			return chart;
		};
	
		chart.height = function(value) {
			if (!arguments.length) return height;
			height = value;
			return chart;
		};
	
		chart.margin = function(value) {
			if (!arguments.length) return margin;
			margin = value;
			return chart;
		};
	
		chart.data = function(value) {
			if (!arguments.length) return data;
			data = value;
			if (typeof updateData === 'function') updateData();
			return chart;
        };
        
        chart.startExpanded = function(value) {
			if (!arguments.length) return startExpanded;
			startExpanded = value;
			return chart;
        };
        
        chart.scale = function(value) {
            if (!arguments.length) return scale;
            scale = value;
			return chart;
		};
	
		String.prototype.capitalize = function() {
			return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
		};
	
		return chart;
	}