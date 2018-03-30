/**
 * 选择排序
 * 分析：O(n^2)
 * @param {Array} 无序的 list 
 * @returns {Array} 已排序的数组
 */
function selectionSort(list) {

    let swap = function (arr, x, y) {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    let length = list.length;

    for (let i = 0; i < length; i++) {

        let k = i;
        for (let j = i; j < length; j++) {
            k = list[k] < list[j] ? k : j;
        }

        swap(list, i, k)
    }

    return list;
}

module.exports = selectionSort;