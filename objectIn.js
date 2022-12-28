// //----------------------Object in Java Script-------------------------

// // const Student={
// //     FirstName:'Yogesh',
// //     LastName:'Singh',
// //     Age:35,
// //     Location:'Mumbai'
// // }
// // const Stud=['yogesh','singh','35','Delhi']
// // console.log(Stud);
// // console.log(Student);

// //-----------------------------------------------------------------------------

// //------------------how to get Data from Object--------------Dot or Bracket Notation

// // const Student={
// //     FirstName:'Yogesh',
// //     LastName:'Singh',
// //     Age:38,
// //     Location:'Delhi'
// // }
// // console.log(Student.LastName);//dot Notaiton
// // console.log(Student['LastName']);//Brcket Notation

// //--------------------Object-----------------------------------

// const Student = {
//     Fname: "Yogesh",
//     Lname: "Singh",
//     Loc: "Mumbai",
//     BirthYear:1982,
//     Friend: ['solu1', 'solu2', 'solu3'],
//     calAge: function () {
//         return 2000 - this.BirthYear;
//     },
//     //--------------------Function Expression Working Here---------------
//     // myFun:(BirthYear)=>{
//     //    return 2000-this.BirthYear;
//     // }

// }
// console.log(Student.calAge());


// //----------------------------------Object More Example----------------------

// // const Employee={
// //     Emp_Id:01,
// //     Emp_Name:'Yogesh',
// //     Emp_Loc:'Mumbai',


// // }



//--------------------------------------------------object-------------------------------

// const Bank_Account = {
//     Acc_Number: 12345,
//     Acc_Name: 'Saving',
//     Acc_Holder_Name: 'Yogesh Singh',
//     Acc_Opp_Year: 2000,

//     duration: function () {
//         return 2022 - this.Acc_Opp_Year;
//     },
//     newBranch: function () {
//         this.NewBranch = 'Ahmedabad';
//         return this.NewBranch;

//     }

// }

// console.log(Bank_Account.newBranch());






//-----------------------------------------prototype examples----------------------------------------------------

// const Person=function(Name,BirthYear){
//     this.Name=Name;
//     this.BirthYear=BirthYear;

     

  
// }

// Person.prototype.calAge=function(){
//     console.log(2035-this.BirthYear);
//     console.log();

// }

// const jonasRecord=new Person('Happy',1982); 
// jonasRecord.calAge();
// console.log(jonasRecord.__proto__);

//-----------------------------------------------class Declaration-----------------------------------------------------
// class personal1{
//     constructor(firstName,BirthYear){
//         this.firstName=firstName;
//         this.BirthYear=BirthYear;
//     }
//     //Method will be added to .prototype property
//     calAge(){
//        return 2022-this.BirthYear;
//     }
// }
// const Human1=new personal1('yogesh',2006);

//     //console.log(Human1.calAge(1986));
//     console.log(Human1.__proto__===personal1.prototype);

//---------------------------------------SetterAnd Getter------------------------------------------------------------------


// const Account={
// //     owner:'Jonas',
// //     movement:[200,300,400],

// //     get latest(){
// //         return this.movement.slice(0).pop();
// //     },
// //     set latest(mov){
// //         this.movement.push(mov);

// //     }
// // };
// // console.log(Account.latest);
// // Account.latest=1000;
// // console.log(Account.movement);


// class Person{
//     constructor(Name){
//         this.setName(Name);
//     }

//     getName(){
//         return this.Name;
//     }
//     setName(newName){
//         newName=newName.trim();
        
//         if(newName==''){
//             throw" the name can not be empty";
//         }
//         this.name=newName;
//     }

// };
// let person=new Person('Hema Malini');
// console.log(person);
// person.setName("madhuri dixit");
// console.log(person.getName());

//------------------------------------------------------Static Method----------------------------------------
class Person{
    
   

};

Person.sayHell0=function(){
    console.log("Good Morning dear");
};
Person.sayHell0();







