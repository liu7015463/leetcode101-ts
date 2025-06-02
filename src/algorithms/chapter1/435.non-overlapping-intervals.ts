
//leetcode submit region begin(Prohibit modification and deletion)
function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 0;
    let cursor = 0;
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < intervals[cursor][1]) {
            count++;
        } else {
            cursor = i;
        }
    }
    return count;
};
//leetcode submit region end(Prohibit modification and deletion)
//console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));
//console.log(eraseOverlapIntervals([[1,2], [1,2], [1,2]]));
//console.log(eraseOverlapIntervals([[1,2], [2,3] ]));
