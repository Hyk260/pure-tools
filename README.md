### 🎨 目录结构

```
├── .vscode                    // 编辑器配置
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── main.js                // 入口 加载组件 初始化等
├── browserslistrc             // 配置兼容浏览器
└── vue.config.js              // vue配置文件

├── bin  // 用于存放可执行二进制文件的目录
├── dist(lib)  // 产物输出目录
├── node_modules 	// 依赖项目
├── public  // 内部公用目录 (js、css、img等)
├── src // 源码
├── test // 单元测试
├── docs // 文档说明
├── package.json  // 任务包含Json文件的内容。这些Json文件应自动处理为目录。
├── README.md // 包说明，会在npm展示
└── ...  // 一些配置文件（eg: eslint、babel）

```


rollup 支持的打包文件的格式有 amd, cjs, es\esm, iife, umd。其中，amd 为 AMD 标准，cjs 为 CommonJS 标准，esm\es 为 ES 模块标准，iife 为立即调用函数， umd 同时支持 amd、cjs 和 iife。

