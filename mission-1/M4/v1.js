//* Problem statement

/**
 * Implement a simple in-memory cache for and "expensive" function (line database query or API call).
 * The goal is, store the results of a function call. So that, if the same call is made again, the result will return from the cache instead of running the expensive function again.
 */

const cacheData = new Map();


const expensiveTask = (id) => {
  console.log("Ran the expensive task for:", id);

  return {
    id: id,
    data: `Some data for the ${id}`,
    timestamp: new Date().getTime(),
  }
}

const getData = (id) => {
  if (cacheData.has(id)) {
    console.log("Cache HTI for id:", id);
    return cacheData.get(id);
  }

  const data = expensiveTask(id);

  console.log("Cache MISS for id:", id);
  cacheData.set(id, data);

  return data;
}

console.log(cacheData);

console.log(getData(123));
console.log(getData(123));

console.log(cacheData);