let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

//키를 대상으로 순회
for(let vegetable of recipeMap.keys()){
    console.log(vegetable);
}

//값을 대상으로 순회
for(let amount of recipeMap.values()){
    console.log(amount);
}

//[키, 값]쌍을 대상으로 순회
for( let entry of recipeMap){
    console.log(entry);
}

recipeMap.forEach((v,k,m)=>{
    console.log(`${k} : ${v}`);
})