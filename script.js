function shakeMagic8Ball() {
    const question = prompt('Asketh the Magic 8 Ball a Questioneth...');
    if (question === null) {
        document.getElementById('response-text').innerText = 'ASKETH A QUETIONETH IMBECILE'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = 'eightballgif.gif' //FIX THIS
        return
    }

    if (!question.trim()) {
        alert('i seeth nay questioneth...')
        return
    }

    const randomNumber = Math.floor(Math.random() * 8);
    let answer, image, color;

    switch (randomNumber) {
        case 0:
            answer = "AYE";
            image = "eightballgif.gif" //change this!!;
            color = "text-success";
            break;
        case 1:
            answer = "NAY";
            image = "eightballgif.gif" //change this!!;
            color = "text-danger";
            break;
        case 2:
            answer = "ASKETH AGAIN LAT'R";
            image = "eightballgif.gif" //change this!!;
            color = "text-secondary";
            break;
        case 3:
            answer = "HAPLY";
            image = "eightballgif.gif";//change this!!;
            color = "text-warning";
            break;
        case 4:
            answer = "CANNOT PREDICTETH ANON";
            image = "eightballgif.gif";//change this!!;
            color = "text-muted";
            break;
        case 5:
            answer = "DON'T COUNTETH ON IT";
            image = "eightballgif.gif";//change this!!;
            color = "text-danger";
            break;
        case 6:
            answer = "MOST LIKELY";
            image = "eightballgif.gif";//change this!!;
            color = "text-success";
            break;
        case 7:
            answer = "OUTLOOK NOT SO VALOROUS";
            image = "eightballgif.gif";//change this!!;
            color = "text-danger";
            break;
        default:
            break;
    }

const responseText = document.getElementById('response-text');
responseText.innerText = answer;
responseText.classList = `display-4 ${color}`;
document.getElementById('response-image').src = image;

}