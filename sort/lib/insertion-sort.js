/**
 * 插入排序
 * 优化空间：如果插入操作比较耗费资源且数据量大时，可以在插入环节使用二分插入。
 * @param {Array} 无序的 list 
 * @returns {Array} 已排序的数组
 */
function insertionSort(list) {

    for (let i = 1; i < list.length; i++) {

        for (let j = i; j > 0 && list[j] < list[j - 1]; j--) {

            let temp = list[j];

            list[j] = list[j - 1];
            list[j - 1] = temp;

        }
    }

    return list;
}

module.exports = insertionSort;