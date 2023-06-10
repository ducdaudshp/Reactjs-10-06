//cài đặt oop trong js ES6
class Person {
    constructor(){
        this.name = "Nguyễn Trung Đức";
        this.age = 24;
    }
    // setName(name){
    //     this.name = name
    // }
    getName(){
        return this.name;
    }
    setage(age){
        this.age = age;
    }
    getAge(){
        return this.age
    }
}

var person = new Person();
person.setage(25);
console.log("Tên:", person.getName());
console.log("Tuổi:", person.getAge());

class Student extends Person{
    constructor(name,age,studentId) {
        super(name,age);
        this.studentId = "DEV01"
    }
    getStudentInfo(){
        return "Tên: " + this.getName() + " - Tuổi: " + this.getAge() + " - Mã SV: " + this.studentId
    }
}

var student = new Student();
console.log(student.getStudentInfo());