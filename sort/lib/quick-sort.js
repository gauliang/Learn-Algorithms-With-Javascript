/**
 * 快速排序
 * 分析：O(nlogn)
 * @param {Array} 无序的 list 
 * @returns {Array} 已排序的数组
 */
function quickSort(list) {

    let swap = function (arr, x, y) {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    let partionSort = function (left, right) {

        if (left > right)
            return;

        var sl = left,
            sr = right,
            temp = list[left];

        while (sl != sr) {

            while (list[sr] >= temp && sl < sr) {
                sr--;
            }

            while (list[sl] <= temp && sl < sr) {
                sl++;
            }

            if (sl < sr) {
                swap(list, sl, sr);
            }
        }

        swap(list, left, sl);


        partionSort(left, sl - 1);
        partionSort(sl + 1, right);

    }

    partionSort(0,list.length-1);
    return list;
}

module.exports = quickSort;