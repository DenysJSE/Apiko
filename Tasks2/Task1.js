function unicFn(initialArray) {
  const isValid = initialArray.every(item => typeof item === 'string' || typeof item === 'number');

  if (isValid) {
    const uniqueSet = new Set(initialArray);
    console.log(uniqueSet);
  } else {
    console.log("Not all elements are strings or numbers.");
  }
}

unicFn([2, 3, 1, 3, 3, 7]);
unicFn(["apple", "peach", "pear", "apple", "peach"]);
unicFn([2, 3, 1, 3, 3, 7, "apple", "peach", "pear", "apple", "peach"]);
unicFn([2, 3, "apple", {}]);
unicFn([2, 3, "apple", null, undefined]);