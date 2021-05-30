class Company
{
    constructor(parrayemp)
    {
        this.arrayemployee=parrayemp;
    }
    calc_increase_employees=()=>
    {
    let arraysalaryincrease=[];
     
     this.arrayemployee.map(
         emp=>{
             for(let i=10;i<=25;i=i+5)
             {
                let empincrease=emp.salary_increase(i);
                let objemp={name:emp.name,
                    salary:empincrease.sal,
                    salaryincrease:empincrease.salaryincrease,
                    i};
                arraysalaryincrease.push(objemp);
            }
         }
        )
        return arraysalaryincrease;
    }
}



module.exports={Company}