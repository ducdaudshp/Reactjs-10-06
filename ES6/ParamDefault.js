//tham số mặc định ( 2 cách khai báo )
//note: ds các tham số mặc định => phải đặt cuối danh sách

//cách 1
function add (a,b,c=10) {
    // biến c là tham số mặc định
    let kq = a + b + c;
    console.log("Kết quả =", kq);
}
//exec
add(10,20); //40
add(10,10,50) //70

//cách 2
 function display(name, company) {
    //tham số mặc định là company = Devmaster Academy 
    company = company || "Devmaster Academy";
    console.log("Xin chào,", name);
    console.log(company);
 }
 display("Đức"); //sử dụng tham số company mặc định
 display("Dev", "Viện công nghệ")