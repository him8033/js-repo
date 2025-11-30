let h1=document.querySelector("h1");
let url = "https://catfact.ninja/fact";

fetch(url)
    .then((res) => {
        console.log(res);
        let demo=h1.innerHTML;
        h1.innerHTML=`${demo}<br><br>${res}`;
        return res.json();
    })
    .then((data) => {
        console.log(data);
        console.log(`data1:${data.fact}`);
        console.log(`data1:${data.length}`);
        let demo=h1.innerHTML;
        h1.innerHTML=`${demo}<br><br>${data}<br><br>${data.fact}<br><br>${data.length}`;
        return fetch(url);
    })
    .then((res2) => {
        console.log(res2);
        let demo=h1.innerHTML;
        h1.innerHTML=`${demo}<br><br>${res2}`;
        return res2.json();
    })
    .then((data2) => {
        console.log(data2);
        console.log(`data2:${data2.fact}`);
        console.log(`data2:${data2.length}`);
        let demo=h1.innerHTML;
        h1.innerHTML=`${demo}<br><br>${data2}<br><br>${data2.fact}<br><br>${data2.length}`;
    })
    .catch((err) => {
        console.log("error found!", err);
    })