(() => {
  // src/side-effect.js
  console.log("side-effect");

  // src/lib.js
  var a = 1;

  // src/index.js
  console.log({ a });
})();
