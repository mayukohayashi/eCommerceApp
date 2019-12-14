//Memoization ~~~ Caching
function addTo80(n) {
  console.log('longtime')
  return n + 80;
}

addTo80(5)
addTo80(5)
addTo80(5)

let cache = {};
function memoizedAddTo80(n) {
  if (n in cache){
  //cache.n
  return cache(n);
  } else {
    console.log('takes long time')
    cache[n] = n + 80;
    return cache[n]
  }
}

console.log('1' ,memoizedAddTo80(5))
console.log('2' ,memoizedAddTo80(5))