// защита от xxs инъекций
const textNormalizer = text => {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, m => map[m]);
}
//use
const str = '<script>"kljsklj" & lkjljk</script>';

console.log(textNormalizer(str));