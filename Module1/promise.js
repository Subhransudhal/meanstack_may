


function node_add(){
    const data = {name:"emp1"};
    //calling asynchronous
    db_add().then(
        (value)=>{console.log("Data is printed..");},
        (err)=>{console.log("Error occured..");}
    );
}

function db_add(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, 5000);
        //or
        //resolve("success")
        // if(err){
        //     reject("error");
        // }  
    });

}

node_add();

// What is the need of it -  To perform asynchronous programing
// How to creat promise - new promise((reslove, reject)=>{})
// How to use promise/call promise - <nameoffunction>().then((value)=>{}, (err)=>{})