/**
 * 二分查找
 * 分析：O(logn)
 * 元素必须是有序的。
 * @param {Array} 有序的 list 
 * @param 待查找的元素
 * @returns {Array} 若找到元素，则返回其索引；未找到，则返回 -1
 */
function binarySearch(list, value) {

    var low, mid, high;

    low = 0;
    high = list.length - 1;

    while (low <= high) {

        mid = Math.floor((high + low) / 2);

        if (list[mid] == value) {
            return mid;
        }

        if (list[mid] > value) {
            high = mid - 1;
        }

        if (list[mid] < value) {
            low = mid + 1;
        }

    }

    return -1;
}

function binarySearchRcs(list, value) {

    var mid;

    let search = function (low, high) {

        if (high < low) {
            return -1;
        }

        mid = Math.floor((high + low) / 2);

        if (list[mid] == value) {
            return mid;
        }

        if (list[mid] > value) {
            return search(low, mid - 1);
        }

        if (list[mid] < value) {
            return search(mid + 1, high);
        }
    }

    return search(0, list.length - 1);

}

module.exports = { binarySearch: binarySearch, binarySearchRcs: binarySearchRcs };