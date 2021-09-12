import "../styles/styles.css";
import Person from './modules/Person';

if (module.hot) {
  module.hot.accept();
}


/* Lesson example code below this line */

let john = new Person("John Citizen", "blue");
john.greet();

class Adult extends Person {
  payTax() {
    console.log("The tax that " + this.name + " owes is zero.");
  }
}

let jane = new Adult("Jane Doe", "orange");
jane.greet();
jane.payTax();