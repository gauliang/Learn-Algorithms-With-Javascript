/**
 * 插值查找
 * 分析：O(logn)
 * 元素必须是有序的。
 * @param {Array} 有序的 list 
 * @param 待查找的元素
 * @returns {Array} 若找到元素，则返回其索引；未找到，则返回 -1
 */
function insertValueSearch(list, value) {

    var low, mid, high;

    low = 0;
    high = list.length - 1;

    while (list[low] != list[high] && list[low] <= value && list[high] >= value) {

        mid = low + Math.floor((high - low) * (value - list[low]) / (list[high] - list[low]));

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

function insertValueSearchRcs(list, value) {

    var mid;

    let search = function (low, high) {

        if (list[low] == list[high] || list[low] > value || list[high] < value) {
            return -1;
        }

        mid = low + Math.floor((high - low) * (value - list[low]) / (list[high] - list[low]));

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

module.exports = { insertValueSearch: insertValueSearch, insertValueSearchRcs: insertValueSearchRcs };