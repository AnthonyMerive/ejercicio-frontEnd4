class Planeta {
    constructor(num, nom, dist, tam) {
        this.numero = num;
        this.nombre = nom;
        this.distancia = dist;
        this.tamano = tam;
    }
}

let arrayPlanetas = [];
let arrayNombres = [];

let enviar = document.getElementById('enviar');
let ordenar = document.getElementById('ordenar');

enviar.addEventListener('click', (e) => {
    e.preventDefault();
    crearPlanetas();
    console.log(arrayPlanetas);
})

ordenar.addEventListener('click', (e) => {
    e.preventDefault();
    if (arrayPlanetas.length == 0) {
        alert("no existe arreglo para ordenar")
    } else {
        ordenarPlanetas(arrayPlanetas);
    }
})

let crearPlanetas = () => {
    let num = [...document.querySelectorAll(".planetaNumber")];

    let objectNum = num.map((i) => {
        return parseInt(i.value);
    })

    for (let i = 1; i <= objectNum.length; i++) {

        let num = document.getElementById(`planetaN${i}`).value;
        let nom = document.getElementById(`planetaName${i}`).value;
        let dist = document.getElementById(`planetaDist${i}`).value;
        let tam = document.getElementById(`planetaTam${i}`).value;

        let planeta = new Planeta(num, nom, dist, tam);

        arrayPlanetas = arrayPlanetas.concat(planeta);
        // arrayPlanetas.push(planeta);
    }
    alert("arreglo creado correctamente")
    return arrayPlanetas;
}

let ordenarPlanetas = (planetas) => {

    for (let i = 0; i <= planetas.length-1; i++) {
        // console.log(planetas[i].nombre);
        let nombres = [...planetas[i].nombre]
        arrayNombres = arrayNombres.concat(nombres);
    }
    let NombresOrdenados = arrayNombres.sort();
    console.log(NombresOrdenados)
}

