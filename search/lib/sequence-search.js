/**
 * 顺序查找
 * 分析：O(n)
 * @param {Array} 无序的 list 
 * @returns {Array} 已排序的数组
 */
function sequenceSearch(list, item) {

    for (let i = 0; i < list.length; i++) {
        if (list[i] == item ){
            return i;
        }
    }

    return -1;
}

module.exports = sequenceSearch;
