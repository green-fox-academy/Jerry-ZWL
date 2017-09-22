class Person {
    constructor(name,age){
        this.name = name;
        this.age = name;
    }
}

class Employee extends Person{
    constructor(name,age,salary,department='unknown',hireAt=Date.now()){
        super(name,age);
        this.salary = salary;
        this.department = department;
        this.hireAt = hireAt;
        this.leftAt = null;
        this.status = 'active';
        this.maxSalaryMultiplier = 1;
    }

    getInfo(){
     return `${this.name} (${this.age}) works at ${this.department} for ${this.salary} usd since|from ${this.hiredAt} to ${this.leftAt}`;
    }
    
    quit(isFired){
        if(this.status === 'fired' || this.status === 'quit'){
            throw Error;
        }else if (isFired){
            this.leftAt = Data.now();
            this.status = 'fired';
            return true;
        }else {
            this.leftAt = Data.now();
            this.status = 'quit';
            return false;
        }
    }

    increaseSalaryBy(newSalary){
        var difference = this.salary * this.maxSalaryMultiplier - newSalary;
        if (difference < 0){
            throw Error;
        }else{
            return newSalary;
        }
    }

    setDepartment(newDepartment){
        this.department  = newDepartment;
    }
}


//Developer
class Developer extends Employee{
    constructor(name,age,salary,department,hireAt,level){
        super(name,age,salary,department,hireAt);
        this.maxSalaryMultiplier = 1.05;
        this.level = level;
    }

    changeLevel(newLevel){
        if (typeof this.level !== 'undefined'){
            this.level = newLevel;
            return true;
        }
        return false;
    }

}

//Director
class Director extends Employee{
    constructor(name,age,salary,department,hireAt){
        super(this,name,age,salary,department,hireAt);
        this.maxSalaryMultiplier = 1.1;
    }

    fireEmployee(employee){
        if (Employee.prototype.isPrototypeOf(employee)){
            let isFired = true;
            employee.quit(isFired);
        }else{
            throw Error;
        }
    }

    promoteDeveloper(dev, newLevel) {
        if(Employee.prototype.isPrototypeOf(dev)){
            if (newLevel === this.level){
                return false;
            }else{
                dev.changeLevel(newLevel);
            }
        }else{
            throw Error;
        }
    }
}
