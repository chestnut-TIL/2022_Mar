var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

console.log('실행')
foo(); // ?
bar(); // ?