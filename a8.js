try {var d3 = require('d3')} // Useful for my IDE's autocomplete 
catch(err) {console.log('require(d3) failed, ignored.')} // Catches on client-side (not server-side). Do nothing.

var data = tree.data

//////////////////////////////////////////////////////////////////////////////
// These functions only operate on the data a single time. It's metadata.
function setTreeSize(tree)
// Recursively calculates the tree size for all nodes
{
    if (tree.children !== undefined) {
        var size = 0;
        for (var i=0; i<tree.children.length; ++i) {
            size += setTreeSize(tree.children[i]);
        }
        tree.size = size;
    }
    if (tree.children === undefined) {
        // do nothing, tree.size is already defined for leaves
    }
    return tree.size;
};

function setTreeCount(tree)
// Recursively calculates the number of subnodes of all nodes
{
    if (tree.children !== undefined) {
        var count = 0;
        for (var i=0; i<tree.children.length; ++i) {
            count += setTreeCount(tree.children[i]);
        }
        tree.count = count;
    }
    if (tree.children === undefined) {
        tree.count = 1;
    }
    return tree.count;
}

function setTreeDepth(tree, depth)
// Returns maximum depth over all children
{
    tree.depth = depth; // Assignment to this node
    var max_depth = depth; // To be found later
    if (tree.children !== undefined) {
        // For each child get the maximum depth and update if greater
        for (var i=0; i<tree.children.length; ++i) {
            var max_child_depth = setTreeDepth(tree.children[i],depth+1);
            if (max_child_depth > max_depth) {
                max_depth = max_child_depth;
            }
        }
    }
    if (tree.children === undefined) {
        // If there are no children, leave max_depth as is.
    }
    tree.max_depth = max_depth // Free data, why not.
    return max_depth;
};

setTreeSize(data);
setTreeCount(data);
var maxDepth = setTreeDepth(data, 0);

//////////////////////////////////////////////////////////////////////////////
// THIS IS THE MAIN CODE FOR THE TREEMAPPING TECHNIQUE

function setRectangles(rect, tree, sizeFunc, parityFunc = function(tree) {
    return tree.depth%2;
})
/*  rect        - actually, just a dictionary of rectangle attributes.
    tree        - the data structure to recursively iterate setRectanges for.
    sizeFunc    - the measure function; the function determining size.
    parityFunc  - Function takes a tree to 0 or 1 for direction of split. 
*/
{
    var i; //?
    tree.rect = rect; // Store the attributes of this node's rectangle.
    var height = rect.y2 - rect.y1;
    var width = rect.x2 - rect.x1;
    var border = 5; //Some prettifying function
    //var border = 15*(1.0 - tree.depth/(maxDepth+1)); //Some prettifying function
    // Save metadata
    tree.height = Math.max(height,0)
    tree.width = Math.max(width,0)
    tree.border = border

    if (tree.children !== undefined) {
        //Generate a cumulative sum of sizes
        var cumulativeSizes = [0];
        for (i=0; i<tree.children.length; ++i) {
            cumulativeSizes.push(cumulativeSizes[i] + sizeFunc(tree.children[i]));
        }
        var max_size = cumulativeSizes[cumulativeSizes.length-1];
        var scale = d3.scaleLinear()
                .domain([0, max_size]);
        var parity = parityFunc(tree);
        // WRITE THIS PART.
        // hint: set the range of the "scale" variable above appropriately,
        // depending on the shape of the current rectangle.
        for (i=0; i<tree.children.length; ++i) { // For each child

            cs1 = cumulativeSizes[i]
            cs2 = cumulativeSizes[i+1]

            //--BORDERS--: s1b = first split dimension border, etc
            var s1b=border,s2b=border,n1b=border,n2b=border;
            //Fancy border handling
            //var isFirst = (i==0)
            //var isLast = (i==tree.children.length-1)
            //if (isFirst && isLast) {/*borders are fine*/}
            //else { if (!isLast) {s2b/=2.0;}; if (!isFirst) {s1b/=2.0;}}
            
            var newRect = {}
            if (parity == 0) {
                scale.range([rect.x1+s1b,rect.x2-s2b]);
                newRect = { x1: scale(cs1), x2: scale(cs2), y1: rect.y1+n1b, y2: rect.y2-n2b};
            }
            if (parity == 1) {
                scale.range([rect.y1+s1b,rect.y2-s2b]);
                newRect = {x1: rect.x1+n1b, x2: rect.x2-n2b, y1: scale(cs1), y2: scale(cs2)};
            }
            setRectangles(newRect, tree.children[i], sizeFunc, parityFunc);
        }
    }
}

var width = window.innerWidth; // Had no clue this was a thing
var height = window.innerHeight;

setRectangles(
    {x1: 0, x2: width, y1: 0, y2: height}, data,
    function(t) { return t.size; }
);

function makeTreeNodeList(tree, lst)
// Copies data into a list-of-lists structure for d3's use.
{
    lst.push(tree);
    if (tree.children !== undefined) {
        for (var i=0; i<tree.children.length; ++i) {
            makeTreeNodeList(tree.children[i], lst);
        }
    }
}
var treeNodeList = [];
makeTreeNodeList(data, treeNodeList);

var gs = d3.select("#svg")
        .attr("width", width)
        .attr("height", height)
        .selectAll("g")
        .data(treeNodeList)
        .enter()
        .append("g");

var cmap = d3.scaleLinear().domain([0,maxDepth])
    .range([d3.hcl(50,100,100),d3.hcl(50+180,70,50)])
    .interpolate(d3.interpolateHclLong)

function setRectAttrs(sel) {
    // WRITE THIS PART.
    sel.attr("width", function(treeNode) {
        return treeNode.width;
    }).attr("height", function(treeNode) {
        return treeNode.height;
    }).attr("x", function(treeNode) {
        return treeNode.rect.x1;
    }).attr("y", function(treeNode) {
        return treeNode.rect.y1;
    }).attr("fill", function(treeNode) {
        return cmap(treeNode.depth);
    }).attr("stroke", function(treeNode) {
        return 'black';
    }).attr("title", function(treeNode) {
        return treeNode.name;
    })
}



function setRectanglesSquare(rect, tree, sizeFunc, parityFunc = function(tree) {
    return tree.depth%2;
})
//  Implements the Squarified TreeMap Algorithm, using a more intuitive flow and variable choice.
/*  rect        - sets dictionary of rectangle attributes.
        {x1, x2, y1, y2}
    tree        - the data structure to recursively iterate setRectanges for.
        {border, children, count, depth, height, max_depth, name, rect, size, width}
    sizeFunc    - the measure function; the function determining size.
    parityFunc  - Function takes a tree to 0 or 1 for direction of split. 
*/
{
    //--------------------------------- HELPER FUNCTIONS -----------------------------------//
    function sharedLength(stackedOrphans, stackSideLength) { // The width of an entire row (function of area of whole row) [<--------->]
        var areaOfOrphans = stackedOrphans.reduce(function(prev,cur,ind) {return prev+sizeToArea(sizeFunc(cur));}, 0);
        return ( areaOfOrphans / stackSideLength);}
    function individualLengths(stackedOrphans, sharedLength) { // The lengths of each element of the row [<--->][<------->][<->]
        return stackedOrphans.map((orphan) => sizeToArea(sizeFunc(orphan))/sharedLength)
    }
    function worstAspectRatio(indLengths, shLength) { // Returns worst aspect ratio
        var aspect_ratios = indLengths.map( (len)=> Math.max( shLength/len, len/shLength ) )
        return Math.max(...aspect_ratios); // Hopefully the spread operator is implemented on your machine.
    }
    function adoptOrphans(notAdopted, stackSideLength) {
        // Returns [adopted, not_adopted], where some of the orphans have been adopted.
        prevWorstAspectRatio = Infinity // Next has to be better aspect ratio than this.
        var adopted = []
        for (i=0; i<notAdopted.length; ++i) {
            adopted.push(notAdopted.pop()) // Try a new candidate.
            var shLength = sharedLength(adopted, stackSideLength)
            var indLengths = individualLengths(adopted, shLength)
            var newWorstAspectRatio = worstAspectRatio(indLengths, shLength)
            if (newWorstAspectRatio < prevWorstAspectRatio) { // If the worst aspect ratio has improved with the new addition
                prevWorstAspectRatio = newWorstAspectRatio;
                continue; //accept the new addition.
            }
            else { //If it got worst, the paper says to accept the previous list, and reject the last orphan.
                notAdopted.push(adopted.pop())
                break;
            }
        }
        return {'adopted':adopted, 'notAdopted':notAdopted};
    }
    //------------------------------------ Main --------------------------------------//
    var i; //?
    tree.rect = rect; // Set Rect!
    var height = rect.y2 - rect.y1;
    var width = rect.x2 - rect.x1;
    var border = 5; //Some prettifying function
    //var border = 15*(1.0 - tree.depth/(maxDepth+1)); //Some prettifying function
    // Save metadata
    tree.height = Math.max(height,0)
    tree.width = Math.max(width,0)
    tree.border = border
    // My code refactors the paper's algorithm into plain english, amusingly relying on adoption metaphores of children.
    // Complaint: The paper's choice of pseudocode, variables, etc. was poor.
    if (tree.children !== undefined) {
        // Sort children in size, as suggested by paper. Reverse so we can use pop and push upon the largest first.
        tree.children.sort(function(a,b) {return (sizeFunc(a) > sizeFunc(b)) ? 1 : (sizeFunc(b) > sizeFunc(a)) ? -1 : 0;} );
        var orphans = tree.children; // List of unassigned children. //HOLY CRAP this is a pointer to the actual tree!
        // variables starting with 'enc' are measured in pixels or square pixels. (what's a pixel times a pixel? Hmm.)
        var enc = {x1:tree.rect.x1+border,x2:tree.rect.x2-border,y1:tree.rect.y1+border,y2:tree.rect.y2-border} // Rectangle object of current enclosure. // COPY DANGER.
        var allAdoptedChildren = []
        while (orphans.length > 0) {
            var encWH = [(enc.x2 - enc.x1),(enc.y2 - enc.y1)]
            var encArea = encWH[0]*encWH[1]
            var sizeOfOrphans = orphans.reduce(function(prev,cur,ind) {return prev+sizeFunc(cur);}, 0)
            var sizeToArea = d3.scaleLinear().domain([0,sizeOfOrphans]).range([0,encArea])
            var widthGreaterThanHeight = encWH[0] > encWH[1]
            var stackSideLength = encWH[+widthGreaterThanHeight] // + converts boolean to integer I found out.
            // Do the adoption
            var adoptionResults = adoptOrphans(orphans, stackSideLength) //only the side length matters it turns out.
            orphans = adoptionResults.notAdopted
            var adopted = adoptionResults.adopted
            // Calculate positioning data
            var sharedLen = sharedLength(adopted, stackSideLength);
            var cumSize = [0]
            for (i=0; i < adopted.length; ++i) {
                cumSize[i+1] = cumSize[i]+sizeFunc(adopted[i]);
            }
            var totalSize = cumSize.slice(-1)[0];
            var scaleSide = d3.scaleLinear().domain([0,totalSize]).range([0,stackSideLength]);
            // Assign rectangles to adopted children.
            i = 0 // Yeah this probably not my cleanest loop.
            while (adopted.length > 0) {
                var adoptee = adopted.pop()
                if (!widthGreaterThanHeight) {
                    adoptee.rect = {x1: scaleSide(cumSize[i])+enc.x1, x2: scaleSide(cumSize[i+1])+enc.x1, y1:enc.y1, y2:enc.y1+sharedLen}
                }
                else {
                    adoptee.rect = {y1: scaleSide(cumSize[i])+enc.y1, y2: scaleSide(cumSize[i+1])+enc.y1, x1:enc.x1, x2:enc.x1+sharedLen}
                }
                allAdoptedChildren.push(adoptee) //transfer the adoptions.
                i += 1;
            }
            //Update boundary (corner moves from top-left to bottom-right)
            if (!widthGreaterThanHeight) {
                enc.y1 = enc.y1+sharedLen; 
            } else {
                enc.x1 = enc.x1+sharedLen;
            }
        }
        tree.children = allAdoptedChildren; // Return the tree its now-adopted children.
        for (i=0; i< tree.children.length; ++i) { // Now do it for the children, too.
            setRectanglesSquare(tree.children[i].rect,tree.children[i],sizeFunc,parityFunc);
        }
    }
}

//------------ Main ------------------
gs.append("rect").call(setRectAttrs);



d3.select("#size").on("click", function() {
    setRectangles(
        {x1: 0, x2: width, y1: 0, y2: height}, data,
        function(t) { return t.size; }
    );
    d3.selectAll("rect").transition().duration(1000).call(setRectAttrs);
});
d3.select("#count").on("click", function() {
    setRectangles(
        {x1: 0, x2: width, y1: 0, y2: height}, data,
        function(t) { return t.count; }
    );
    d3.selectAll("rect").transition().duration(1000).call(setRectAttrs);
});



// Controls parity of cutting for "Best Cut" approach.
function bestCut(tree) {
    if (tree.height > tree.width) {return 1;}
    else {return 0;}
}
d3.select("#best-size").on("click", function() {
    setRectangles(
        {x1: 0, x2: width, y1: 0, y2: height}, data,
        function(t) { return t.size; }, bestCut
    );
    d3.selectAll("rect").transition().duration(1000).call(setRectAttrs);
});
d3.select("#best-count").on("click", function() {
    setRectangles(
        {x1: 0, x2: width, y1: 0, y2: height}, data,
        function(t) { return t.count; }, bestCut
    );
    d3.selectAll("rect").transition().duration(1000).call(setRectAttrs);
});



// Controls parity of cutting for "Best Cut" approach.
d3.select("#square-size").on("click", function() {
    setRectanglesSquare(
        {x1: 0, x2: width, y1: 0, y2: height}, data,
        function(t) { return t.size; }
    );
    d3.selectAll("rect").transition().duration(1000).call(setRectAttrs);
});
d3.select("#square-count").on("click", function() {
    setRectanglesSquare(
        {x1: 0, x2: width, y1: 0, y2: height}, data,
        function(t) { return t.count; }
    );
    d3.selectAll("rect").transition().duration(1000).call(setRectAttrs);
});