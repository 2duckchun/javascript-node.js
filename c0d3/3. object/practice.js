const mergeArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

const a = mergeArrays(["1", "2"], ["3", "4", "5"]);
console.log(a);
