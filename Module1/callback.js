const cbprint = function print(){
    console.log("Data is added..")
}


function node_add(){
    const data = {name:"emp1"};
    db_add(data, cbprint);

}

function db_add(Data, cb){
    //data add
     cb();
    
}

node_add();