function cal(a,b){
    const add=a+b;
    const sub=a-b;
    const mul=a*b;
    const div=a/b;
    return[add,sub,mul,div]
}
const[add,sub,mul,div]=cal(5,6);
console.log(add);
console.log(mul);

const subject=['tamil','english','maths','science']
const[first,second,third,fourth]=subject;
console.log();


let dtails ={
    name:"srihari",
    dob:123456,
    mob:1234,
    asdf:{
        qwer:"wewer",
        zxc:"qwee"
    }
}
function person({name,dob,mob,asdf:{qwer}}){
    let inf=name+dob+mob+qwer;
    console.log(inf);
}
person(dtails);