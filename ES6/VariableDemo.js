// demo variable - var (global)
var x = 100;
// hàm
function show() {
    console.log ("Sử dụng x bên trong hàm", x);
}
//sử dụng hàm
show();
console.log("Sử dụng x bên ngoài hàm", x);

// var - local
function varlocal() {
    var a = 123;
    console.log("Giá trị a bên trong hàm variable", a); 
}
// sử dụng biến a => error
console.log("Giá trị a bên ngoài hàm ( k tồn tại )" , a);