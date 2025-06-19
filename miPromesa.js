//Promesa si cumple
const miPromesaCumple = new Promise((resolve, reject) => {
    console.log("Mayores de 18");
    const anioNacimiento = 2000;
    const anioActual = 2025;
    const edad = anioActual - anioNacimiento;

    console.log("Edad calculada:", edad);

    if (edad >= 18) { 
        resolve("Eres mayor de edad.");
    } else {
        reject("Prohibido el ingreso.");
    }
});


miPromesaCumple
.then((resultadoC)=>{
    console.log("Pasas", resultadoC)
})

.catch((errorC)=>{
    console.log("No pasas", errorC)
})

//Promesa no cumple

const miPromesaNota= new Promise((resolve, reject) => {
    console.log("Pasas si tu nota es mayor a 4.5");
    const nota1 = 2.5;
    const nota2 = 1.0;
    const nota3 = 2.0;
    const suma = nota1 + nota2 + nota3;
    const resultado = suma/3

    console.log("Tu nota es --> ", resultado);

    if (resultado >= 4.5) { 
        resolve("Felicitaciones pasaste ");
    } else {
        reject("Le toca repetir :( ");
    }
});


miPromesaNota
.then((resultadoN)=>{
    console.log("Pasas", resultadoN)
})

.catch((errorN)=>{
    console.log("No pasas", errorN)
})

