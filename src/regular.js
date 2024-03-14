/**
 * 移除输入字符串中所有匹配的模式，并去除结果字符串的首尾空白字符。
 * @param {string} str - 输入的字符串，需要从中移除模式。
 * @param {string|RegExp} pattern - 要从输入字符串中移除的模式，可以是字符串或正则表达式。
 * @returns {string} - 移除了所有匹配模式并去除首尾空白字符后的结果字符串。
 */
export function replaceCustomText (str, pattern) {
  const regex = new RegExp(pattern, 'g')
  return str.replace(regex, '').trim()
}
// 匹配数字
export function isNumeric (str) {
  return /^[0-9]+$/.test(str)
}
// 匹配中文
export function isChineseCharacter (str) {
  return /[\u4e00-\u9fa5]+/.test(str)
}
/**
 * 去除字符串中的 HTML 标签
 * @param {string} str - 包含 HTML 元素的字符串
 * @returns {string} - 去除 HTML 标签后的纯文本字符串
 */
export function removeHtmlTags (str) {
  const regex = /<[^>]+>/g
  const result = str.replace(regex, '')
  return result
}
/**
 * 判断字符串是否包含指定内容
 * @param {string} str - 原始字符串
 * @param {string} target - 要匹配的目标字符串
 * @returns {boolean} - 是否包含目标字符串
 */
export function containsString (str, target) {
  const regex = new RegExp(target, 'g')
  return regex.test(str)
}
