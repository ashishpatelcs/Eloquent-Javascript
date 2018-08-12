/*
 Author: Ashish Patel
 
 Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
 For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3),
 print "Buzz" instead.

 When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both
 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
 */

for (var i = 1; i <= 100; i++) {
 // print FizzBuzz if i is divisible by 3 and 5.
  if (i % 5 === 0 && i % 3 === 0)
    console.log("FizzBuzz");
 
 // print Buzz if i is divisible by 5.
  else if (i % 5 === 0 && i % 3 !== 0)
    console.log("Buzz");
 
 // print Fizz if i is divisible by 3.
  else if (i % 3 === 0)
    console.log("Fizz");
  else console.log(i);
}
