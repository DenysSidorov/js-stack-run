export const a = 5;

function prop() {
  return Promise.resolve(5);
}

async function getResult() {
  let result = await prop();
  console.log(result);
}


getResult();