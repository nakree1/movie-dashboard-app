export function cropText(str, num) {
    let arr = str.split(' ')

    if (arr.length <= num) return str

    let text = arr.slice(0, num).join(' ')
    let lastChar = text[text.length - 1]

    if (lastChar === '.' || lastChar === ',' || lastChar === '!' || lastChar === '?') return text.slice(0, -1) + '...'
    return text + '...'
}