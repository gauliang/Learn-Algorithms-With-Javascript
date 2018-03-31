/**
 * 合并排序
 * 分析： O(nlogn)
 * @param {Array} 无序的 list 
 * @returns {Array} 已排序的数组
 */
function mergeSort(list) {

    let merge = function (left, mid, right) {

        let len = right - left + 1;
        let sw = [];
        let index = 0;
        let i = left;
        let j = mid + 1;

        while (i <= mid && j <= right) {
            sw[index++] = list[i] <= list[j] ? list[i++] : list[j++];
        }

        while (i <= mid) {
            sw[index++] = list[i++];
        }

        while (j <= right) {
            sw[index++] = list[j++]
        }

        for (let k = 0; k < len; k++) {
            list[left++] = sw[k];
        }

    }

    var length = list.length;
    var left, right, mid;

    for (let i = 1; i < length; i *= 2) {
        left = 0;
        while (left + i < length) {
            mid = left + i - 1;
            right = mid + i < length ? mid + i : length - 1;
            
            merge(left, mid, right);
            left = right + 1;
        }
    }

    return list;
}

module.exports = mergeSort;