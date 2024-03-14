/**
 * 防抖函数
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @returns {Function} 返回一个防抖后的函数
 * const debouncedFunc = debounce(fn, 250);
 */
export function debounce (func, wait = 300, immediate = false) {
  let timer
  return function (...args) {
    const context = this
    const later = function () {
      timer = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timer
    clearTimeout(timer)
    timer = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

// 延迟函数
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
