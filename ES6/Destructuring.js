//trích xuất phần tử trong mảng hoặc object

var arr=[1,2,3,4,5];
const [a,b] = arr;
console.log("a=", a);
console.log("b=", b);

var obj = {
    name: "Đức",
    age: "23",
    address: "Hải Phòng"
}
const {name,age} = obj;
console.log("Name:", name);
console.log("Age:", age);