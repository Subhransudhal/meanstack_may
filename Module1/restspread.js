//rest - combined multiple elements into one arrey
// spread - spreads an array into multiple  elements



// function addwithrest(...numbers){
//     let sum = 0;
//     for(let sum of numbers){
//         sum+sum; 	 	         
//     }
//     console.log(sum);
// }


// addwithrest(1, 2);
// addwithrest(1, 2, 3);
// addwithrest(1, 2, 3, 4);





// function addwithrest(...numbers){
//     let sum = ;
//     for(let num of numbers){
//         sum+sum; 	 	         
//     }
//     console.log(sum);
// }


// addwithrest(1, 2);
// addwithrest(1, 2, 3);
// addwithrest(1, 2, 3, 4);



function addnames(){

    const names = ["persion1", "persion2", "persion3"];
    const morenames = ["persion4", ...names]
    console.log(morenames);
}

addnames();