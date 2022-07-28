
// const fs = require('fs');

// fs.copyFileSync("file1.txt","file2.txt");

const superheroes = require('superheroes');
var hero = [];

for(var i = 1;i<=10;i++){
hero.push(superheroes.random());
}

console.log(hero);
// console.log(superheroes.all);
