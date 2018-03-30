/**
 * 希尔排序
 * @param {Array} 无序的 list 
 * @returns {Array} 已排序的数组
 */
function shellSort(list) {

    let swap = function (arr, x, y) {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    let length = list.length;

    return list;
}

module.exports = shellSort;