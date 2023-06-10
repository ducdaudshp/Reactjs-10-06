//ArrowFunction

//cũ: normal func

function show(name) {
    console.log("Xin chào:", name);
}

var display = function(name){
    console.log("Xin chào:", name);
}

show("Đức");
display("Dev");

//arrow

const hienthi = (name) => {
    console.log("Xin chào:", name);
}

hienthi("Đức");