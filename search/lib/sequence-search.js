/**
 * 顺序查找
 * 分析：O(n)
 * @param {Array} 无序的 list 
 * @param 待查找的元素
 * @returns {Array} 若找到元素，则返回其索引；未找到，则返回 -1
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
