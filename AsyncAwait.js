const stocks = {
    Fruits: ['Apple', 'Mango', 'Orange', 'Banana'],
    Liquid: ['Water', 'Ice'],
    Holder: ['Cone', 'Cup', 'Sticks'],
    Topping: ['Coklate', 'Vanila']
}

// async function order(){
//     try {

        
        
//     } catch (error) {
        
//     }
//     finally{
//         console.log('runs code anyways');
//     }
// }
const Is_Shop_Open=true;
const topping_Choice=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(
                console.log('Which topping wold you love')
            )
           // console.log('Which topping wold you love');
        },10000);
    });
};




async function kitchen(){
    console.log("A");
    console.log("B");
    console.log("C");

    await topping_Choice();


    console.log("D");
    console.log("E");


}
kitchen()
console.log('doing The Dishes');
console.log('Cleaning the tables');
console.log('taking others order');