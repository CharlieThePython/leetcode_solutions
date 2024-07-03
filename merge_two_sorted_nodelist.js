/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    list1 = listNodeToArray(list1)
    list2 = listNodeToArray(list2)
    for (let i = 0; i< list2.length; i++){
        list1.push(list2[i])
    }

    for (let i = 0; i< list1.length; i++){
        for(let j = i+1; j < list1.length;j++){
            if(list1[i] > list1[j]){
                list1[i] = list1[i] ^ list1[j]
                list1[j] = list1[i] ^ list1[j]
                list1[i] = list1[i] ^ list1[j]
            }
        }
    }

    return arrayToListNode(list1)

};

function listNodeToArray(head) {
    let result = [];
    let current = head;
    
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    
    return result;
}

function arrayToListNode(arr) {
    if (!arr || arr.length === 0) {
        return null;
    }
    
    let head = new ListNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    
    return head;
}