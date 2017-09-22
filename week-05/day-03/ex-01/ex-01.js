//Person
function Person(name,age) {
    this.name = name;
    this.age = age;
}
// Employee
function Employee(name, age, salary, department,hireAt) {
    Person.call(this,name,age);
     this.salary = salary;
     this.department = (typeof department !== 'undefined') ?  department : 'unknown';
     this.hireAt = (typeof hireAt !== 'undefined') ?  hireAt : Date.now();
     this.leftAt = null;
     this.status = 'active';
     this.maxSalaryMultiplier = 1;
     
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Person;

Employee.prototype.getInfo = function () {
    return this.name + ' (' + this.age + ') ' + ' works at ' +
           this.department + ' for ' + this.salary + ' usd since|from ' +
           this.hiredAt + ' to ' + this.leftAt;
};
Employee.prototype.quit = function (isFired) {
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
};

Employee.prototype.increaseSalaryBy = function (newSalary) {
    var difference = this.salary * this.maxSalaryMultiplier - newSalary;
    if (difference < 0){
        throw Error;
    }else{
        return newSalary;
    }
};

Employee.prototype.setDepartment = function (newDepartment) {
    this.department  = newDepartment;
};

//Developer
function Developer(name,age,salary,department,hireAt,level) {
    Employee.call(this,name,age,salary,department,hireAt);
    this.maxSalaryMultiplier = 1.05;
    this.level = level;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Employee;

Developer.prototype.changeLevel = function (newLevel) {
    if (typeof this.level !== 'undefined'){
        this.level = newLevel;
        return true;
    }
    return false;
};


//Director
function Director(name,age,salary,department,hireAt) {
    Employee.call(this,name,age,salary,department,hireAt);
    this.maxSalaryMultiplier = 1.1;
}

Director.prototype = Object.create(Employee.prototype);
Director.prototype.constructor = Employee;

Director.prototype.fireEmployee = function (employee){
    if (Employee.prototype.isPrototypeOf(employee)){
        let isFired = true;
        employee.quit(isFired);
    }else{
        throw Error;
    }
};
Director.prototype.promoteDeveloper = function (dev, newLevel) {
    if(Employee.prototype.isPrototypeOf(dev)){
        if (newLevel === this.level){
            return false;
        }else{
            dev.changeLevel(newLevel);
        }
    }else{
        throw Error;
    }
};