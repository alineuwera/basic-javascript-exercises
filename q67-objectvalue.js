
const person = {
    fname: "uwera",
    lname :"aline",
    age: 20,
    gender: "female"
    
};
function allValues(){
for(var key in person){
  console.log(person[key]);
}}
allValues(person);