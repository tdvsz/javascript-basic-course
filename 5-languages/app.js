const userLanguage = prompt('Enter youre language:');
switch (userLanguage) {
    case 'en':
        console.log('Good afternoon!');
        break;
    case 'de':
        console.log('Gutten tag!');
        break;
    case 'ru':
        console.log('Добрый день!');
        break;
    case 'bel':
        console.log('Добры дзень!');
        break;
    case 'cht':
        console.log('午安');
        break;
    default:
        console.log("I don't know this language, try again")
}
