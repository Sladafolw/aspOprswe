class MonteCarllo extends Method {


    constructor(x, y, z, x1s, x2s, x1e, x2e, h, limitation1, limitation2, func, elem,k, scope) {
        super();
        this.x = x;
        this.y = y;
        this.z = z;
        this.x1s = x1s;
        this.x2s = x2s;
        this.x1e = x1e;
        this.x2e = x2e;
        this.h = h;
        this.limitation1 = limitation1;
        this.limitation2 = limitation2;
        this.func = func;
        this.elem = elem;
        this.scope = scope;
        this.k = k;
    }


    solveAndDraw(idGraph) {
        var graph = null; var data = new vis.DataSet();
        try {
            var f = 0;
            for (let i = 0; i < this. k; i = i + 1) {
                this.scope.x1 = this.random(this.x1s, this.x1e) + this.random(0, 1) * (-(this.x1s) + this.x1e);
                this.scope.x2 = this.random(this.x2s, this.x2e) + this.random(0, 1) * (-(this.x2s) + this.x2e);

                f = math.evaluate(this.func, this.scope);
                var limitation1t = math.evaluate(this.limitation1, this. scope);
                var limitation2t = math.evaluate(this.limitation2, this. scope);
                if (limitation1t == true && limitation2t == true) {
                    /*  0.5 * x1 * x1 + 0.5 * x2 * x2 - x1 - 2 * x2 + 5*/
                    x.push(scope.x1);
                    y.push(f);
                    z.push(scope.x2);
                    data.add({
                        x: this.scope.x1,
                        y: this.scope.x2,
                        z: f,
                        style: f
                    });

                }

            }
            var a;
            if (this.elem == 'min') { a = this.indexOfSmallest(this.y); }
            else { a = this.indexOfBigger(this.y); }
            alert("its MonteCarllo method= " + "x=" + this.x[a] + " z=" + this.z[a] + " y=" + this.y[a]);
          
            let x1 = [];
            let y1 = [];
            let z1 = [];
            let arrs = this.getXYZ(this.x1s-15, this.x1e+15, this.h, this.func);
            x1 = arrs[0];
            y1 = arrs[1];
            z1 = arrs[2];



            let allGraphicPar = this.allGraphic(x1, y1, z1);

            let end = this.minOrMaxDot([this.x[a]], [this.z[a]], [this.y[a]], this.elem);
            let path = this.getPathFromDot(this.x, this.z, this.y);
            let allDotPar =this. allDot(this.x, this.z, this.y);
            this.creatChart(allGraphicPar, allDotPar, end);
            let arr = this.getDotsInLimits(this.x, this.y);

            this.creatChart2D(this.getContour2D(x1, y1, z1), this.getAllDots2D(this.x, this.z), this.minOrMaxDot2D(end.y, end.x, this.elem));

            this.drawing(data, 'dot-color', idGraph);

        }

        catch { }
    }

}