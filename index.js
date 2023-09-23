const array =require('./food.json');

function getallItems(array){
    console.log("\nPrinting all items =");
    array.map((item)=>{
        console.log(item);
    });
}
getallItems(array);


function getCategory(array,category){
    console.log(`\nPrint the list of ${category} items =`);
    const c = array.filter((item)=>item.category.includes(category))
    console.log(c);
}

getCategory(array,"Vegetable");
getCategory(array,"Fruit");
getCategory(array,"Protein");
getCategory(array,"Nuts");
getCategory(array,"Grain");
getCategory(array,"Dairy");


function getCalorieItemAbove100(array){
    console.log("\nPrinting item having calorie above 100 =");
    let res = array.filter((item)=>item.calorie > 100);
    console.log(res);
}

getCalorieItemAbove100(array);

function getCalorieItemBelow100(array){
    console.log("\nPrinting item having calorie below 100 =");
    let res = array.filter((item)=>item.calorie < 100);
    console.log(res);
}

getCalorieItemBelow100(array);

function proteinHighToLow(array) {
    console.log("Print items having highest to lowest protein range =");
    let result= array.sort((a, b) => b.protiens - a.protiens);
    console.log(result);
};

proteinHighToLow(array);

function cabHighToLow(array) {
    console.log("Print items having lowest to highest cab range =");
    let result= array.sort((a, b) => a.cab - b.cab);
    console.log(result);
};

cabHighToLow(array);
