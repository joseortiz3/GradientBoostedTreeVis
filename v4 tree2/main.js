
var myTree = tree().height(800).width(1260);

var root = rootdata.data // (Or Whatever Data You Want To Use)
myTree.edge_dict(rootdata.edges)
myTree.data(root);
// I believe this just passes the selection to
d3.select('#chart')
    .call(myTree);

    