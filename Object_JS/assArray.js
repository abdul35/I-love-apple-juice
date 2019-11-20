let product = [];

function f(n_product, price, discount, n_customer, count_prc) {
    let sum = count_prc * price * discount;
    
    
    
    product.push({"user_name":n_customer});
    product.push({"product_name":n_product});
    product.push({"count_product":count_prc}); 
    product.push({"dicount":discount});
    product.push({"sum":sum}); 
        
        


    return `    Уважаемый - ${product[0]["user_name"]}   
    Вы заказали -  ${product[1]["product_name"]}
    в количестве - ${product[2]["count_product"]}
    со скидкой -   ${product[3]["dicount"]}
        
    c Вас:  ${product[4]["sum"]} $ `;
     

}
console.log(f("cake", 10, 15, "Abdula", 2));


