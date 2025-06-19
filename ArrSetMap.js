//arreglo
const fibonacci = () => {
    let a = inicio;
     b = a + 1;
    let resultado = [];

    for (; a <= final;) {
        if (a >= inicio) {
            resultado.push(a);
        }

        let rest = a + b;
        a = b;
        b = rest;
    }
    console.log("Array:");
    return resultado;
};

const secu = fibonacci();
console.log(secu); 

//set
const fibonacciSet = () => {
    let a = inicio;
    b = a + 1;
    let resultado = new Set();

    while (a <= final) {
        if (a >= inicio) {
            resultado.add(a);
        }
        [a, b] = [b, a + b];
    }
    console.log("Set:");
    return resultado;
};

const secu2 = fibonacciSet();
console.log(secu2); 

//Map
const fibonacciMap = () => {
    let a = inicio;
    b = a + 1;
    let map = new Map();
    let index = 0;

    while (a <= final) {
        if (a >= inicio) {
            map.set(index++, a);
        }
        [a, b] = [b, a + b];
    }

    console.log("Map:");
    for (let [clave, valor] of map) {
        console.log(clave, ":", valor );
    }

    return map;
};

const secu3 = fibonacciMap();
