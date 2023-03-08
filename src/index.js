

function frameText(text){    
    return "█▀" + "▀".repeat(text.length) + "▀█\n" + `█ ${text} █\n` + "█▄" + "▄".repeat(text.length) + "▄█\n"
}

module.exports = {
    frameText
};