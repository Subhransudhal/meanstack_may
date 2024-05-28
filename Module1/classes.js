class employes{

    constructor(name, dept){
        this.name = name;
        this.dept = dept;
    }
    print(){
        console.log(this.name+" dept: "+this.dept);
    }
}

const emp = new employes("tony", "IT");
emp.print();
