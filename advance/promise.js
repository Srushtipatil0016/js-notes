// new Promise((resolve, reject) => {...}) — you get two functions, resolve and reject. You call resolve(value) when the operation succeeds, reject(reason) when it fails.
// setTimeout here just simulates something that takes time (like a network call) — after 1000ms, it decides success or failure.
// Since error = true, this promise will always reject with 'ERROR: JS went wrong'.
// Promise.allSettled() — waits for all, but never fails-fast; gives you an array of {status, value/reason} for each, so you know exactly what succeeded/failed.
// Promise.race() — resolves/rejects as soon as the first promise settles (whichever finishes first, win or lose).
// Promise.any() — resolves as soon as the first one succeeds, ignores rejections unless all reject.
// Promise.all() takes an array of promises and resolves only when all of them resolve — giving you an array of results in the same order.
// .catch() handles network failures or JSON parsing errors.
// fetch() returns a Promise that resolves to a Response object — not the actual data yet.
// response.json() is itself async (parsing the body takes time), so it also needs to be awaited — that's why there are two awaits.
// async function automatically returns a Promise, and lets you use await inside it.
// await promiseFive pauses the function at that line until promiseFive settles (resolves or rejects) — without blocking the rest of your app, just that function's execution.
// If it resolves, response gets the resolved value.
// If it rejects, await throws — which is why you wrap it in try/catch. This is the async/await equivalent of .then()/.catch().


// .then()	                      await
// Uses callback                functions	Looks like synchronous code
// Can create long chains      	Easier to read for sequential steps
// Uses .catch()            	Uses try...catch
// Good for chaining	        Good for linear async logic
// Returns a Promise	        Can only be used inside an async function


// Main Thread

// ↓

// promiseFour starts
// (setTimeout registered)

// ↓

// consumePromiseFive()
// (await waits)

// ↓

// fetch() starts request

// ↓

// Main thread becomes free

// ↓

// After ~1 second
// promiseFour resolves/rejects

// ↓

// promiseFive resolves/rejects

// ↓

// fetch finishes when network response arrives