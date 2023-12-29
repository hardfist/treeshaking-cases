# SideEffects Optimization
when setting `optimization.sideEffects` to true, Webpack will do sideEffects Optimization(which means remove unused sideEffect free module entirely).
How to Decide SideEffect Module ?
* by analyzing code (which is slow and easy positive-false)
* by using package.json sideEffects field
