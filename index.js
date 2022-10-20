const pizzas = [
    {
        id: 1,
        nombre: "pizza de Muzarella",
        precio: 1000,
        ingredientes: ["Muzarella", "Tomate", "Aceitunas"],
    },
    {
        id: 2,
        nombre: "pizza Napolitana",
        precio: 1200,
        ingredientes: ["Muzarella", "Tomate", "Aceitunas", "Oregano"],
    },
    {
        id: 3,
        nombre: "pizza de Cebolla",
        precio: 1200,
        ingredientes: ["Muzarella", "Tomate", "Aceitunas", "Cebolla"],
    },
    {
        id: 4,
        nombre: "pizza de Rucula",
        precio: 1500,
        ingredientes: ["Muzarella", "Tomate", "Aceitunas", "Rucula", "Jamon crudo", "parmesano"],
    },
    {
        id: 5,
        nombre: "pizza de Palmitos",
        precio: 1500,
        ingredientes: ["Muzarella", "Tomate", "Aceitunas", "Palmitos", "Salsa Golf"],
    },
    {
        id: 6,
        nombre: "pizza 4 Quesos",
        precio: 1500,
        ingredientes: ["Muzarella", "Tomate", "Aceitunas", "Roquefort", "Parmesano"],
    },
]

//Variables
const $form = document.getElementById("form");
const $pizzaIdInput = document.getElementById("pizza-id");
const $btnAddPizza = document.getElementById("seleccionar-pizza");
const $contenedorPizzas = document.getElementById("pizza-contenedor");

//Traer los elementos del LS si existen
let pizza = JSON.parse(localStorage.getItem('pizza')) || [];
//Grabar en el LS
const savePizzaListInLocalStorage = (pizzaList) => {
localStorage.setItem('pizza', JSON.stringify (pizzaList))
}
//Crear el elemento a renderizar 
const createPizzaCard = pizza =>
`
<div class="card" ${pizza.id}>
    <h2 class="pizza-nombre">${pizza.nombre}</h2>
    <h3 class="pizza-precio">${pizza.precio}</h3>
</div>
`;

//renderizar 
const renderPizzaList = pizzaList => {
    $contenedorPizzas.innerHTML = pizzaList.map(pizzas => createPizzaCard(pizza));
}
//Agregar pizzas
const SearchPizza = e => 
    e.preventDefault();
    const id = $pizzaIdInput.value;

    if (!id) {pizzaList = [...pizzaList, {id: undefined, nombre: "No ha ingresado ningún ID de pizza", precio: "-"}]}else{
        const newPizza =  pizzas.find( objPizza => objPizza.id == id); 
         if (newPizza == undefined){
             pizzaList = [...pizzaList, {id: undefined, nombre: "El número ingresado no coincide con ningún ID de Pizza.", precio: "-"}]
         }else{
            pizzaList = [...pizzaList, {id: newPizza.id, nombre: newPizza.nombre, precio : newPizza.precio}];
         }
        savePizzaListInLocalStorage(pizzaList);
        renderPizzaCardsInContainer(pizzaList);
        $pizzaIdInput.value = ""
}
//Inicializar
const init = () => {
    renderPizzaCardsInContainer(pizzaList);
    $form.addEventListener('submit', SearchPizza);
}
init();





