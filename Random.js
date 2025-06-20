//Random mi promesa

const tarea = () => {
    return new Promise ((resolve, reject) =>{
        const tiempo = Math.floor(Math.random() * 4000);
        if (tiempo <= 2000) {
                setTimeout(() =>{
                resolve("¡Tarea completada! Tiempo: "+ tiempo);
            },  tiempo);
        } else {
                setTimeout(() =>{
                reject("¡Error, no conectado! Tiempo: "+ tiempo)
            }, tiempo);
        
        };
    });
}

tarea()
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    });