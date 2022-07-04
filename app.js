"use strict";
const names = "sashafdfdfdfsd";
console.log(names);
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("Нажал кнопку!");
});
const c = [2, 3, 4, 5, 5];
const mas = c.map((item) => {
    return item * 5;
});
console.log(mas);
const ob = {
    name: "sasha",
    age: 5,
    sasasasd: " dsdsf",
};
console.log(ob);
