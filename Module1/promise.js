


function node_add(){
    const data = {name:"emp1"};
    //calling asynchronous
    db_add().then(
        (value)=>{
            console.log("Data is printed..");
        },
        (err)=>{
            console.log("Error occured..");
        }
    )
}

function db_add(){
    return new Promise((resolve,reject)=>{
        resolve("success")
        // if(err){
        //     reject("error");
        // }  
    });

}

node_add();

