class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(5);
head.next.next.next.next.next.next = new ListNode(6);

function removeElements(head, val) {
  const dummy = new ListNode(0);
  let newHead = dummy;

  while (head !== null) {
    if (head.val !== val) {
      newHead.next = new ListNode(head.val);
      newHead = newHead.next;
    }

    head = head.next;
  }

  return dummy.next;
}

// Time complexity: O(n)
// space complexity: O(n) becasue create n node in the new list node

console.log(removeElements(head, 6));

function removeElements1(head, val) {
  const dummy = new ListNode(-1);
  dummy.next = head;
  let prevN = dummy;
  let currN = head;
  let nextN = null;

  while (currN !== null) {
    if (currN.val === val) {
      nextN = currN.next;
      prevN.next = nextN;
    } else {
      prevN = prevN.next;
    }

    currN = currN.next;
  }

  return dummy.next;
}

console.log(removeElements1(head, 6));
