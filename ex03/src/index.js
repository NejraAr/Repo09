function myEqualFunction(num) {
    if (num === 23) {
     return "Equal";
    }
     return "Not equal";
    }
    
    
    console.log(myEqualFunction(5), myEqualFunction(23), myEqualFunction("23"), myEqualFunction('23'), myEqualFunction("text"));
    //console.log(myEqualFunction('23'));
    module.exports = myEqualFunction;