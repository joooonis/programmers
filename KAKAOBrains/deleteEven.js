/*
 * Complete the 'deleteEven' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST listHead as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function deleteEven(listHead) {
  // Write your code here
  let current = listHead;
  let prev = null;
  while (current) {
    if (current.data % 2 === 0) {
      if (prev) {
        prev.next = current.next;
      } else {
        listHead = current.next;
      }
    } else {
      prev = current;
    }
    current = current.next;
  }
  return listHead;
}
