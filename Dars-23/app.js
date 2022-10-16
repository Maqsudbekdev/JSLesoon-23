let num = 56.9;

// if(num > 60){
//     console.log(60);
// }
// else{
//     console.log(50);
// }

function fn() {
    switch(num){
        case 60:
            return "60"
        case 56.9:
            return "50"
        default:
            return "No"       
    }

    
}
let result = fn();

console.log(result);


let newArr =[]
const cars = ["Lambo","Bugatti", "Ferrari","McLaren","Koneigseg","Merc","GM"]
for(let bosh = 0; bosh<cars.length ; bosh++){
    if(cars[bosh].includes("a")){
        newArr.push(cars[bosh])
    }

}
console.log(newArr);

let number = 10
let newArr1 =[]

for(a=0; a<number; a++){
    newArr1.push(a)
    // console.log(c);
   
}

const l = newArr1.map(f=>f*f)
console.log(l);











