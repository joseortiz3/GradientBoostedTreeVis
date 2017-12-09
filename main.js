
function setTree(selection, rootdata) {
    var myTree = tree().height(800).width(1260);
    
    var root = rootdata.data // (Or Whatever Data You Want To Use)
    myTree.edge_dict(rootdata.edges)
    myTree.data(root);
    // I believe this just passes the selection to
    selection.call(myTree);
}

setTree(d3.select('#chart'),allTrees[5])

var navHeight = 50

var div = d3.select('div.tooltip');

var nav = d3.select('body').append('div')
.attr('class','nav')
.selectAll('svg').data(Object.values(allTrees))
.attr('transform','scale(0.1,0.1)')
.enter().append('svg')
.attr('width',navHeight*1.1)
.attr('height',navHeight)
.each(function(d,i,g) {
    var svg = d3.select(this);
    var strokeWidth = 4;
    svg.append('circle')
    .attr('cx',navHeight/2)
    .attr('cy',navHeight/2)
    .attr('r',navHeight/2-strokeWidth)
    .attr('stroke','black')
    .attr('stroke-width',strokeWidth)
    .attr('fill','lightgrey')
    .attr('cursor','pointer')
    .on('mouseover', function(d,i) {
        d3.select(this)
        .attr('fill','lightblue');
        div.transition()
        .duration(200)
        .delay(250)
        .style("opacity", .95);
        var tooltipText = ''
        Object.keys(d.params).forEach(function(key,index) {
        if (key == 'children' || key == 'label'){return}
        else {
            if (isNaN(quickRound(d.params[key]))) {
                tooltipText += key + ' : ' + d.params[key] + '<br>';
            } else {
                tooltipText += key + ' : ' + quickRound(d.params[key]) + '<br>';
            }
        }
        // index: the ordinal position of the key within the object 
        });
        div.html(tooltipText)
        .style("left", (d3.event.pageX + 50) + "px")
        .style("top", (d3.event.pageY - 200) + "px");
    })
    .on('mouseout', function(d) {
        div.transition()
        .duration(300)
        .style("opacity", 0);
        d3.select(this)
        .attr('fill','lightgrey')
    })
    .on('click', function(d,i) {
        d3.select('#chart').select('svg').remove();
        setTree(d3.select('#chart'),d);
    })
    svg.append('text')
    .attr('dy','.35em')
    .attr('x',navHeight/2)
    .attr('y',navHeight/2)
    .attr('text-anchor','middle')
    .attr('font-size','40px')
    .attr('font-weight',800)
    .text(i)
    .on('click', function(d,i) {
        d3.select('#chart').select('svg').remove();
        setTree(d3.select('#chart'),d);
    })
})
// COOL NAV (doesn't yet work)
/* Doesn't work very well, can't figure out why.
var nav = d3.select('body').append('div')
    .attr('class','nav')
    .selectAll('svg').data(Object.values(allTrees))
    .attr('transform','scale(0.1,0.1)')
    .enter().append('div').each(function(d,i,group) {
        var thisTree = tree().height(200).width(200)
        .edge_dict(d.edge_dict).data(d.data)
        .startExpanded(false).scale(0.2);
        d3.select(this).call(thisTree);
    });
*/