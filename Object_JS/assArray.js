let product = [];

function f(n_product, price, discount, n_customer, count_prc) {
    let sum = count_prc * price * discount;
       
    product.push({"user_name":n_customer,
                "product_name":n_product,
                "count_product":count_prc, 
                "dicount":discount,
                "sum":sum 
            }); 
          
    let str = `    Уважаемый - ${product[0]["user_name"]}   
    Вы заказали -  ${product[0]["product_name"]}
    в количестве - ${product[0]["count_product"]}
    со скидкой -   ${product[0]["dicount"]}
        
    c Вас:  ${product[0]["sum"]} $ `;
     return str;

}
console.log(f("cake", 10, 15, "Abdula", 2));
