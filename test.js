let numOrStr = prompt('input number or string', '');

switch (true) {
    case numOrStr === null:
        console.log('Empty String');
        break;
    case numOrStr.trim() === '':
        console.log('ви скасували');
        break;
    case isNaN (+ numOrStr):
        console.log('number is Ba_NaN')
        break;
    default:
        console.log('OK!')
        break;
}