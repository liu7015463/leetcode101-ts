
//leetcode submit region begin(Prohibit modification and deletion)
function candy(ratings: number[]): number {
    const candies: number[] = Array(ratings.length).fill(1);
    for (let i = 0; i < ratings.length - 1; i++) {
        if (ratings[i + 1] > ratings[i] && candies[i + 1] <= candies[i]) {
            candies[i + 1] = candies[i] + 1;
        }
    }
    for (let i = ratings.length - 1; i > 0; i--) {
        if (ratings[i] < ratings[i - 1] && candies[i - 1] <= candies[i]) {
            candies[i - 1] = candies[i] + 1;
        }
    }
    return candies.reduce((sum, current) => sum + current, 0);
};
//leetcode submit region end(Prohibit modification and deletion)