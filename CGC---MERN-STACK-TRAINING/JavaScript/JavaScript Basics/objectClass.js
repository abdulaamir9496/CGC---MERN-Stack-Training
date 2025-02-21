//3rd way of creating a new instance of the object using class constructor.
//constructor is used to create a simple object. Constructor is inbuilt method in js.
//constructor is used to create a new instance of the object.
//benefit of using class is we get inheritance. we have base class on top of it we can add few more features based on base class.
//


// class Mobile {
//     constructor() {
//         this.Mobile = "Samsung";
//         this.model = "Galaxy";
//         this.ram = "4GB";
//         this.processor = "Snapdragon";
//         this.price = 20000;
//         this.call2 = function() {
//             console.log("Calling 2nd number...");
//         }
//     }
//     call() {
//         console.log("Calling...");
//     }
// }


// var m1 = new Mobile();
// var m2 = new Mobile();
// m1.call();
// m1.call2();
// console.log(m1);

// console.log(m1, m2, m1 === m2);


//inheritance: 

// class Mobile {
//     constructor() {
//         this.Mobile = mdl;
//         this.model = brnd;
//         this.ram = ram;
//         this.color = clr;
//         this.processor = prc;
//         this.price = pr;
//         this.call2 = function() {
//             console.log("Calling 2nd number...");
//         }
//     }
//     call() {
//         console.log("Calling...");
//     }
// }


// // inherit base class properties
// class Samsung extends Mobile {
//     constructor(mdl, brnd, ram, clr, prc, pr) {
//         // super();
//         super(mdl, brnd, ram, clr, prc, pr);
//     }
// }

// var m1 = new Samsung("Samsung Galaxy", "Android10", "8Gb", "pink", "processor1", "20000");
// var m2 = new Samsung("Samsung Galaxy", "Android10", "8Gb", "blue", "processor2", "20000");

// console.log(m1, m2);

// var s1 = new Samsung();
// s1.call();
// s1.call2();
// console.log(s1);
// console.log(s1.Mobile, s1.model, s1.ram, s1.processor,
//     s1.price, s1.call2, s1.call);
