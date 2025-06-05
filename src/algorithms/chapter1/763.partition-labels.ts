
//leetcode submit region begin(Prohibit modification and deletion)
function partitionLabels(s: string): number[] {
    const result: number[] = [];
    const charTag: { [key: string]: number } = {};
    for (let i = 0; i < s.length; i++) {
        charTag[s[i]] = i;
    }
    let start = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        max = Math.max(max, charTag[s[i]]);
        if (max === i) {
            result.push(i - start + 1);
            start = i + 1;
        }
    }
    return result;
};
//leetcode submit region end(Prohibit modification and deletion)