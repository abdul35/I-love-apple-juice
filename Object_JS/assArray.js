
let a=[];

function f(n_product, price, discount, n_customer, count_prc) {
    
    let sum = count_prc * price * discount;
    
    a = {
    'Уважаемый': n_customer,
    'Вы заказали': n_product,
    'В количестве': count_prc,
    'Со скидкой %': discount,
    'C вас': sum
    };

    return a;
}
console.log(f('cake', 10, 15, 'Abdula', 2));

