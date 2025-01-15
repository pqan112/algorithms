var middleNode1 = function (head) {
  const linkedListLength = getLinkedListLength(head);
  const middleNode = Math.floor(linkedListLength / 2);

  for (let i = 0; i <= linkedListLength; i++) {
    if (i === middleNode) {
      return head;
    }
    head = head.next;
  }
};

function getLinkedListLength(head) {
  let count = 0;
  while (head !== null) {
    count++;
    head = head.next;
  }
  return count;
}

function middleNode2(head) {
  let f = head,
    s = head;

  while (f !== null && f.next !== null) {
    s = s.next;
    f = f.next.next;
  }

  return s;
}

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Con trỏ nhanh di chuyển gấp đôi tốc độ của con trỏ chậm.
// Điều này nghĩa là khi con trỏ nhanh di chuyển hết toàn bộ độ dài của linked list, con trỏ chậm sẽ di chuyển được một nửa độ dài đó.

console.log(middleNode2(head));
