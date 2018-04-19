/**
 * 哈希查找
 * 分析：O(1)
 * @param {Array} 
 * @param 待查找的元素
 * @returns {Array} 若找到元素，则返回其索引；未找到，则返回 -1
 */
function hashSearch(list, value) {

    var HashTable = function (arr) {
        this.length = arr.length;
        this.items = {};

        for (let i = 0; i < arr.length; i++) {
            this.items[arr[i]] = i;
        }

        this.setItem = function (key, value) {
            var previous = undefined;
            if (this.hasItem(key)) {
                previous = this.items[key];
            }
            else {
                this.length++;
            }
            this.items[key] = value;
            return previous;
        }

        this.getItem = function (key) {
            return this.hasItem(key) ? this.items[key] : -1;
        }

        this.hasItem = function (key) {
            return this.items.hasOwnProperty(key);
        }

        this.removeItem = function (key) {
            if (this.hasItem(key)) {
                previous = this.items[key];
                this.length--;
                delete this.items[key];
                return previous;
            }
            else {
                return -1;
            }
        }

        this.keys = function () {
            var keys = [];
            for (var k in this.items) {
                if (this.hasItem(k)) {
                    keys.push(k);
                }
            }
            return keys;
        }

        this.values = function () {
            var values = [];
            for (var k in this.items) {
                if (this.hasItem(k)) {
                    values.push(this.items[k]);
                }
            }
            return values;
        }

        this.each = function (fn) {
            for (var k in this.items) {
                if (this.hasItem(k)) {
                    fn(k, this.items[k]);
                }
            }
        }

        this.clear = function () {
            this.items = {}
            this.length = 0;
        }
    }

    var hash = new HashTable(list);
    return hash.getItem(value);
}


module.exports = hashSearch;