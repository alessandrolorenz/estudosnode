var rect = require('./rectangle')

function solveRect(l, b) {
    console.log("Solving rect - l = " + l +" e b = " + b)
    rect(l, b, (err, rectangle) => {
        if(err) {
            console.log("ERRO: ", err.message);
        }
        else {
            console.log("area = " + rectangle.area());
            console.log("perimetro = " + rectangle.perimeter());
        }

    });
    console.log("after ")
}

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);