window.onload = () => {
  interface Product {
    id: number;
    name: string;
    price: number;
  }

  function getProduct(id: number): Product {
    return {
      id: id,
      name: `Awesome product ${id}`,
      price: 99.5,
    };
  }

  console.log("On Load");
  let message: string = "Hello, ";
  let heading = document.createElement("h1");
  const product = getProduct(1);
  heading.textContent = message + product.name + "!";
  document.body.appendChild(heading);

  const element = document.querySelector("h1");

  let counter2: number = 10;
  counter2 = 1;
  console.log(counter2);

  let months: (string | number)[] = ["Jan", "Feb", "Mar", "Apr"];
  console.log(months[0]);
  months[4] = "May";
  console.log(months[4]);
  months[5] = "June";
  months[5] = 10;

  let person: {
    name: string;
    age: number;
  };

  person = { name: "Rajesh", age: 30 };
  console.log(person);

  let greeting: (name: string) => string;

  greeting = (name) => "Hello " + name;

  console.log(greeting("Rajesh"));

  greeting = (name: string) => "Bye Bye " + name;

  console.log(greeting("Kumar"));

  document.addEventListener("keydown", function (event) {
    console.log(event.key);
  });

  document.addEventListener("scroll", function (event) {
    console.log(event.type);
  });

  let price: number = 99.5;
  let amount = 99.5; //Inference

  let bin = 0b001010110111;
  console.log(bin);

  // let longValue: bigint = 9007199254991n;
  //console.log(longValue);

  let description = `Custom value
  added another line`;

  console.log(description);

  let firstName: string = `John`;
  let title: string = `Web Developer`;
  let profile: string = `I'm ${firstName}. 
I'm a ${title}`;

  console.log(profile);

  let result: boolean = true;
  let result2 = true; //Type inference
  result = false;
  console.log(result);

  let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: "Engineer";
  } = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    jobTitle: "Engineer",
  };

  console.log(employee);
  console.log(employee.firstName);

  let manager: Object;

  manager = {
    name: "Raja",
  };

  console.log(manager);
  console.log(manager.toString());
  console.log(manager.valueOf());

  let series = [1, 2, 3];
  let doubleIt = series.map((e) => e * 2);
  doubleIt.map((v) => v * 2).forEach((v) => console.log("Value is " + v));

  console.log(doubleIt);

  let bgColor1, bgColor2, headerColor: [number, number, number];
  bgColor1 = [23, 255, 255, 0.5];
  bgColor2 = [14, 255];
  bgColor2 = [34, 255, 2, 2, 2, "asmople"];
  headerColor = [0, 255, 255];

  console.log(bgColor1);
  console.log(bgColor2);
  console.log(headerColor);

  enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec,
  }

  console.log(Month);
  console.log(Month.Jan);
  console.log(Month[0]);

  let r: any;
  r = 10.123;
  // r = "rajesh";
  console.log(r.toFixed());
  //r.willExist(); // run time error, but no error at compile time

  function fn(a: string | number): boolean {
    if (typeof a === "string") {
      return true;
    } else if (typeof a === "number") {
      return false;
    }
  }

  type alphanumeric = string | number;
  let input: alphanumeric;
  input = 100; // valid
  input = "Hi"; // valid
  //input = false; // Compiler error
  console.log(input);

  /*
  let mouseEvent: "click" | "dblclick" | "mouseup" | "mousedown";
  mouseEvent = "click"; // valid
  mouseEvent = "dblclick"; // valid
  mouseEvent = "mouseup"; // valid
  mouseEvent = "mousedown"; // valid
 mouseEvent = "mouseover"; // compiler error
*/

  type MouseEvent = "click" | "dblclick" | "mouseup" | "mousedown";
  let mouseEvent: MouseEvent;
  mouseEvent = "click"; // valid
  mouseEvent = "dblclick"; // valid
  mouseEvent = "mouseup"; // valid
  mouseEvent = "mousedown"; // valid
  //mouseEvent = "mouseover"; // compiler error

  let anotherEvent: MouseEvent;

  let addT: (a: number, b: number) => number = (a, b) => a - b;
  console.log(add(10, 5));

  addT = function (a, b) {
    console.log(a + b);
    return a + b;
  };

  add(1, 2);

  let c = new Counter();

  console.log("Count " + c.count()); // return a number
  console.log("Count 20 " + c.count(20)); // return a number
  console.log("Count 50 " + c.count(50)); // return a number
  function add(a: number, b: number): number;
  function add(a: string, b: string): string;
  function add(a: any, b: any): any {
    return a + b;
  }

  function sum(a: number, b: number): number;
  function sum(a: number, b: number, c: number): number;
  function sum(a: number, b: number, c?: number): number;
  function sum(a: number, b: number, c?: number, d?: number): number {
    if (c) return a + b + c;
    return a + b;
  }

  let lowerCase: StringFormat;
  lowerCase = function (str: string) {
    return str.toLowerCase();
  };

  console.log(lowerCase("Hi", false));
};

interface StringFormat {
  (str: string, isUpper: boolean): string;
}

class Counter {
  private current: number = 0;
  count(): number;
  count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      let values = [];
      for (let start = this.current; start <= target; start++) {
        values.push(start);
      }
      this.current = target;
      return values;
    }
    return ++this.current;
  }
}

class Person {
  ssn;
  firstName;
  lastName;

  constructor(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
