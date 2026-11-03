// Tudo é Objeto 

const menu = {
    seletor: '.principal',
}

console.log(menu.seletor.toUpperCase());

// Fuction

function upperName(name) {
    return name.toUpperCase();
}

// console.log(upperName('andre'));

// Arrow functions

const loweName = () => {

}

// Expressão
// const upperName = function (name) {
//     return name.toUpperCase();
// }
// console.log(upperNamee('andre2'));


// Desestruturação 
function handleMouse (event) {
    const {clientX, clientY} = event;
    console.log(clientX, clientY)
}

document.addEventListener('click', handleMouse);

// Arrays

const frutas = ['Banana', 'uva']
const [fruta1, fruta2] = frutas;
console.log(fruta2)

const useQuadrado = [4, function (lado) {
        return 4 * lado;
    }
]

const [lados, perimetro] = useQuadrado;
console.log(lados)
console.log(perimetro(10))

// Rest e express 

function showList (empresa, clientes) {
    clientes.forEach((cliente) => {
        console.log(cliente, empresa);
    });
}

showList('Google', ['Andre', 'Rafael']);

const maior = Math.max(10, 5, 20)
console.log(maior);

import { areaQuadrado } from "./quadrado.js";
console.log(areaQuadrado(5));

const grupoA = 100;
const grupoB = 200;

if (grupoA > grupoB) {
    console.log('Grupo A, Ganhou')
} else {
    console.log('Grupo B, Ganhou')
}

const vencedor = grupoA > grupoB ? 'Grupo A Venceu' : 'Grupo B Venceu'
console.log(vencedor)