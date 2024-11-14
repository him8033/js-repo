let btn = document.querySelector("button");
btn.addEventListener("click", async function () {
    let data = await getFact();
    let p = document.querySelector("#result");
    p.innerText = data;
    console.log(data);
})

let url = "https://icanhazdadjoke.com/";
async function getFact() {
    try {
        const config = { headers: { Accept: "application/json" } };
        let res = await axios.get(url, config);
        return res.data.joke;
    } catch (err) {
        console.log("error! ", err);
        return "Fact not Found";
    }
}