const a = 5;

function prop() {
  return Promise.resolve(5);
}

(async function getResult() {
  const result = await prop();
  console.log(result);
})();

export default a;

const qqq = 12;
console.log(qqq);
