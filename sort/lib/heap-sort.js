/**
 * 堆排序
 * 分析： O(nlogn)
 * @param {Array} 无序的 list 
 * @returns {Array} 已排序的数组
 */
function heapSort(list) {

    let swap = function (arr, x, y) {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }
    let length = list.length;

    let heapFix = function (arr, i, length) {
        let temp = arr[i];
        for (let k = i * 2 + 1; k < length; k = k * 2 + 1) {

            if (k + 1 < length && arr[k] < arr[k + 1]) {  // 找出两个子节点中的较大者
                k++;
            }
            if (arr[k] > temp) {
                arr[i] = arr[k]
                i = k;
            } else {
                break;
            }
        }
        arr[i] = temp;
    }

    // 调整每个节点，构建大顶堆
    for (let i = Math.floor(length / 2 - 1); i >= 0; i--) {
        heapFix(list, i, length);
    }

    // 依次交换顶元素与最后一个对元素，并重新调整大顶堆。
    for (let i = length - 1; i > 0; i--) {
        swap(list, 0, i);
        heapFix(list, 0, i);
    }

    return list;
}

module.exports = heapSort;