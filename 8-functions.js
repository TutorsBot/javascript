// Reusablity of code 
// Function can accept optional input and optional output


// Function Definition
// function sampleFunc(){
//     console.log("Function Called");
// }

// sampleFunc();

// Function inputs
// function sfwinput(a){
//     console.log(a)
// }

// sfwinput(23)

// function sfwoutput(){
//     return 33
// }

// var rf = sfwoutput();
// console.log(rf)

// function with default arugument
// function sample(a = 1){
//     console.log(a)
// }
// sample()

// function sample(a,b){
//     console.log
// }

// sample();

function sample(a,b, ...c){
    var sum = a + b;
    for(i = 0; i < c.length ; i++){
        sum = sum + c[i]
    }
    console.log(sum)
    // console.log(a, b, c)
}

// sample(2, 4, 5, 6, 7, 8)


