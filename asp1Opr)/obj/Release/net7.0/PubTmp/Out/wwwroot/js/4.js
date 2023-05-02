document.getElementById('submit').addEventListener('click', function () {

    alert("work");

    var penalty = new Penalty(x = [], y = [], z = [], parseInt(document.getElementById("bx").value ?? random(-10, 10)), parseInt(document.getElementById("bz").value ?? random(-10, 10)),
        document.getElementById("limitation1").value, document.getElementById("limitation2").value,
        document.getElementById("func").value, document.getElementById("minmax").value, parseInt(document.getElementById("h").value), parseFloat(document.getElementById("e").value), f1 = 999999991, parseFloat(document.getElementById("b").value), parseFloat(document.getElementById("r").value), scope = {
            x1: parseInt(document.getElementById("bx").value ?? random(-10, 10)),
            x2: parseInt(document.getElementById("bz").value ?? random(-10, 10))
        },0,0);
    var linear = new Linear1Lab(x = [], y = [], z = [], -15, -15,
        15, 15,
        1, "x1 + 4 * x2 <= 10", "2*x1 + 3*x2>=6",
        document.getElementById("func").value, document.getElementById("minmax").value, scope = {
            x1: 1,
            x2: 1
        }); linear.solveAndDraw('mygraph2');   penalty.solveAndDraw('mygraph');






})
