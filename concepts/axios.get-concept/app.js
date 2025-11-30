let btn = document.querySelector("button");
btn.addEventListener("click", async function () {
    let data = await getFact();
    let p = document.querySelector("#result");
    p.innerText = data;
    console.log(data);
})

let url = "https://catfact.ninja/fact";
async function getFact() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (err) {
        console.log("error! ", err);
        return "Fact not Found";
    }
}