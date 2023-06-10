//cho phép lặp lại các phần tử trong mảng hoặc đối tượng

var oldArray = [1,2,3];
var newArray = [oldArray,4,5];
console.log(newArray);
console.log("===========================");
 
//cú pháp spread
newArray = [...oldArray,4,5];
console.log(newArray);
console.log("===========================");

//
newArray = oldArray;
newArray.push(4);
newArray.push(5);
console.log(newArray);