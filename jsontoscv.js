const { all } = require("axios");
const file = require("./result.json");
let all_keys = [];
file.forEach(values=>{
    Object.keys(values).forEach(val=>{
        all_keys.push(val);
        console.log(all_keys);
    })
});

// let unique_set = new Set(all_keys);
// console.log("unique",unique_set);
