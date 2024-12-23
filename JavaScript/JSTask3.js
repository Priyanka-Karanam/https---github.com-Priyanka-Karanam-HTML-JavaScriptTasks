 function actualprice(costPrice){
 const Discount=20;
 //we have to calculate the discountAmount
const DiscountA=costPrice*Discount;
//calculate the selling amount after discount
 const sellingPrice=costPrice-Discount;
console.log(`costPrice:${costPrice.toFixed(3)}`);
 console.log(`Discount:${Discount.toFixed(3)}`);
console.log(`sellingPrice:${sellingPrice.toFixed(3)}`);
 }
 actualprice(3000);
              
            
        