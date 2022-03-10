window.onload = function () {
    function getProduct(id) {
        return {
            id: id,
            name: "Awesome product " + id,
            price: 99.5
        };
    }
    console.log("On Load");
    var message = "Hello, ";
    var heading = document.createElement("h1");
    var product = getProduct(1);
    heading.textContent = message + product.name + "!";
    document.body.appendChild(heading);
    var element = document.querySelector("h1");
    var counter2 = 10;
    counter2 = 1;
    console.log(counter2);
    var months = ["Jan", "Feb", "Mar", "Apr"];
    console.log(months[0]);
    months[4] = "May";
    console.log(months[4]);
    months[5] = "June";
    months[5] = 10;
    var person;
    person = { name: "Rajesh", age: 30 };
    console.log(person);
    var greeting;
    greeting = function (name) { return "Hello " + name; };
    console.log(greeting("Rajesh"));
    greeting = function (name) { return "Bye Bye " + name; };
    console.log(greeting("Kumar"));
    document.addEventListener("keydown", function (event) {
        console.log(event.key);
    });
    document.addEventListener("scroll", function (event) {
        console.log(event.type);
    });
    var price = 99.5;
    var amount = 99.5; //Inference
    var bin = 695;
    console.log(bin);
    // let longValue: bigint = 9007199254991n;
    //console.log(longValue);
    var description = "Custom value\n  added another line";
    console.log(description);
    var firstName = "John";
    var title = "Web Developer";
    var profile = "I'm " + firstName + ". \nI'm a " + title;
    console.log(profile);
    var result = true;
    var result2 = true; //Type inference
    result = false;
    console.log(result);
    var employee = {
        firstName: "John",
        lastName: "Doe",
        age: 25,
        jobTitle: "Engineer"
    };
    console.log(employee);
    console.log(employee.firstName);
    var manager;
    manager = {
        name: "Raja"
    };
    console.log(manager);
    console.log(manager.toString());
    console.log(manager.valueOf());
    var series = [1, 2, 3];
    var doubleIt = series.map(function (e) { return e * 2; });
    doubleIt.map(function (v) { return v * 2; }).forEach(function (v) { return console.log("Value is " + v); });
    console.log(doubleIt);
    var bgColor1, bgColor2, headerColor;
    bgColor1 = [23, 255, 255, 0.5];
    bgColor2 = [14, 255];
    bgColor2 = [34, 255, 2, 2, 2, "asmople"];
    headerColor = [0, 255, 255];
    console.log(bgColor1);
    console.log(bgColor2);
    console.log(headerColor);
    var Month;
    (function (Month) {
        Month[Month["Jan"] = 0] = "Jan";
        Month[Month["Feb"] = 1] = "Feb";
        Month[Month["Mar"] = 2] = "Mar";
        Month[Month["Apr"] = 3] = "Apr";
        Month[Month["May"] = 4] = "May";
        Month[Month["Jun"] = 5] = "Jun";
        Month[Month["Jul"] = 6] = "Jul";
        Month[Month["Aug"] = 7] = "Aug";
        Month[Month["Sep"] = 8] = "Sep";
        Month[Month["Oct"] = 9] = "Oct";
        Month[Month["Nov"] = 10] = "Nov";
        Month[Month["Dec"] = 11] = "Dec";
    })(Month || (Month = {}));
    console.log(Month);
    console.log(Month.Jan);
    console.log(Month[0]);
    var r;
    r = 10.123;
    // r = "rajesh";
    console.log(r.toFixed());
    //r.willExist(); // run time error, but no error at compile time
    function fn(a) {
        if (typeof a === "string") {
            return true;
        }
        else if (typeof a === "number") {
            return false;
        }
    }
    var input;
    input = 100; // valid
    input = "Hi"; // valid
    //input = false; // Compiler error
    console.log(input);
    var mouseEvent;
    mouseEvent = "click"; // valid
    mouseEvent = "dblclick"; // valid
    mouseEvent = "mouseup"; // valid
    mouseEvent = "mousedown"; // valid
    //mouseEvent = "mouseover"; // compiler error
    var anotherEvent;
    var addT = function (a, b) { return a - b; };
    console.log(add(10, 5));
    addT = function (a, b) {
        console.log(a + b);
        return a + b;
    };
    add(1, 2);
    var c = new Counter();
    console.log("Count " + c.count()); // return a number
    console.log("Count 20 " + c.count(20)); // return a number
    console.log("Count 50 " + c.count(50)); // return a number
    function add(a, b) {
        return a + b;
    }
    function sum(a, b, c, d) {
        if (c)
            return a + b + c;
        return a + b;
    }
    var lowerCase;
    lowerCase = function (str) {
        return str.toLowerCase();
    };
    console.log(lowerCase("Hi", false));
};
var Counter = /** @class */ (function () {
    function Counter() {
        this.current = 0;
    }
    Counter.prototype.count = function (target) {
        if (target) {
            var values = [];
            for (var start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    };
    return Counter;
}());
var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
