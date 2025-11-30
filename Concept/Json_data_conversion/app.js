let h1 = document.querySelector("h1");

//          This is Json to Javascript object Transformation

let data = '{"fact":"Grown cats have 30 teeth. Kittens have about 26 temporary teeth, which they lose when they are about 6 months old.","length":114}';

let validres = JSON.parse(data);
console.log(data);
console.log(validres);
console.log(validres.fact);
console.log(validres.length);
let demo = h1.innerHTML;
h1.innerHTML = `${demo}<br><br>${data}<br><br>${validres}<br><br>${validres.fact}<br><br>${validres.length}`;

//          Javascript Object to Json Transformation

let stuData = {
    name: "himanshu",
    marks: 90,
    cgpa: 8
}

let validStuData = JSON.stringify(stuData);
console.log(stuData);
console.log(validStuData);
let demo2=h1.innerHTML;
h1.innerHTML=`${demo2}<br><br>${stuData}<br><br>${validStuData}`;