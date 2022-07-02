enum Role {
  result,
  massage,
  all,
}
const ob: {
  name: string;
  age: number;
  hobbies: {}[];
  role: [number, string];
  roles: number;
} = {
  name: "maxmilian",
  age: 30,
  hobbies: [{ name: "aleksandr" }, {}, {}],
  role: [2332, "hello"],
  roles: Role.result,
};
if (ob.roles === Role.result) {
  console.log("Hello 121212");
  ob.roles = Role.massage;
}
if (ob.roles === Role.massage) {
  console.log(ob.roles);
}
console.log(ob);
console.log(ob.hobbies);
