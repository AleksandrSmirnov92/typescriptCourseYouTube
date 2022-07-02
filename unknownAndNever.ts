/**THE UNKNOWN TYPE */
let theUserInput: unknown;
let userName: string;
theUserInput = 5;
theUserInput = "5";
// мы можем хранить любое число это не вызовит ошибки,работает так же как и (ANY) но все же отличие есть
//допустим мы скажем что есть другая переменная userName:string
// userName = theUserInput; /**вызовет ошибку */
// но если я сделаю проверку через if
if (typeof theUserInput === "string") {
  /**тут ошибка исчезает потому что мы точно знаем что пользователь ввел строку */
  userName = theUserInput;
}

/**NEVER TYPE */
function generateErrror(message: string, code: number): never {
  throw { message: message, errerCode: code };
}
generateErrror("An error occurred", 500);

// let result = generateErrror("a", 4);
// console.log(result);
// сюда код не дойдет если мы поставим значение never и остановит ваш скрипт
