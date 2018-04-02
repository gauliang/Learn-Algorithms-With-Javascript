const insertionSort = require("./lib/insertion-sort");
const bubbleSort = require("./lib/bubble-sort");
const selectionSort = require("./lib/selection-sort");
const shellSort = require("./lib/shell-sort");
const mergeSort = require("./lib/merge-sort");
const quickSort = require("./lib/quick-sort");

function makerlist(number){
    var list = [];
    
    while(number>0){
        list.push(Math.ceil(Math.random()*number));
        number --;
    }

    return list;
}

// let list = makerlist(100);   // 10000 个数字排序， 耗时 47ms

let list = [1,5,7,632,50,47,969,43,326,73,2,76,45];

let res = quickSort(list);
