console.log("hello");
function greeter(person) {
    return "hello," + person.姓 + "" + person.名;
}
var user = {
    姓: "z",
    名: "b"
};
document.body.innerHTML = greeter(user);
