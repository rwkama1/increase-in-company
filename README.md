
## Description

 A company needs to know the salary of 4 employees and it will increase them by 10, 15, 20 and 25% respectively. Calculate the salary of each of the employees, taking into account the increase.

## Usage

```Javascript

 let Company=require("./Company").Company;
 let Employee=require("./Employee").Employee;

 let arrayemp=[];

 arrayemp.push(new Employee("Ghael",50.19));
 arrayemp.push(new Employee("John",50.19));
 arrayemp.push(new Employee("Asd",50.19));
 arrayemp.push(new Employee("DSA",50.19));

 let company=new Company(arrayemp);
let calcemployeesincrease=company.calc_increase_employees();
 const show_calc_increase_employees=()=>
 {
     calcemployeesincrease.map(
         item=>{
         console.log("                                      ");
         console.log("Name: "+item.name);
         console.log("Your previous salary is: USD "+item.salary)
         console.log("Your salary with increase of "+item.i+"% is: USD "+item.salaryincrease);

         }
     )
 }
show_calc_increase_employees();


```