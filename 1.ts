console.log("hello")

interface Person{
    姓:string;
    名:string;
}

function greeter(person:Person){
    return "hello,"+person.姓+""+person.名
}

declare var document:Document;

let user={
    姓:"z",
    名:"b"
}
document.body.innerHTML=greeter(user)

