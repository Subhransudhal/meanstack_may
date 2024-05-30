


function expenses(nameofexpense, description, amount){
    this.nameofexpense = nameofexpense;
    this.description = description;
    this.amount = amount;
}

expenses.prototype.add = function(){
    console.log("Added")
}

var exp = new expenses("TV","LED",20000)

exp.add();
console.log(exp);
