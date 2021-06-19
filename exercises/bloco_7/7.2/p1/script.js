const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

//exercicio 1
const customerInfo = (order) => {
  console.log(`Olá ${order.order.delivery['deliveryPerson']}, entrega para: ${order['name']}, Telefone ${order['phoneNumber']}, R. ${order.address['street']}, Nº: ${order.address['number']}, AP: ${order.address['apartment']}`)
}

customerInfo(order);

//exercicio 2
const orderModifier = (order) => {
  const newPerson = Object.keys(order.order.delivery)[0] = 'Luiz Silva'
  const newTotal = Object.keys(order.payment)[0] = '50'
  console.log(`Olá ${newPerson}, o total do seu pedido de muzzarella, calabresa e ${order.order.drinks.coke.type} é R$ ${newTotal},00`)
}

orderModifier(order);