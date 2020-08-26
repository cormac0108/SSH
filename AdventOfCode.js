// Santa's Node Helper - advent of code. Challenge. 
//Solve the logic problem using logic. using our fs module and javascript. 
// console.time('funcchallenge') // will start a timer.
//for example
const fs = require('fs');


// fs.readFile('./hello.txt', (err,data) => {
//     console.time('funchallenge')
//     if(err) {
//         console.log(err)
//     } 
//     console.log('Async', data.toString('utf-8'));
//     console.timeEnd('funchallenge');
// })

// go one step at a time logically speaking it out in your head.
// STEP by STEP.
/* 1 - what floor does santa end up on ?  ( -- > should go up 1 floor
     ) --> should go DOWN 1 floor 
     split the strings so that we can analyse them
     .reduce() maps over eacxh one of these items ()...
     console.time() and console.timeEnd() logs how long the code took.
     our function runs pretty fast. make sure it is efficient. 
     */

function question1() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('santa-time')
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce( (acc, currentValue) => {
            if (currentValue === '(') {
                return acc +=1
            } else if ( currentValue === ')') {
                return acc -= 1
            }
        }, 0)
        console.timeEnd('santa-time');
        console.log('floor:', answer);
        
    })
}
question1();

// 2 when does santa first enter the basement?  += increments by 1
/* when does accumulator number go negative? practice doing probles, 
in your head. .some() goes through the array and finds something that 
matches */

function question2 () { 
    fs.readFile('./AdventOfCode.js', (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => {
            if(currentItem === '(') {
                accumulator += 1
            } else if (currentItem === ')') {
                accumulator -= 1
            } 
            counter ++
            return accumulator < 0;
        })
        console.timeEnd('q = 2 santa-time')
        console.log('Basement entered at:' , counter);
    })
}