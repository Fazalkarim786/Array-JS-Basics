//Array -> Collection of similar items

let heroes = ["batman","captainamerica","ironman","spiderman",
"flash"];

for(let hero of heroes){
    console.log(hero);
}

//Q1.Average of students marks
let sum =0;
let marks = [85,97,44,37,76,60];
for(let mark of marks){
sum= sum + mark;
}
console.log(sum);
let average = sum/marks.length;
console.log("average is = ", average);