class Planeta {
    constructor(num, nom, dist, tam) {
        this.numero = num;
        this.nombre = nom;
        this.distancia = dist;
        this.tamano = tam;
    }
}
let arrayPlanetas = [];

let enviar = document.getElementById('enviar');
let ordenar = document.getElementById('ordenar');

enviar.addEventListener('click', (e) => {
    e.preventDefault();
    crearPlanetas();  
})

ordenar.addEventListener('click', (e) => {
    e.preventDefault();
    ordenarPlanetas();
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
        // array.push(planeta);
    }
    console.log(arrayPlanetas);
}



// let ordenarPlanetas = (planetas) => {

//     console.log(planetas);

// }

