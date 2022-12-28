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

const Is_Shop_Open = true;

const Order = (Time, Work) => {
    return new Promise((resolve, reject) => {
        if (Is_Shop_Open) {
            setTimeout(() => {
                resolve(Work());

            }, Time);
        }
        else {
            reject(console.log("Shop is closed"));
        }

    });
}
Order(2000, () => {
    console.log(`${stocks.Fruits[1]} was selected`);
})
    //Now we put Promise Chainig Sequence Here...
    .then(()=>{
        return Order(0000,()=>{
            console.log('Production is started');
        });
    })
    .then(()=>{
        return Order(2000,()=>{
            console.log('Food was Chopped');
        })
    })
    .then(()=>{
        return Order(1000,()=>{
            console.log(`Add ${stocks.Liquid[0]} and ${stocks.Liquid[1]} `)
        });
    })
    .then(()=>{
        return Order(1000,()=>{
            console.log('Start Machine');

        })
    })
    .then(()=>{
        return Order(2000,()=>{
            console.log(`${stocks.Holder[1]} for Ice Cream Hoding `);
        });
    })
    .then(()=>{
        return Order(3000,()=>{
            console.log(`${stocks.Topping[1]} is selected for Toppind`)
        })
    })
    .then(()=>{
        return Order(2000,()=>{
            console.log('Server the ICe Cream');
        });
    })
    .catch(()=>{
        console.log('Customer Left');
    });