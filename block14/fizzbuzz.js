//loop index that will increment up to 100
for (var i = 1; i <= 100; i++) {
    //if i % 15
    if (i % 15 == 0) 
    //print FizzBuzz
    console.log("FizzBuzz");
    // else if i % 3 = 0
    else if (i % 3 == 0)
    // print Fizz
    console.log("Fizz");
    //else if i % 5 = 0
    else if (i % 5 == 0)
    //print Buzz
    console.log("Buzz");
    // else print the index
    else console.log(i);
}