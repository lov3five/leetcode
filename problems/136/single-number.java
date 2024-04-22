class Solution {
    public int singleNumber(int[] nums) {
        int output = 0;
        for (int i = 0; i < nums.length; i++) {
            output ^= nums[i]; // Sử dụng phép XOR để loại bỏ các số xuất hiện hai lần
        }
        return output;
    }
}
