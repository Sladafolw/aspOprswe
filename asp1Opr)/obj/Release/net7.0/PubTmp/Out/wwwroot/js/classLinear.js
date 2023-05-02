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
            alert("its linear method= "+"x=" + this.x[a] + " z=" + this.z[a] + " y=" + this.y[a]);
            this.drawing(data, 'surface', idGraph );

        }

        catch { }
    }

}