const qstQuim = require("./questions")


const question = () => {
    const numberChooed = Math.floor(Math.random() * ( (qstQuim.length) - 1 + 1) + 1);
    const qst = qstQuim.filter((item) => {
        if(item.id === numberChooed){
            return item;
        }
    });
    return qst;
}

module.exports = { question };