



//Global Scope calcAge function 

function calcAge(birthYear) {
    const Age = 2037 - birthYear;

    function PrintAge(){
        const opp=`you are ${Age} and bithyear is ${birthYear}`;
        console.log(opp);
    }
    PrintAge();
    return Age;
}
const firstName = 'Jonas';

console.log(calcAge(1991));