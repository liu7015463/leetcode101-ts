//Assume you are an awesome parent and want to give your children some cookies. 
//But, you should give each child at most one cookie. 
//
// Each child i has a greed factor g[i], which is the minimum size of a cookie 
//that the child will be content with; and each cookie j has a size s[j]. If s[j] >
//= g[i], we can assign the cookie j to the child i, and the child i will be 
//content. Your goal is to maximize the number of your content children and output the 
//maximum number. 
//
// 
// Example 1: 
//
// 
//Input: g = [1,2,3], s = [1,1]
//Output: 1
//Explanation: You have 3 children and 2 cookies. The greed factors of 3 
//children are 1, 2, 3. 
//And even though you have 2 cookies, since their size is both 1, you could 
//only make the child whose greed factor is 1 content.
//You need to output 1.
// 
//
// Example 2: 
//
// 
//Input: g = [1,2], s = [1,2,3]
//Output: 2
//Explanation: You have 2 children and 3 cookies. The greed factors of 2 
//children are 1, 2. 
//You have 3 cookies and their sizes are big enough to gratify all of the 
//children, 
//You need to output 2.
// 
//
// 
// Constraints: 
//
// 
// 1 <= g.length <= 3 * 10⁴ 
// 0 <= s.length <= 3 * 10⁴ 
// 1 <= g[i], s[j] <= 2³¹ - 1 
// 
//
// 
// Note: This question is the same as 2410: Maximum Matching of Players With 
//Trainers. 
//
// Related Topics Array Two Pointers Greedy Sorting 👍 4448 👎 411


//leetcode submit region begin(Prohibit modification and deletion)
function findContentChildren(g: number[], s: number[]): number {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let gCursor = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (gCursor >= g.length) {
            break;
        }
        if (s[i] >= g[gCursor]) {
            count++;
            gCursor++;
        }
    }
    return count;
};
//leetcode submit region end(Prohibit modification and deletion)

console.log(findContentChildren([10,9,8,7],[5,6,7,8]))