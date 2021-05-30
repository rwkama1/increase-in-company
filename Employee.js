 class Employee
    {
        constructor(pname,psalary)
        {
            this.name=pname;
            this.salary=psalary;
        }
        salary_increase=(increase)=>
        {
            let sal=this.salary;
            let calcincrease=0;
            let salaryincrease=0;
            calcincrease=(sal*increase)/100;
            salaryincrease=sal+calcincrease;
            return {sal,salaryincrease}
        }
    

    }
module.exports={Employee}