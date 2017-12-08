
var myTree = tree().height(500).width(960);

rootdata.data

d3.text('data.tsv', function(error, text) {
    /*
    if (error) throw error;
    var table = [{
        name: 'detected',
        parent: null
    }];
    var genes = [];
    var drugs = [];

    // Irrelevant
    d3.tsvParseRows(text, function (d, i) {
        if (d[0].startsWith('#')) return;

        if (!genes.find(function(element){ return element === d[5]; })) {
            table.push({
                name: d[5],
                parent: d[6]
            });
            genes.push(d[5]);
        }

        if (!drugs.find(function(element){ return element === d[6]; })) {
            table.push({
                name: d[6],
                parent: "detected"
            });
            drugs.push(d[6]);
        }
    });

    // My data is already heirarchical.
    var root = d3.stratify()
        .id(function(d) { return d.name; })
        .parentId(function (d) { return d.parent; })
        (table);

    */
    // My data already has nice root (root.children, etc)
    /*Before you can compute a hierarchical layout, you need a root node. 
    If your data is already in a hierarchical format, such as JSON, you 
    can pass it directly to d3.hierarchy; */
    
    root = rootdata.data // (Or Whatever Data You Want To Use)
    myTree.edge_dict(rootdata.edges)
    myTree.data(root);
    // I believe this just passes the selection to
    d3.select('#chart')
        .call(myTree);
});

    