var importedCalss = require("./objectClass");

var Mobile = importedCalss.Mobile;

class SamsungMobile extends Mobile {
    constructor() {
        super();
        this.brand = "Android";
        if(fiveG) {
            this.is5G = fiveG;
        } else {
            throw new Error("Value must be a true");
            console.log("Value must be true");
        }
        console.log("Call from this file", this.brand)
    }
}

var m1 = new SamsungMobile();

console.log(m1);