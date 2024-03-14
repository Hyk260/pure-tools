export class loaderProxy {
  constructor () {
    this.scriptLoaderCache = []
  }

  /**
   * 加载 CSS 样式文件
   * @param {string} src - 样式文件的 URL 地址
   */
  loadCss (src) {
    const element = document.createElement('link')
    element.rel = 'stylesheet'
    element.href = src
    document.body.appendChild(element)
  };

  /**
   * 加载 JavaScript 文件，若已经加载过则直接返回
   * @param {string} src - JavaScript 文件的 URL 地址
   * @returns {string} - 已加载过的 JavaScript 文件的 URL 地址
   */
  async loadScript (src) {
    if (this.scriptLoaderCache.includes(src)) {
      return src
    } else {
      const element = document.createElement('script')
      element.src = src
      document.body.appendChild(element)
      element.onload = () => {
        return this.scriptLoaderCache.push(src)
      }
    }
  };

  /**
   * 并行加载多个 JavaScript 文件
   * @param { string[] } srcList - 多个 JavaScript 文件的 URL 地址数组
   */
  async loadScriptConcurrent (srcList) {
    if (!Array.isArray(srcList)) return
    const promises = srcList.filter((src) => src).map((src) => this.loadScript(src))
    await Promise.all(promises)
  };
}
// const loader = new loaderProxy();
// loader.loadScript(data).then(() => {})
