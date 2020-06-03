https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript?fbclid=IwAR111iMluJ8yI_5UwXxhjIiH0btGGTpAY_-YVoayyN_KRWedFYN1qHoG624

class SmallestIntegerFinder {
  findSmallestInt(args){
    console.log("Should return the smallest int "+Math.min(...args));
    return Math.min(...args);
  }
}

https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript?fbclid=IwAR0-x3L3wsblRq46qTdWm5kKareFqLugtBWtayGx8kwDZQfGzzCW5WZLWIw

unction circleCircumference(circle) {
 return (2 * Math.PI*circle.radius);
}

https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript?fbclid=IwAR24lhYLnSlvDf3qnl6dAA_iDUHg6JjvkmqA4cesm8bex3CEVxHFWUFJFdk

function giveMeFive(obj){
let newObj=[];
 for (var key in obj){
    if (key.length===5){
       newObj.push(key);
       };
    if (obj[key].length===5){
       newObj.push(obj[key]);
       };
       }

return newObj; 
}
