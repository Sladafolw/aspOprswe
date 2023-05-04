class Penalty extends Method {


    constructor(x, y, z, bx, bz, limitation1, limitation2, func, elem, h, e, f1, b, r, scope, fbaz, data,tt1,tt2,h2) {
        super();
        this.fbaz = fbaz;
        this.data = data;
        this.x = x;
        this.f1 = f1;
        this.y = y;
        this.z = z;
        this.bx = bx;
        this.bz = bz;
        this.e = e;
        this.h = h;
        this.limitation1 = limitation1;
        this.limitation2 = limitation2;
        this.func = func;
        this.elem = elem;
        this.b = b;
        this.r = r;
        this.scope = scope;
        this.tt1 = tt1;
        this.tt2 = tt2;
        this.h2 = h2;

    } Optimiz(first, second, h, fbaz,) {
        var scope = {
            x1: this.scope.x1,
            x2: this.scope.x2
        };
        //if (this.k == 0) {
        //    this.pathfinder = { x1: this.scope.x1, x2: this.scope.x2 }
        //}
        //    if (this.k == 3)
        //    {
        //        this.k = 0;
        //        if (Math.abs(this.pathfinder.x1 - this.scope.x1) < this.e *4&&Math.abs(this.pathfinder.x2 - this.scope.x2) < this.e * 4)
        //        { this.h = (this.h - this.e)/2 ; }
        //}
        if (this.k > 4) { this.k = 0; }
        if (first == '-' && second == '=') { scope.x1 = this.scope.x1 - h; }
        if (first == '+' && second == '=') { scope.x1 = this.scope.x1 + h; }
        if (first == '=' && second == '+') { scope.x2 = this.scope.x2 + h; }
        if (first == '=' && second == '-') { scope.x2 = this.scope.x2 - h; }
        if (first == '+' && second == '+') { scope.x1 = this.scope.x1 + h; scope.x2 = this.scope.x2 + h; }
        if (first == '+' && second == '-') { scope.x1 = this.scope.x1 + h; scope.x2 = this.scope.x2 - h; }
        if (first == '-' && second == '-') { scope.x1 = this.scope.x1 - h; scope.x2 = this.scope.x2 - h; }
        if (first == '-' && second == '+') { scope.x1 = this.scope.x1 - h; scope.x2 = this.scope.x2 + h; }

        var a;
        this.f1 = this.funcWithPx(this.func, this.limitation1, this.limitation2, scope, this.r);
        if (this.elem == "min") { a = this.fbaz > this.f1; }
        if (this.elem == "max") { a = this.fbaz < this.f1; }
        if (a) {
            /*this.k++;*/
         /*   this.h = this.h - this.e;*/
            this.scope.x1 = scope.x1;
            this.scope.x2 = scope.x2;
            this.fbaz = this.f1;
            this.x.push(scope.x1);
            this.y.push(this.fbaz);
            this.z.push(scope.x2);
            this.data.add({
                x: scope.x1,
                y: scope.x2,
                z: this.fbaz,
                style: this.fbaz

            });


            return "marker";

        }
        if (a) {
            /*  this.k++;*/
            this.scope.x1 = scope.x1;
            this.scope.x2 = scope.x2;
        };
    }


    //evaluates(limitation1, limitation2, scope) {

    //    limitation1 = math.evaluate(limitation1, scope);
    //    limitation2 = math.evaluate(limitation2, scope);
    //    return limitation1 && limitation2;
    //}
    funcWithPx(func, limit1, limit2, scope,) {
        var px;
        limit1 = math.evaluate(limit1, scope);
        limit2 = math.evaluate(limit2, scope);
        px = this.r * ((1 / limit1) + (1 / limit2));
        if (px > this.r);
        { this.r = this.r / this.b; }
        f1 = math.evaluate(func, scope) + px;
        return f1;
    }
    solveAndDraw(idGraph) {
        let lim1 = this.limitation1;
        let lim2 = this.limitation2;
        try {
            if (!(math.evaluate(this.limitation1, this.scope) && math.evaluate(this.limitation2, this.scope)))
            {
                alert("точка не соответствует ограничениям");
                return;
            }
            if (this.r < 1 || this.b < 1 || this.b < 0) { return; }
            this.limitation1 = this.limitationReplace(this.limitation1);
            this.limitation2 = this.limitationReplace(this.limitation2);
            this.fbaz = math.evaluate(this.func, this.scope);
            this.data = new vis.DataSet();

            while (this.h > this.e) {
                if (this.Optimiz('+', '=', this.h, this.fbaz,) == "marker") { continue; }
                if (this.Optimiz('=', '-', this.h, this.fbaz,) == "marker") { continue; }
                if (this.Optimiz('=', '+', this.h, this.fbaz,) == "marker") { continue; }
                if (this.Optimiz('-', '=', this.h, this.fbaz,) == "marker") { continue; }
                if (this.Optimiz('+', '+', this.h, this.fbaz,) == "marker") { continue; }
                if (this.Optimiz('+', '-', this.h, this.fbaz,) == "marker") { continue; }
                if (this.Optimiz('-', '+', this.h, this.fbaz,) == "marker") { continue; }
                if (this.Optimiz('-', '-', this.h, this.fbaz,) == "marker") { continue; }

                this.h = (this.h - this.e);
            }
        } catch { }
        var a;
        if (this.elem == 'min') { a = this.indexOfSmallest(this.y); }
        else { a = this.indexOfBigger(this.y); }
        alert("its penalty method= " + "x=" + this.x[a] + " z=" + this.z[a] + " y=" + this.y[a]);
        

       //
      
       
        let x1=[];
        let y1 = [];
        let z1 = [];
        let xr1 = [];
        let yr1 = [];
        let zr1 = [];
        try {
            this.h = 1;
            for (let i = this.tt1; i < this.tt2; i = i + this.h2) {
                for (let j = this.tt1; j < this.tt2; j = j + this.h2) {
                        this.scope.x1 = i;
                        this.scope.x2 = j;
                        var limitation1t = math.evaluate(lim1, this.scope);
                        var limitation2t = math.evaluate(lim2, this.scope);

                        if (limitation1t == true && limitation2t == true) {
                            var value = math.evaluate(this.func, this.scope);
                           xr1.push(i);
                           yr1.push(value);
                            zr1.push(j);
                            
                        }
                    }
                }
      

            }

            catch { }
        let arrs = this.getXYZ(this.tt1,this.tt2,this.h2,this.func);
        x1 = arrs[0];
        y1 = arrs[1];
        z1 = arrs[2];
        

        this.scope.x1 = this.bx;
        this.scope.x2 = this.bz;
        let allGraphicPar = this.allGraphic(x1, y1, z1);

        let end = this.minOrMaxDot([this.x[a]], [this.z[a]], [this.y[a]], this.elem);
        let path = this.getPathFromDot(this.x, this.z,this.y);
        this.creatChart(allGraphicPar, path, end);
        let arr = this.getDotsInLimits(this.x, this.y);
     
        this.creatChart2D(this.getContour2D(x1, y1, z1), this.getAllDots2D(xr1, zr1), this.minOrMaxDot2D(end.y,end.x, this.elem) ,this.getPathFromDot2D(this.x, this.z));
        this.drawing(this.data, 'dot-color', idGraph);
    }

    limitationReplace(lim) {
        var rightPart = " "; var leftPart = " ";
        var index = lim.indexOf('<=', 0);
        if (index != -1) {
            while (index < lim.length - 2) {
                index = index + 1;
                rightPart += lim[index + 1];

            }
            for (var i = 0; i < index - 3; i++) {
                if (lim[i] == "-") {
                    leftPart += "+"; continue;
                }
                if (lim[i] == "+") { leftPart += "-"; continue; }
                leftPart += lim[i];
            }
            
        } else {
            var index = lim.indexOf('>=', 0);
            while (index < lim.length -2) {
                index = index + 1;
                if (lim[index + 1] == "-") {
                    rightPart += "+"; continue;
                }
                if (lim[index + 1] == "+") { rightPart += "-"; continue; }
              
            
                rightPart += lim[index + 1];

            }
            for (var i = 0; i < index-2 ; i++) {
                leftPart += lim[i];
            } 
        }
        return leftPart + rightPart;

    }
}