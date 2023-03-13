class Solution {
    public int vowelStrings(String[] words, int left, int right) {
  int count = 0;
        HashSet<Character> set = new HashSet<>();
        set.add('a');
        set.add('e');
        set.add('i');
        set.add('o');
        set.add('u');
        for (int i = left; i <= right; i++) {
            String word = words[i];
            if (set.contains(word.charAt(0)) && set.contains(word.charAt(word.length() - 1))) count++;
        }
        return count;
    }
}