const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// function reducer(batteryBatches){
//     const totalBatteries = 31;
// }
// const reducer = (accumulator, item) 
let totalBatteries = batteryBatches.reduce(function(accumulator, item){
    return accumulator + item;
});
