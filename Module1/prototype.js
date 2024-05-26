function employee(name, Designation, Department){
    this.name = name;
    this.Designation = Designation;
    this.Department = Department;
}

employee.prototype.add1 = function(){
    console.log("Adding to Database")
} 
var emp = new employee("Tony", "Devloper", "IT")
emp.add1();
console.log(emp);

