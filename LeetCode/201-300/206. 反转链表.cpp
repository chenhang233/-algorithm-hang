/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if (head == nullptr) {
            return head;
       }
        ListNode* prev = nullptr;
        ListNode* cur = head;
        while (cur != nullptr)
        {
            ListNode* next = cur->next;
            cur->next = prev;
            prev = cur;
            cur = next;
        }
        return  prev;
    }
};


class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if (head == nullptr) {
            return head;
       }
       return reverseFn(nullptr,head);
    }
    ListNode* reverseFn(ListNode*prev, ListNode* cur) {
        if (cur == nullptr) return prev;
        ListNode* next = cur->next;
        cur->next = prev;
        prev = cur;
        return reverseFn(prev,next);
    }
};