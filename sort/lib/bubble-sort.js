/**
 * 冒泡排序
 * 分析：O(n^2)
 * @param {Array} 无序的 list 
 * @returns {Array} 已排序的数组
 */
function bubbleSort(list) {

    let swap = function (arr, x, y) {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }
    let length = list.length;

    for (let i = 0; i < length; i++) {

        for (let j = 0; j <= length - i; j++) {

            if (list[j] > list[j + 1]) {
                swap(list, j, j + 1)
            }

        }
    }

    return list;
}

module.exports = bubbleSort;
