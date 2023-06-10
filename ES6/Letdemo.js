//khai báo với let
let x = 5;
if (x===5) {
    let x = 10;
    console.log ("x bên trong if: ", x);
}
console.log ("x bên ngoài if: ", x);

//error
//let x = 100; khai báo lại

let y = 5;
if (y===5) {
    y = 10; // gán lại
    console.log ("y bên trong if: ", y);
}
console.log ("y bên ngoài if: ", y);