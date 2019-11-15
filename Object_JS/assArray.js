let a = [];

function f(n_product, price, discount, n_customer, count_prc) {
    let sum = count_prc * price * discount;

    a = {
    user_name: n_customer,
    product_name: n_product,
    count_product: count_prc,
    dicount: discount,
    sum: sum
    };

    let s = `    Уважаемый - ${a["user_name"]}   
    Вы заказали -  ${a["product_name"]}
    в количестве - ${a["count_product"]}
    со скидкой -   ${a["dicount"]}
        
    c Вас:  ${a["sum"]} `;
    return s;
}

console.log(f("cake", 10, 15, "Abdula", 2));

