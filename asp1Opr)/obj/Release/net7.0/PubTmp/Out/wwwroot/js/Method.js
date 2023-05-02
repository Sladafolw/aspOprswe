class Method {
    solveAndDraw(idGraph) { }
    drawing(data,style,idGraph) {

        var options = {
            width: String(window.innerWidth / 1.5 + "px"),
            height: String(window.innerHeight-60+"px"),
            style: style,
            showPerspective: true,
            showGrid: true,
            showShadow: false,
            keepAspectRatio: true,
            verticalRatio: 0.5
        };

        // create a graph3d
        var container = document.getElementById(idGraph);
        graph3d = new vis.Graph3d(container, data, options);
    }
    indexOfSmallest(a) {
        var lowest = 0;
        for (var i = 1; i < a.length; i++) {
            if (a[i] < a[lowest])
                lowest = i;
        }
        return lowest;
    }
 random(min, max) {
    return min + Math.random() * (max - min);
}
indexOfBigger(a) {
    var lowest = 0;
    for (var i = 1; i < a.length; i++) {
        if (a[i] > a[lowest])
            lowest = i;
    }
    return lowest;
}// Declaration

} 