
//leetcode submit region begin(Prohibit modification and deletion)
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let count = 0;
    const flowerbedCopy = [0, ...flowerbed, 0];
    for (let i = 1; i < flowerbedCopy.length - 1; i++) {
        if (flowerbedCopy[i - 1] === 0 && flowerbedCopy[i] === 0 && flowerbedCopy[i + 1] === 0) {
            count++;
            flowerbedCopy[i] = 1;
        }
    }
    return count >= n;
};
//leetcode submit region end(Prohibit modification and deletion)