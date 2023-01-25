class Solution {
    public int removeElement(int[] nums, int val) {
        int right = nums.length - 1;
        int result = 0;
        A: for (int i = 0; i < nums.length; i++) {
            if (i > right) break;
            if (nums[i] == val) {
                while (nums[right] == val) {
                    right--;
                    if (right < i) break A;
                };
                nums[i] = nums[right];
                nums[right] = val;
            }
            result++;
        }
        return result;
    }
}