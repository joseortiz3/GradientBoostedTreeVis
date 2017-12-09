// Modified from Michael Hall’s Block 126b3c2c54215b4d1ffbd2d778ce3973

// Acts as a class initilizer, returning this "chart" thing which is a function
// but has member functions also.
function tree() {
	
		// Member variables
		var data,
			i           = 0, // dummy
			duration    = 1000, // duration of transitions 
			margin      = {top: 20, right: 10, bottom: 30, left: 30}, // margin of layout
			width       = 960 - margin.left - margin.right, // avilable width (not width of enclosing svg)
			height      = 500 - margin.top - margin.bottom, // available height (not height of enclosing svg)
			max_depth,
			update,
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
				
				// append the svg object (really, it refers to the g) to the selection
				var svg = selection.append('svg')
					.attr('width', width + margin.left + margin.right)
					.attr('class','tree_svg')
					.attr('height', height + margin.top + margin.bottom)
				  .append('g') // Translates to top-left corner of allowed region (0,0)
					.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
	
				// declares a tree layout and assigns the size of the tree
				var d3_SizedTree = d3.tree().size([height, width]); // Allowed region
	
				// assign parent, children, height, depth
				var root = d3.hierarchy(data, function(d) { return d.children });
	
				// Internally used for making transitions pretty
				root.x_old = height / 2; // left edge of the rectangle
				root.y_old = 0; // top edge of the triangle (? or rectangle)
	
				// collapse after the second level
				root.children.forEach(collapse);
				max_depth = root.height
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
	
				// Only need to update a node and its children.
				function updateFromNode(updateNode) {
					// assigns the x and y position for the nodes
					var d3_tree = d3_SizedTree(root);
	
					// compute the new tree layout
					// This is not very intuitive, poor choice. ( replace with .children )
					var dataForVisibleNodes = d3_tree.descendants(), // This is the root node and its children
						dataForVisibleChildren = d3_tree.descendants().slice(1); // These are just the children
	
					// Controls the distance between nodes.
					dataForVisibleNodes.forEach(function(d) { d.y = d.depth * 180; });
	
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
							return 'translate(' + (updateNode.y_old + margin.top) + ',' + (updateNode.x_old + margin.left) + ')';
						})
						.on('click', toggleChildrenVisibility);
	
					// add circle for the nodes
					nodesEntered.append('circle')
						.attr('class', 'node')
						.attr('r', 1e-6)
						.style('fill', function(d) {
							return d._children ? 'lightsteelblue' : '#fff';
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
							return (d.children || d._children) ? d.data.id.capitalize() : d.data.id;
						});
	
					// add number of children as text to node circle
					nodesEntered.append('text')
						.attr('x', -3)
						.attr('y', 3)
						.attr('cursor', 'pointer')
						.style('font-size', '10px')
						.text(function(d) {
							if (d.children) return d.children.length;
							else if (d._children) return d._children.length;
						});
	
					// UPDATE (activate new nodes)
					var nodesUpdated = nodesEntered.merge(nodesOriginal); // merge() returns entered+updated nodes
	
					// transition to the proper position for the node
					nodesUpdated.transition().duration(duration)
						.attr('transform', function(d) {
							return 'translate(' + (d.y + margin.top) + ',' + (d.x + margin.left) + ')';
						});
	
					// update the node attributes and style
					nodesUpdated.select('circle.node')
						.attr('r', 9)
						.style('fill', function(d) {
							return d._children ? 'lightsteelblue' : '#fff';
						})
						.attr('cursor', 'pointer');
	
					// remove any exiting nodes
					var nodesExited = nodesOriginal.exit()
						.transition().duration(duration)
						.attr('transform', function(d) {
							return 'translate(' + (updateNode.y + margin.top) + ',' + (updateNode.x + margin.left) + ')';
						})
						.remove();
	
					// on exit reduce the node circles size to 0
					nodesExited.select('circle')
						.attr('r', 1e-6);
	
					// on exit reduce the opacity of text labels
					nodesExited.select('text')
						.style('fill-opacity', 1e-6);
	
					// ****************** LINKS (edges) section ***************************
	
					// update the link's data
					var linksOriginalGroups = svg.selectAll('g.link')
						.data(dataForVisibleChildren, function(d) { 
							return d.id });
	
					// enter any new links at the parent's previous position
					// (Draws new links)
					var linksEntered = linksOriginalGroups.enter()
						.insert('g','g.node')
						.attr('class','link')
						.attr('transform', function(child) {
							var parent = child.parent;
							var groupX = (parent.y + margin.top)
							groupY = (child.x + margin.left)
							var childX =  (child.y + margin.top) - groupX,
							childY = (child.x + margin.left) - groupY,
							parentX = (parent.y + margin.top) - groupX,
							parentY = (parent.x + margin.left) - groupY;
							console.log([parentX,parentY])
							return 'translate(' + parentX + ',' + parentY + ')'; // Start at parent first.
						})

					linksEntered.append('path')
						.attr('class', 'link')
						.attr('d', function(d) {
							var o = {x: updateNode.x_old + margin.left, y: updateNode.y_old + margin.top};
							return pathBetweenNodes(o, o); // start out with path going nowhere
						});

					// add labels for the nodes
					linksEntered.append('text')
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
							childName = d.data.name;
							parentName = d.parent.data.name;
							edgeLabel = edge_dict[parentName][childName];
							if (edgeLabel == undefined) {return ''}
							else {return edgeLabel}
						});
	
					// UPDATE
					var linksUpdated = linksEntered.merge(linksOriginalGroups);

					/*
					linksUpdated.transition().duration(duration)
						.attr('transform', function(child) {
							var parent = child.parent;
							var childY = (child.x + margin.left);
							var parentX = (parent.y + margin.top);
							return 'translate(' + parentX + ',' + childY + ')';
						})*/
	
					// transition paths back to the parent element position
					linksUpdated.transition().select('path.link').duration(duration)
						.attr('d', function(d) { console.log('path'); return pathBetweenNodes(d, d.parent); }); //transition to path going somwhere
	
					// remove any exiting links
					var linksExited = linksOriginalGroups.exit().select('path.link')
						.transition().duration(duration)
						.attr('d', function(d) {
							var o = {x: updateNode.x, y: updateNode.y};
							return pathBetweenNodes(o, o); // transition to path going nowhere
						})
						.remove();
	
					// store the old positions for transition
					dataForVisibleNodes.forEach(function(d) {
						d.x_old = d.x + margin.left;
						d.y_old = d.y + margin.top;
					});
	
					// creates a curved (diagonal) path from parent to the child nodes
					function pathBetweenNodes(child, parent) { // passed objects must have .x and .y attributes
						var groupX = (parent.y + margin.top)
							groupY = (child.x + margin.left)
						var childX =  (child.y + margin.top) - groupX,
							childY = (child.x + margin.left) - groupY,
							parentX = (parent.y + margin.top) - groupX,
							parentY = (parent.x + margin.left) - groupY;
								// Below only makes sense because the group is translated by parentX, childY
								// Start at x y
						path = 'M ' + childX + ' ' + childY + ' '+ 
								// curve from current position towards x1 y1 and towards...
								'C ' + ((childX-parentX)/2) + ' ' + childY + 
								// ...  x2 y2  .....
								', ' + ((childX-parentX)/2) + ' ' + parentY +
								// ... ending at final location x y
								', ' + parentX + ' ' + parentY;
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
	
		String.prototype.capitalize = function() {
			return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
		};
	
		return chart;
	}