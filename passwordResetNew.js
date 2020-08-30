function passwordReset(input) {
  let password = input.shift();
  let odd = "";
  let even = [];
  for (const line of input) {
    let command = line;
    let splited = command.split(" ");
    let elementOne;
    let elementTwo;
    if (splited.length > 1) {
      elementTwo = splited.pop();
      elementOne = splited.pop();
    }

    switch (splited[0]) {
      case "TakeOdd":
        for (let i = 0; i < password.length; i++) {
          i % 2 === 0 ? even.push(password[i]) : (odd += password[i]);
        }
        console.log(odd);
        break;
      case "Cut":
        let success = odd.substr(elementOne, elementTwo);
        odd = odd.replace(success, "");
        console.log(odd);
        break;
      case "Substitute":
        if (odd.includes(elementOne)) {
          while (odd.includes(elementOne)) {
            odd = odd.replace(elementOne, elementTwo);
          }
          console.log(odd);
        } else {
          console.log("Nothing to replace!");
        }
        break;
      case "Done":
        console.log(`Your password is: ${odd}`);
        break;
    }
  }
}
passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done"
]);
