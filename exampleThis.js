// // // 'strict mode';
// // // //this keyword in Method



// // // // const jonas={
// // // //     name:'havy',
// // // //     year:1991,
// // // //     calAge:function(){

// // // //         console.log(jonas.name);
// // // //         return 2037-this.year;
// // // //     }

// // // // };console.log(jonas.calAge());


// // // //

// // // // const calAge=function(birthYear){
// // // //     console.log(2022-birthYear);
// // // //     console.log(this.birthYear);

// // // // }
// // // // calAge(1982);


// // // calAge(1980);


// // console.log(this);


// // const calAge = function (birthYear) {
// //     console.log(2022 - birthYear);
// //     console.log(this);

// // }

// // const calAgeArr = birthYear => {
// //     console.log(2022 - birthYear);
// //     console.log(this);

// // }

// // calAge(1980);
// // calAgeArr(1970);




// const naming={
    
//     year:1991,
//     calAge:function(){
//        //console.log(this);
//        console.log(2022-this.year);
//     },
// };
// //naming.calAge();

// //const matila={
//    // year:2000
// //}

// //matila.calAge=naming.calAge;

// //matila.calAge(this);
// const me=naming.calAge;

// me();

var firstName='happy';

const hero={
    firstName:'Jackey',
    year:1991,
    calAge:function(){
        console.log(this);
        console.log(2022-this.year);
    },
    greet:()=>{
       // console.log(this);
        console.log(`Hey ${this.firstName}`);
    }
};
hero.greet();
















