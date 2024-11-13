/* Array methods in Js  1.push(value) -> at last iyems will be added
 2. pop() -> to delete form end and return  3. toString()
 -> convert aarys to string */

 let foodItems= [ "Mango", "Apple", "Tomato","Onion","Potato"];
 foodItems.push("Paneer","Sandwich");
 console.log(foodItems);

 let deletedItems = foodItems.pop();
 console.log(deletedItems);

 console.log(foodItems.toString());
 /* 4. concat() -> to add to arrays  5. unshift() -> add the items 
 in start  5. shift() -> delete the items from start*/ 

 let marvelHeroes =["ironman", "thor","captainamerica"];
 let dcHeroes =["batman","superman"];
 let heroes= marvelHeroes.concat(dcHeroes);
 console.log(heroes);

  marvelHeroes.unshift("blackpanther");
 console.log(marvelHeroes);

 dcHeroes.shift();
 console.log(dcHeroes);

 /* 7.slice(start,end) -> returns the piece of array
  8.splice(add,remove,replace) ->chane original array*/

  let ar = [2,5,7,9,10,13,15,18];
  console.log(ar.slice(1,4));
 
  let a= [2,3,4,5,7,10,16,20]
  a.splice(1,2,12,13);
  console.log(a);
