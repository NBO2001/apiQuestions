const qstQuim = require("./questions")


const question = () => {
    const numberChooed = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    const qst = qstQuim.filter((item) => {
        if(item.id === numberChooed){
            return item;
        }
    });
    console.log(numberChooed);
    return qst;
}

module.exports = { question };