function myForLoop1(){

for(var evenNumbers=0; evenNumbers<=8; evenNumbers+=2){

return evenNumbers;
}
}
function myForLoop2(){
for(var evenInverseNumbers=8; evenInverseNumbers>=0; evenInverseNumbers-=2){
return evenInverseNumbers;
} }
console.log(myForLoop1());
console.log(myForLoop2()); 
module.exports = { 
    myForLoop1,
myForLoop2 
};

