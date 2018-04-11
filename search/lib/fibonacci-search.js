/**
 * 斐波那契查找
 * 分析：O(logn)
 * 元素必须是有序的。
 * @param {Array} 有序的 list 
 * @param 待查找的元素
 * @returns {Array} 若找到元素，则返回其索引；未找到，则返回 -1
 */
function fibonacciSearch(list, value) {

    var length = list.length;

    var fibMm2 = 0;
    var fibMm1 = 1;
    var fibM = fibMm1 + fibMm2;

    var min = function (x, y) {
        return x <= y ? x : y;
    }

    // 找出包含数组长度的最小斐波那契数
    while (fibM < length) {
        fibMm2 = fibMm1;
        fibMm1 = fibM;
        fibM = fibMm1 + fibMm2;
    }

    let pos = -1;   //   设置游标为-1；数组下标从0开始，当进行3、5分的时候，其实分界点是第 3-1 个元素。

    while (fibM > 1) {

        let i = min(pos + fibMm2, length - 1);  // 拆分位置

        if (list[i] < value) {
            fibM = fibMm1;
            fibMm1 = fibMm2;
            fibMm2 = fibM - fibMm1;
            pos = i;
        } else if (list[i] > value) {
            fibM = fibMm2;
            fibMm1 = fibMm1 - fibMm2;
            fibMm2 = fibM - fibMm1;
        } else {
            return i;
        }
    }

    // 上面的循环，对比了第 i 个元素
    // 当斐波那契数组为 1、1、2 时，上述循环对比完 fibMm2 元素后就停止了
    // 下面我们对比最后一个元素 fibMm1
    if (fibMm1 == 1 && list[pos + 1] == value) {
        return pos + 1;
    }

    return -1;
}

module.exports = fibonacciSearch;