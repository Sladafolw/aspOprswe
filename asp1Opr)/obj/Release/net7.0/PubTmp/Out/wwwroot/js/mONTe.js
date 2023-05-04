document.getElementById('submit').addEventListener('click', function () {

    alert("work");
    var monteCarllo = new MonteCarllo(x = [], y = [], z = [], parseInt(document.getElementById("x1S").value), parseInt(document.getElementById("x2S").value),
        parseInt(document.getElementById("x1E").value), parseInt(document.getElementById("x2E").value),
        parseInt(document.getElementById("h").value), document.getElementById("limitation1").value, document.getElementById("limitation2").value,
        document.getElementById("func").value, document.getElementById("minmax").value, document.getElementById("k").value, scope = {
            x1: 1,
            x2: 1
    });

    monteCarllo.solveAndDraw('mygraph');
    //var linear = new Linear1Lab(x = [], y = [], z = [], parseInt(document.getElementById("x1S").value), parseInt(document.getElementById("x2S").value),
    //    parseInt(document.getElementById("x1E").value), parseInt(document.getElementById("x2E").value),
    //    parseInt(document.getElementById("h").value), document.getElementById("limitation1").value, document.getElementById("limitation2").value,
    //    document.getElementById("func").value, document.getElementById("minmax").value, scope = {
    //        x1: 1,
    //        x2: 1
    //    });
    //linear.solveAndDraw('mygraph2');


});
