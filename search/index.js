const sequenceSearch = require("./lib/sequence-search");
const { binarySearch, binarySearchRcs } = require("./lib/binary-search");
const { insertValueSearch, insertValueSearchRcs } = require("./lib/insert-value-search");
const fibonacciSearch = require("./lib/fibonacci-search");


// let list = [1, 2, 5, 7, 43, 45, 47, 50, 73, 76, 326, 632, 969];
let list = [1, 2, 5, 7, 43, 45, 47, 50, 73, 76, 326, 632, 969];

let res = fibonacciSearch(list, 50);