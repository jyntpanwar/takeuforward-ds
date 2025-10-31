const findElementThatAppearsOnce = (nums) => {
  return nums.reduce((acc, curr) => acc ^ curr, 0);
};

const tc1 = [2, 2, 1];
console.log("tc1 : " + findElementThatAppearsOnce(tc1));

const tc2 = [4, 1, 2, 1, 2];
console.log("tc2 : " + findElementThatAppearsOnce(tc2));
