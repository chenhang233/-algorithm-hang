class Solution {
    public int maximizeGreatness(int[] nums) {
  Arrays.sort(nums);
        int j = 0;
        for (int i = 0; i < nums.length; i++) {
            j += nums[i] > nums[j] ? 1 : 0;
        }
        return j;
    }
}