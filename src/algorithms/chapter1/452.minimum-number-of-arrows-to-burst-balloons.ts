
//leetcode submit region begin(Prohibit modification and deletion)
function findMinArrowShots(points: number[][]): number {
    points.sort((a, b) => a[1] - b[1]);
    let count = 0;
    let cursor = 0;
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] <= points[cursor][1]) {
            count++;
        } else {
            cursor = i;
        }
    }
    return points.length - count;
};
//leetcode submit region end(Prohibit modification and deletion)
