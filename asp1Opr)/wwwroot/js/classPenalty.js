class Penalty extends Method {


    constructor(x, y, z, bx, bz, limitation1, limitation2, func, elem, h, e, f1, b, r, scope, fbaz, data) {
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
            this.h = this.h - this.e;
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

        try {

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
        alert("its Hook method= " + "x=" + this.x[a] + " z=" + this.z[a] + " y=" + this.y[a]);
        this.drawing(this.data, 'dot-color', idGraph);
        creatChart2D(getContour2D(x1, y1, z1), getAllDots2D(x, y), getPathFromDot2D(x, y), minOrMaxDot2D(end.y, end.x, document.getElementById("typeOfSearch").value));

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