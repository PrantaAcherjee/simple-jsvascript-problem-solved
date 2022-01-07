// get a random number 1 to 6?
function getRandomNumber (min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
// console.log(getRandomNumber(1,6));

// decored string consequently by alphabetically?
const students=['sumit','pranta','amit','anu','sanu'];
// console.log(students.sort());

// decorated number consequently like 1,2,3... ?
const rollNumber=[3,4,2,42,5,12];
// console.log(rollNumber.sort(function(a,b){
// return a-b;
// }));
// jodi number boro theke choto ssajate cy?
// console.log(rollNumber.sort(function(a,b){
//     return b-a;
// }))

// is year leap year ?
function isLeapYear(year){
 if((year % 400===0)||(year%4===0)&& (year%100 !==0)){
    //  console.log(`${year} is a leap year`)
 }else{
// console.log(`${year} is not a leap year`)
 }
}
isLeapYear(2028);

// how many vowel in a sentence ?
const vowels=["a","e","i","o","u","A","E","I","O","U"];

function countVowels (sentence) {
let count= 0;
const letters=Array.from(sentence);
letters.forEach(function (value) {
if(vowels.includes(value)){
  count++;
  }  
})
return count;
}
// console.log(countVowels("I love Javascript"));   

// how to get a duplicate number from an array 
const numbers=[1,2,3,4,5,4,3,5,6,7,8] 

const duplicates=numbers.filter(function(value,index,array){
return array.indexOf(value) !==index
})
// console.log(duplicates)

// how to get unique number 
const numbersTwo=[1,2,3,4,5,4,3,5,6,7,8] 

const unique=numbersTwo.filter(function(value,index,array){
    return array.indexOf(value) === index
})

// console.log(unique);

// find out a specific name how many times used in a sentence ? what is the first index of its ?

const sentence= "Learn with Sumit is all about teaching web development skills and techniques is an efficient and practical manner. If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with Sumit also deep dives into advanced topics using the latest best pratices for you seasoned web developers"

const matches= sentence.match(/sumit/gi);
const occurances= matches?matches.length:0;
// console.log(occurances);
// position=sentence.search(/sumit/i);
// console.log(position);
let position= sentence.search(/sumits/i);
position = position>=0? position:'not found';
// console.log(position);

// input: linearSearch(['a','b','c','d','c' ],'c')
// output 2 or 'not found'
// problem: linearSerach() function ti implement kore dekhan

function linearSearch(arr,value){
for(let i=0;i<arr.length;i++){
    if(arr[i]===value){
        return i;
    }
}
return 'not found';
}
// smart way 
function linearSearch(arr,value){
    const length=arr.length;
    for(let i=0;i<length;i++){
    if(arr[i]===value){
        return i;
    }
}
return 'not found';
}
// console.log(linearSearch(['a','b','c','d','c' ],'c'));

// show a largest string from an array as well as its index number 
function longestString(names){
let longestWord="";
for(name of names){
if(name.length>longestWord.length){
    longestWord=name;
}
}
return[longestWord,names.indexOf(longestWord)];
}
// console.log(longestString(['sumit saha','learn with sumit','aksh','saad','pranta']));

// 1 to 100 which number divided by 3,5,3 as well as 5 
function fizzbuzz(number){
for(let i=1; i<=number; i++){
if(i % 15 ===0){
    // console.log(`${i} is fizzBuzz`);
}
else if(i % 3===0){
    // console.log(`${i} is fizz`);  
}
else if(i % 5===0){
    // console.log(`${i} is buzz`); 
 }

else{
    // console.log(i);
}
      
}
}

fizzbuzz(100); 

// find out false value from an array and remove
const mixedArr=[
    'lws',
    undefined,
    'learn with sumit',
    false,
    "",
    'apple',
    "k",
    true,
    NaN,
"Thanks all"]

const trueArray=mixedArr.filter(function(el){
    if(el){
        return true;
    }else{
        return false
    }
})

// or smart way 
// const trueArray=mixedArr.filter(Boolean);
// console.log(trueArray);

// find out false value from an object and remove
const obj= {
    a: "lws",
    b: undefined,
    c: 'learn with sumit',
    d: false,
    e: "",
    f: "apple",
    g: "k",
    h: true,
    i: NaN,
    j:"Thanks all" ,
    k:40,
}

const truthyObj=function(obj){
for (let i in obj){
if(!obj[i]){
delete obj[i]
}
// console.log(i)
}
return obj;
}
//  console.log(truthyObj(obj)) ; 

