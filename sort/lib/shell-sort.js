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

    for (let gap = Math.floor(length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < length; i++) {

            let k = i;
            while (k - gap > 0 && list[k] < list[k - gap]) {
                swap(list, k, k - gap);
                k--;
            }
        }
    }

    return list;
}

module.exports = shellSort;