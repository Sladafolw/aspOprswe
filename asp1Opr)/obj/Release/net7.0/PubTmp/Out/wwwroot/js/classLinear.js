class Linear1Lab extends Method {


    constructor(x, y, z, x1s, x2s, x1e, x2e, h, limitation1, limitation2, func, elem, scope) {
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
    }


    solveAndDraw(idGraph) {
        var graph = null; var data = new vis.DataSet();
        try {
            for (let i = this.x1s; i < this.x1e; i = i + this.h) {
                for (let j = this.x2s; j < this.x2e; j = j + this.h) {
                    this.scope.x1 = i;
                    this.scope.x2 = j;
                    var limitation1t = math.evaluate(this.limitation1, this.scope);
                    var limitation2t = math.evaluate(this.limitation2, this.scope);
                    if (limitation1t == true && limitation2t == true) {
                        var value = math.evaluate(this.func, this.scope);
                        this.x.push(i);
                        this.y.push(value);
                        this.z.push(j);
                        data.add({
                            x: i,
                            y: j,
                            z: value,
                            style: value
                        });
                    }
                }
            }
           var a;
            if (this.elem == 'min') { a = this.indexOfSmallest(this.y); }
            else { a = this.indexOfBigger(this.y); }
            alert("its linear method= " + "x=" + this.x[a] + " z=" + this.z[a] + " y=" + this.y[a]);
            let x1 = [];
            let y1 = [];
            let z1 = [];
            let arrs = this.getXYZ(this.x1s, this.x1e, this.h, this.func);
            x1 = arrs[0];
            y1 = arrs[1];
            z1 = arrs[2];


         
            let allGraphicPar = this.allGraphic(x1, y1, z1);

            let end = this.minOrMaxDot([this.x[a]], [this.z[a]], [this.y[a]], this.elem);
            let path = this.getPathFromDot(this.x, this.z,this.y);
            this.creatChart(allGraphicPar, path, end);
            let arr = this.getDotsInLimits(this.x, this.y);

            this.creatChart2D(this.getContour2D(x1, y1, z1), this.getAllDots2D(x, z), this.minOrMaxDot2D(end.y, end.x, this.elem), this.getPathFromDot2D(this.x, this.z));

            this.drawing(data, 'surface', idGraph );

        }

        catch { }
    }

}