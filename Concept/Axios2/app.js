let btn = document.querySelector("button");
btn.addEventListener("click", async function () {
    let data = await getFact();
    let img = document.querySelector("#result");
    img.setAttribute("src",data);
    console.log(data);
})

let url = "https://dog.ceo/api/breeds/image/random";
async function getFact() {
    try {
        let res = await axios.get(url);
        return res.data.message;
    } catch (err) {
        console.log("error! ", err);
        return "Fact not Found";
    }
}