// Discount on array items 10% off and store final array.

let arr = [250, 645, 300, 900, 50];
for(let i=0; i<arr.length; i++){
    let offer = arr[i]/10;
    arr[i]-=offer;
}
console.log("After offer price = ",arr)