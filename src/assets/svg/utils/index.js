/**
 * 将 CSS 样式字符串转换为 JavaScript 对象，这在处理内联样式时非常有用。例如，React 中的 style 属性接受的是 JavaScript 对象，而不是 CSS 字符串
 * @param {*} styleStr CSS 样式字符串
 * @returns JavaScript 对象
 */
function styleStrToObject(styleStr) {
	const obj = {}
	const s = styleStr
		.toLowerCase()
		.replace(/-(.)/g, function (m, g) {
			return g.toUpperCase()
		})
		.replace(/;\s?$/g, "")
		.split(/:|;/g)
	for (var i = 0; i < s.length; i += 2) {
		obj[s[i].replace(/\s/g, "")] = s[i + 1].replace(/^\s+|\s+$/g, "")
	}

	return obj
}

export default styleStrToObject
