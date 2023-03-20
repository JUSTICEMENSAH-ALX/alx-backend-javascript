// Original code:
function taskFirst() {
  var x = "Hello";
  var y = "World";
  console.log(x + " " + y);
}

// Modified code using const:
function taskFirst() {
  const x = "Hello";
  const y = "World";
  console.log(x + " " + y);
}

// Original code:
function taskNext() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x); // outputs 2
  }
  console.log(x); // outputs 2
}

// Modified code using let:
function taskNext() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x); // outputs 2
  }
  console.log(x); // outputs 1
}

