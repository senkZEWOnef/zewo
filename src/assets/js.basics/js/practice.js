


const wizard = {
    name: "Harry",
    age: 14,
    house: "Griffindor",
    wand: "elder",
};


for (let key in wizard){
    console.log(`${key} : ${wizard[key]}`)
};

wizard["patronous"]= "brand new patronous";


for (let key in wizard){
    console.log(`${key} : ${wizard[key]}`)
};



