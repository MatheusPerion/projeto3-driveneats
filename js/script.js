const order = {
   dish: {
      item: "",
      price: ""
   },
   drink: {
      item: "",
      price: ""
   },
   dessert: {
      item: "",
      price: ""
   },
   name: "",
   address: "",
   total: ""
};

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
   document.body.classList.toggle('dark')
})


function toggleOption(optionSelected) {
   const selected = optionSelected.parentElement.querySelector(".selected");
   const category = optionSelected.parentElement.id

   if (selected !== null) {
      selected.classList.remove("selected")
      order[`${category}`].item = ''
      order[`${category}`].price = ''
   }
   if (optionSelected === selected) {
      optionSelected.classList.remove("selected");
      order[`${category}`].item = ''
      order[`${category}`].price = ''
   } else {
      optionSelected.classList.add("selected");
      order[`${category}`].item = optionSelected.querySelector('.item').innerHTML
      order[`${category}`].price = optionSelected.querySelector(' .price').innerHTML
   }
   console.log(order)
   verify()
}

function verify() {
   const finishOrderButton = document.getElementById('finishOrder')
   if (order.dish.item !== '' && order.drink.item !== '' && order.dessert.item !== '') {
      finishOrderButton.disabled = false
      finishOrderButton.innerHTML = 'Fechar Pedido'
      finishOrderButton.classList.toggle ('close_order')
   } else {
      finishOrderButton.disabled = true
      finishOrderButton.innerHTML = 'Selecione os 3 itens para fechar o pedido'
      finishOrderButton.classList.remove ('close_order')
   }
}



function toggleButton(){
     order.name = prompt ('Qual é o seu Nome?')
     order.address =prompt ('Qual o seu Endereço ?')


     const totalOrder = (Number(order.dish.price.split(' ')[1].replace(',' , '.')) + Number(order.drink.price.split(' ')[1].replace(',' , '.')) + Number(order.dessert.price.split(' ')[1].replace(',' , '.'))).toFixed(2)
     order.total = `R$ ${totalOrder.replace('.' , ',')}`
     console.log(order)
     sendOrder()
}

function sendOrder() {
   if (order.name !== "" && order.address !== "" && order.name !== null && order.address !== null) {
       let message = `Olá, gostaria de fazer o pedido:
       - Prato: ${order.dish.item}
       - Bebida: ${order.drink.item}
       - Sobremesa: ${order.dessert.item}
       Total: R$ ${order.total}\n
       Nome: ${order.name}
       Endereço: ${order.address}`
       
       message = encodeURIComponent(message);
       let whatsUrl = "https://wa.me/5565999346949" + "?text=" + message;
       window.open(whatsUrl, '_blank');
   } else {
       alert("Por favor, insira seu nome e endereço");
   }
}


