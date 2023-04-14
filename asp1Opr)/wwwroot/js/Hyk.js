document.getElementById('submit').addEventListener('click', function () {

    alert("work");

    var hook = new Hook(x = [], y = [], z = [], parseInt(document.getElementById("bx").value ?? random(-10, 10)), parseInt(document.getElementById("bz").value ?? random(-10, 10)),
        document.getElementById("limitation1").value, document.getElementById("limitation2").value,
        document.getElementById("func").value, document.getElementById("minmax").value, parseInt(document.getElementById("h").value), parseFloat(document.getElementById("e").value), f1 = 999999991, scope = {
            x1: parseInt(document.getElementById("bx").value ?? random(-10, 10)),
            x2: parseInt(document.getElementById("bz").value ?? random(-10, 10))
        },0,0,0,0);
    hook.solveAndDraw('mygraph');
})



