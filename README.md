## Minimal reproducible code of lighthouse user-flow version 10

The code in this repo is a minimal reproducible example of using user-flow from lighthouse version 10. 

The example was taken from the documentation and can be found at [lighthouse/docs/user-flows.md](https://github.com/GoogleChrome/lighthouse/blob/main/docs/user-flows.md#navigations-in-the-nodejs-api)

Install the packages by running:
```bash
npm ci
```

To run it please use: 
```bash
npm start
```

The error found was:

> SyntaxError: Cannot use import statement outside a module
at Object.compileFunction (node:vm:360:18)
at wrapSafe (node:internal/modules/cjs/loader:1088:15)
at Module._compile (node:internal/modules/cjs/loader:1123:27)
at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
at Module.load (node:internal/modules/cjs/loader:1037:32)
at Module._load (node:internal/modules/cjs/loader:878:12)
at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
at node:internal/main/run_main_module:23:47


