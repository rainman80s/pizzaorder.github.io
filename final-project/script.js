// Global variables
 let crust = document.getElementById('crust');
 let sauce = document.getElementById('sauce');
 
// toppings array

let formButton = document.getElementById('btn');
// event listener
formButton.addEventListener("click", function(event){
    let toppings = [];
    event.preventDefault()
    topping1 = document.getElementById("topping1").value;
    topping2 = document.getElementById("topping2").value;
    topping3 = document.getElementById("topping3").value;
    toppings.push(topping1, topping2, topping3 );
    
   calculateTotal(toppings);
})


function calculateTotal(toppingArray){  
    let total = 0; 
    let toppingCost = 2.50; 
    let baseCost = 5.50; // cost of crust and sauce

    // order string concatenation
    let orderString = `${crust.value} Crust Pizza with ${sauce.value}`;
   console.log(orderString)
   
   let toppingString = "Toppings: ";


//     // For Loop
 for (let i = 0; i < toppingArray.length; i++) {
          
        if (toppingArray[i] !== '') {
         total = total + toppingCost;
         toppingString = toppingString + " " + toppingArray[i];
       }
      
    }
   
    total = total + baseCost;

    // set DOM total += total 
    document.getElementById('total').innerHTML = '$' + total;  
    // use DOM: = orderString  
    document.getElementById('pizzaOrder').innerHTML = orderString;
    // use DOM: = toppingString 
    document.getElementById('toppings').innerHTML = toppingString;
}
