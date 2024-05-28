const empId = function(){
    let cont = 0;
    return function(){
        ++cont;
        //return `emp${cont}`;  
        //or
        return "emp"+cont;
    };
}();



console.log("Emp1: "+empId());
console.log("Emp2: "+empId());
console.log("Emp3: "+empId());