
### ES 模块 (ESM):
```
  格式：format: 'es' 或者省略 format 属性。
  描述：ES 模块是 JavaScript 的官方模块系统，它提供了一种在浏览器和 Node.js 环境中导入和导出代码的标准方式。ES 模块可以通过 import 和 export 语法进行导入和导出。
  用途：当你的目标环境支持 ES 模块时，这是推荐的模块格式。它可以提供更好的性能和可靠性，并支持静态分析和树摇优化。
```
### CommonJS (CJS):
```
  格式：format: 'cjs'
  描述：CommonJS 是 Node.js 默认的模块系统，也被广泛用于旧版浏览器环境。它使用 require 和 module.exports 语法来导入和导出模块。
  用途：当你的目标环境是 Node.js 或需要与使用 CommonJS 的其他代码库进行兼容时，可以选择 CommonJS 模块格式。
```
### Universal Module Definition (UMD):
```
  格式：format: 'umd'
  描述：UMD 是一种通用的模块格式，兼容多种环境，包括浏览器、Node.js 和 AMD。UMD 模块既可以通过 require 导入，也可以通过全局变量导入。
  用途：当你的代码需要在多种环境中使用，并且你不确定目标环境的模块系统时，可以选择 UMD 模块格式。
```
### Asynchronous Module Definition (AMD):
```
  格式：format: 'amd'
  描述：AMD 是用于浏览器环境的异步模块定义规范。它使用 define 函数来定义模块，并使用 require 函数来异步加载模块。
  用途：当你的代码需要在旧版浏览器中异步加载模块时，可以选择 AMD 模块格式。
  ```