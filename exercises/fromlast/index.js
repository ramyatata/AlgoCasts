// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  //create two variables slow and fast
  //point both to head
  //move the fast to n spaces from slow node
  //loop through list while fast.next is defined
    //increement slow and fast to next
  //return slow

  let slow = list.getFirst();
  let fast = list.getFirst();

  while(n) {
    n--;
    fast = fast.next;
  }

  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

module.exports = fromLast;
