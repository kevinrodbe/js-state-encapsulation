// state container definition
const useState = initVal => {
  let val = initVal;

  const get = () => val;
  const set = x => (val = x);

  return Object.freeze({ get, set });
};

// make a counter by using the state container
const makeCounter = () => {
  const { get, set } = useState(0);

  const inc = () => set(get() + 1);
  const dec = () => set(get() - 1);

  return Object.freeze({ get, inc, dec });
};

// create the counter object
const myCounter = makeCounter();

// let's test our counter out
console.log(myCounter.get()); // 0
myCounter.inc();
myCounter.inc();
console.log(myCounter.get()); // 2
myCounter.dec();
myCounter.dec();
console.log(myCounter.get()); // 0
