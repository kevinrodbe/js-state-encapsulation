const useCount = (initVal = 0) => {
  let count = initVal;
  const get = () => count;
  const set = x => (count = x);
  return { get, set };
};

const makeCounter = () => {
  let { get, set } = useCount();

  const inc = () => set(get() + 1);
  const dec = () => set(get() - 1);

  return Object.freeze({ get, set, inc, dec });
};

// create the counter object
const myCounter = makeCounter();

// let's test our counter out
console.log(myCounter.get()); // 0
myCounter.set(2);
console.log(myCounter.get()); // 2
myCounter.inc();
console.log(myCounter.get()); // 3
myCounter.dec();
myCounter.dec();
console.log(myCounter.get()); // 1