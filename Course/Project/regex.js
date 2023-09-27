let txt = "hI hEllo Everyone Welcome to the HELLO and Hi";
let out =txt.match(/HI/ig);
let out2 =txt.match(/Hello/ig);
let out1 =txt.search(/hello/ig);
let out3 = txt.search("hi");
let pattern = /to/i;
let out4 = txt.match(pattern);
let data = "Come to the java and to the java script with come to java"
let asd =data.replaceAll(/JAVA/ig,"C");
let qwert = asd.replaceAll(/C/ig,"sri")
console.log(out);
console.log(out1);
console.log(out2);
console.log(out3);
console.log(out4);
console.log(asd);
console.log(qwert);
let zxcv = "hi hello to the hi to the hello and hi for hello"
let pattern1=(/(HELLO|HI)/ig);
let out5 = zxcv.match(pattern1);
console.log(out5);
const txt1 = "ji slksdnsf lskfafsdlkej kasjesl";
let par =/s/g;
let c =par.exec(txt1);

console.log(c);




