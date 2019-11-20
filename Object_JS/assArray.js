let product = [];

function f(n_product, price, discount, n_customer, count_prc) {
    let sum = count_prc * price * discount;
    
    
        product["user_name"] =    n_customer ,
        product["product_name"] =  n_product,
        product["count_product"] = count_prc ,
        product["dicount"] =       discount ,
        product["sum"] =          sum 
        console.log(product);
    
    // product.push();

    let s = `    Уважаемый - ${product['user_name']}   
    Вы заказали -  ${product["product_name"]}
    в количестве - ${product["count_product"]}
    со скидкой -   ${product["dicount"]}
        
    c Вас:  ${product["sum"]} $ `;
    return s;

}
console.log(f("cake", 10, 15, "Abdula", 2));


