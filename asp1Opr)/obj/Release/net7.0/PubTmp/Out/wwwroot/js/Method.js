class Method {
    solveAndDraw(idGraph) { }
    drawing(data, style, idGraph) {

        var options = {
            width: String(window.innerWidth / 1.5 + "px"),
            height: String(window.innerHeight - 60 + "px"),
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
    minOrMaxDot(x, y, z, type) {
        var minDot = {
            x: y,
            y: x,
            z: z,

            mode: 'markers',
            marker: {
                color: 'rgb(255,115,0)',
                size: 8,

                symbol: 'circle',
                line: {
                    color: 'rgb(204, 204, 204)',
                    width: 1
                },
                opacity: 0.8
            },
            name: type,
            type: 'scatter3d'
        };
        return minDot;
    }

    allDot(x, y, z) {
        var allDot = {
            x: y,
            y: x,
            z: z,

            mode: 'markers',
            marker: {
                color: 'rgb(51,51,51)',
                size: 3,

                symbol: 'circle',
                line: {
                    color: 'rgb(204, 204, 204)',
                    width: 1
                },
                opacity: 0.8
            },
            name: 'Допустимые',
            type: 'scatter3d'
        };
        return allDot;
    }
    getPathFromDot(x1, y1, z1) {
        let path = {
            type: 'scatter3d',
            mode: 'lines+markers',
            name: 'Путь',
            x: y1,
            y: x1,
            z: z1,
            opacity: 1,
            line: {
                width: 15,
                color: 'rgb(0,255,64)',
                reversescale: "Viridis"
            },
            marker: {
                name: 'Часть Пути',
                size: 3.5,
                color: 'rgb(238,8,9)',
                colorscale: "Greens",
                cmin: -20,
                cmax: 50
            }
        };

        return path;
    }

    getPathFromDot2D(x1, y1) {
        let path = {
            x: x1,
            y: y1,
            mode: 'markers+lines',
            name: 'Путь',
            line: { color: 'green' },
            type: 'scatter',
            marker: {
                color: 'rgb(0,253,200)',
                size: 6
            },
        };

        return path;
    }

    allGraphic(x1, y1, z1) {
        var allGraphic = { x: x1, y: y1, z: z1, name: 'График', type: 'surface', showscale: false };
        return allGraphic;
    }

    creatChart(...args) {
        let arr = [];
        args.forEach(arg => arr.push(arg));
        var layout = {
            margin: {
                l: 0,
                r: 0,
                b: 0,
                t: 0
            }
        };
        Plotly.newPlot('myDiv', arr, layout);
    }
    minOrMaxDot2D(mx, my, type) {
        var minDot = {
            x: mx,
            y: my,


            mode: 'markers',
            marker: {
                color: 'rgb(219, 64, 82)',
                size: 12
            },
            name: type
        };
        return minDot;
    }
    getContour2D(x1, y1, z1) {
        var trace1 = {
            x: x1,
            y: y1,
            z: z1,

            showscale: false,
            type: 'contour'
        };
        return trace1;
    }
    getAllDots2D(x, y) {
        var trace2 = {
            x: x,
            y: y,
            mode: 'markers',
            name: 'Допустимые',
            line: { color: 'black' },
            type: 'scatter'
        };
        return trace2;
    }
    creatChart2D(...args) {


        let arr = [];
        args.forEach(arg => arr.push(arg));

        Plotly.newPlot('myDiv2', arr);

    }
    getDotsInLimits(x, y) {
        let true_value_x = [];
        let true_value_y = [];


        return [x, y];
    }

    getLimits() {
        tb = [[]];
        let table = document.getElementById("table");
        for (let row of table.rows) {
            t = [];
            for (let cell of row.cells) {
                t.push(cell.children[0].value);
                // console.log(cell.children[0].value);
            }
            t.pop();
            tb.push(t);
        }
        return tb;
    }
    getP(x, y) {
        tb = getLimits();
        ar = [];
        for (let i = 1; i < tb.length; i++) {
            let superexpr = "";
            arr = tb[i];
            let tmp = arr[0] + "-(" + arr[2] + ")";
            if (arr[1] == "<=" || arr[1] == "<") {
                tmp = "(" + tmp + ")/(-1)";
            }
            superexpr = "(" + tmp + ")^2";
            ar.push(superexpr);
            //console.log(superexpr);
        }

        let sum = 0;
        for (let i = 0; i < ar.length; i++) {
            sum = Number(sum) + Number(math.evaluate(ar[i], { x1: x, x2: y }));

        }
        return (sum);
    }

    isOk(x, y) {
        let scope = {
            x1: x,
            x2: y
        }
        tb = this.getLimits();

        for (let i = 1; i < tb.length; i++) {
            arr = tb[i];

            if (equls(math.evaluate(arr[0], scope), arr[1], math.evaluate(arr[2], scope)) == false) {
                return false;
            }
        }
        return true;
    }
    getXYZ(tt1,tt2,h2,func) {
        let x1 = [];
        let y1 = [];
        let z1 = [];
        let n1 = tt1;
        let n2 = tt2;
        let step = h2;

        let n = (Math.abs(n1) + Math.abs(n2)) / step;
        n = Math.floor(n);
        for (let i = 0; i < n; i++) {
            x1.push(Number(n1) + (step * i));
            y1.push(Number(n1) + (step * i));
        }
        for (let i = 0; i < x1.length; i++) {
            let tmp = [];

            for (let j = 0; j < y1.length; j++) {
                let scope = {
                    x1: x1[i],
                    x2: y1[j]
                }
                tmp.push(math.evaluate(func, scope));

            }
            z1.push(tmp);
        }
        return [x1, y1, z1];
    }


} 