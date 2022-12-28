// const function_1 =(call_fun)=>{
//     //function_2();
// //     console.log('This is Step 1');
// // }
// // const function_2=()=>{
// //     console.log('This is Step 2');
// // }

// // function_1(function_2());

// function one(myfunc){
//     console.log('Part 1');
// }
// function two(){
//     console.log('part 2');
// }


// one(two());

//Now Creat object of Stocks::::

const stock = {
    fruits: ['Apple', 'Banana', 'Graps', 'Pinapple'],
    liquid: ['Water', 'Ice'],
    Holder: ['cone', 'Cup', 'Sticks'],
    toppings: ['Choklate', "Penuts"]
};


const order = (myFruit, placeorder) => {
    setTimeout(() => {
        console.log(`${stock.fruits[myFruit]} fruiit has been selected`);
        placeorder();
    }, 2000)

};
const placeorder = () => {

    setTimeout(() => {
        console.log('production is started');

        setTimeout(() => {
            console.log('Fruits has been chopped');
            setTimeout(() => {
                console.log(`${stock.liquid[0]} and ${stock.liquid[1]} is added`);
                setTimeout(() => {
                    console.log('Start Machine');
                    setTimeout(() => {
                        console.log(`ice cream was placed in ${stock.Holder[0]} `);
                        setTimeout(() => {
                            console.log(`${stock.toppings[0]} was added as toping`);
                            setTimeout(() => {
                                console.log("Serve ICe cream");

                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);

            }, 1000);

        }, 2000);

    }, 0000);

}
order(1, placeorder);