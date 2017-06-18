function solver(message) {
    let testMessage = message.split('').filter(e=>e!='\n').join('');

    const regexMessageFormatValidation = /(^)<message.*?>.*?<\/message>($)/gm;
    if(testMessage.match(regexMessageFormatValidation) == null){
        console.log('Invalid message format');
        return;
    }

    const regexMessageTag = /<message(\s+([a-z]+="[a-zA-Z0-9 .]+"))+>/m;
    let messageTag = message.match(regexMessageTag);
    if(messageTag == null){
        console.log('Invalid message format');
        return;
    }
    messageTag = messageTag[0];

    const regexReceiver = /\bto="([A-Za-z0-9. ]+)"/;
    const regexSender = /\bfrom="([A-Za-z0-9. ]+)"/;
    let receiverString = messageTag.match(regexReceiver);
    let senderString = messageTag.match(regexSender);
    if(receiverString == null || senderString == null){
        console.log('Missing attributes');
        return;
    }

    senderString = senderString[1];
    receiverString = receiverString[1];


    function replacer(match) {
        return "";
    }

    let messageBody = message.replace(regexMessageTag, replacer).slice(0,-10).split('\n');

    let output = '<article>\n';
    output += `  <div>From: <span class="sender">${senderString}</span></div>\n`;
    output += `  <div>To: <span class="recipient">${receiverString}</span></div>\n`;
    output += '  <div>\n';
    messageBody.forEach(function (e) {
        output += `    <p>${e}</p>\n`
    });
    output += '  </div>\n';
    output += '</article>';

    console.log(output);

}
// solver('<message from="MasterBlaster" color="#FF340B">FWD: Funny stuff</message>')
// solver('<message to="Bob  " from="Alice  " timestamp="1497254092"></message>');
// solver('<message        to="Bob" from="Alice  "        timestamp="1497254092">Hey man, what\'s up?</message>');
// solver('<message from="John Doe233" \n to="Alice323">Not much, just chillin. How about you?</message>');
// solver('<message from="Alice" timestamp="1497254112">Same old, same old</message>');
solver('<message peto="Bob" from="Alice" timestamp="1497254114">Same old, same old\nLet\'s go out for a beer</message>');
// solver('<message to="Alice" from="Charlie"><img src="fox.jpg"/></message><meta version="2"/>');
// solver('<message from="Hillary" to="Edward" secret:true>VGhpcyBpcyBhIHRlc3Q</message>');
