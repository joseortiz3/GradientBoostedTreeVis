// Modified from Michael Hall’s Block 126b3c2c54215b4d1ffbd2d778ce3973

// Acts as a class initilizer, returning this "chart" thing which is a function
// but has member functions also.
function tree() {

    // Member variables
    var data,
        i           = 0, // dummy
        duration    = 5000, // duration of transitions 
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
	        function collapse(d) {
	        	if (d.children) { // Apparently .children are shown children, ._children are hidden children.
	        		d._children = d.children;
	        		d._children.forEach(collapse);
			        d.children = null;
		        }
            }

			// Only need to update a node and its children.
	        function updateFromNode(updateNode) {
	        	// assigns the x and y position for the nodes
		        var d3_tree = d3_SizedTree(root);

				// compute the new tree layout
				// This is not very intuitive, poor choice. ( replace with .children )
		        var nodesVisible = d3_tree.descendants(), // This is the root node and its children
		            nodesThatAreChildren = d3_tree.descendants().slice(1); // These are just the children

				// Controls the distance between nodes.
				debugger;
		        nodesVisible.forEach(function(d) { d.y = d.depth * 180; });

		        // ****************** NODES section ***************************

		        // update the nodes ...
				var nodesOriginal = svg.selectAll('g.node')
					// use .id as a key for data association
					.data(nodesVisible, function(d) { return d.id || (d.id = ++i); });
					// if id not set, set it to ++i

				// Enter any new nodes at the parent's previous position.
				// nodeEnter is the group containing the new (label and node)
		        var nodesEntered = nodesOriginal.enter().append('g')
			        .attr('class', 'node')
			        .attr('transform', function(d) {
			        	return 'translate(' + (updateNode.y_old + margin.top) + ',' + (updateNode.x_old + margin.left) + ')';
			        })
			        .on('click', click);

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
		        var linksOriginal = svg.selectAll('path.link')
			        .data(nodesThatAreChildren, function(d) { 
						return d.id });

				// enter any new links at the parent's previous position
				// (Draws new links)
		        var linksEntered = linksOriginal.enter().insert('path', 'g')
			        .attr('class', 'link')
			        .attr('d', function(d) {
			        	var o = {x: updateNode.x_old + margin.left, y: updateNode.y_old + margin.top};
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
		        nodesVisible.forEach(function(d) {
		        	d.x_old = d.x + margin.left;
		        	d.y_old = d.y + margin.top;
		        });

		        // creates a curved (diagonal) path from parent to the child nodes
		        function pathBetweenCoords(s, d) {
		        	path = 'M ' + (s.y + margin.top) + ' ' + (s.x + margin.left) +
					        'C ' + ((s.y + d.y + (margin.top * 2)) / 2) + ' ' + (s.x + margin.left) +
					        ', ' + ((s.y + d.y + (margin.top * 2)) / 2) + ' ' + (d.x + margin.left) +
					        ', ' + (d.y + margin.top) + ' ' + (d.x + margin.left);
		        	return path;
				}

		        // toggle children on click
		        function click(clicked_node) {
		        	if (clicked_node.children) {
		        		clicked_node._children = clicked_node.children;
		        		clicked_node.children = null;
			        } else {
		        		clicked_node.children = clicked_node._children;
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