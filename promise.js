const stocks = {
    Fruits: ['Apple', 'Mango', 'Orange', 'Banana'],
    Liquid: ['Water', 'Ice'],
    Holder: ['Cone', 'Cup', 'Sticks'],
    Topping: ['Coklate', 'Vanila']
}

// const Is_Shop_Open=true;

// const Order=(time,work)=>{
//     return new Promise((resolve,reject)=>{
//         if(Is_Shop_Open){
//             setTimeout(()=>{
//                 resolve(work());
//             },time);
//            // resolve(work());
//         }
//         else{
//             reject('CShop is closed')
//         }

//     });

// }
// Order(2000,()=>{console.log(`${stocks.Fruits[0]}`)});


// const Is_Shop_Open = true;

// const Order = (Time,Work) => {
//     return new Promise((resolve, reject) => {
//         if (Is_Shop_Open) {
//             setTimeout(() => {
//                 resolve(Work());
//              }, Time);

//         }
//         else {
//             reject('Shop is closed');
//         }

//     }
//     );
// }
// Order(()=>{2000,
//     console.log(`${stocks.Fruits[1]}`);
// });

// const Is_Shop_Open=true;

// const Order=(Time,Work)=>{
//     return new Promise((resolve,reject)=>{
//         if(Is_Shop_Open){
//             setTimeout(()=>{
//                 resolve(Work());
//             },Time);
//         }else{
//             reject('Shop is closed');
//         }
//     });
// }
// Order(2000,()=>{
//     console.log(`${stocks.Fruits[1]}`);
// });

const Is_Shop_Open=true;

const Order=(Time,Work)=>{
   return new Promise((resolve,reject)=>{
    if(Is_Shop_Open){
        setTimeout(()=>{
            resolve(Work());

        },Time);
    }
    else{
        reject("Order is rejected");
    }

   });
}
Order(2000,()=>{
    console.log(`${stocks.Holder[1]}`);
});