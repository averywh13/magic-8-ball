function shakeMagic8Ball() {
const question = prompt('Ask The Magic 8-Ball a Question...');

if (question === null){
    document.getElementById('response-text').innerText = 'ASK THE QUESTION MORON'
    document.getElementById('response-text').classList = 'text-danger'
    document,getElementById('response-text').src = ''
    
}

}