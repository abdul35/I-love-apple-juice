let check = document.getElementById('check');

function f(n_product, price, discount, n_customer, count_prc) {
    let sum = count_prc * price * discount;

    let a = {
        'Уважаемый': n_customer,
        'Вы заказали': n_product,
        'В количестве': count_prc,
        'Со скидкой %': discount,

        'C вас': sum
    };

    let s = '';

    for (let key in a) {
        s += `${key} -  ${a[key]} <br>`;
    }
    check.innerHTML = s;
}

f('cake', 10, 15, 'Abdula', 2);