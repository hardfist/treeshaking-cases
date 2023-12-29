# SideEffects Optimization
when setting `optimization.sideEffects` to true, Webpack will do sideEffects Optimization(which means remove unused sideEffect free module entirely).
if barrel doesn't have sideEffect and not used then it can be safe skipped
we can see the ./reexport.js is skipped entirely