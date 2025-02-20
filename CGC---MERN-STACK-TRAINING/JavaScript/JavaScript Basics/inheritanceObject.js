var importedCalss = require("./objectClass");

var Mobile = importedCalss.Mobile;

class SamsungMobile extends Mobile {
    constructor() {
        super();
    }
}

var m1 = new SamsungMobile();

console.log(m1);