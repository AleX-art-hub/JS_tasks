//Object
let user1 = {
    name:'user1',
    age: 20,
    isMAle: true,
    email: 'user1@gmail.com',
    lang: ['ru','en','u'],
    
};

// delet user1.age 

console.log(user1.name);
console.log(user1["name"]);


user1.name='John';
console.log(user1);

user1.address="NY,av.50,20";
console.log(user1);

let user2 = {
    fname:'firstname2',
    sname: 'surname2',
    age: 20,
    isMAle: true,
    email: 'user2@gmail.com', 
    fullname: function() {
        return this.fname+" "+ this.sname;
    },   
};

let user3 = user2;


//Object (practica) 
let userMasterCard={
    userName: "Jonh Smith",
    cardNumder: "4568 6520 0085 4560",
    svv: 888, 
    rNumber: "UA79846548465184984865465484",//V kavichkah  (stroca)
    dataCardM: "01/20",
};

let dog={
    name: "jin",
    age: 3,
    countLegs: 4, 
    countHead: 1,
};







