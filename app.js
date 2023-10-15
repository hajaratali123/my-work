let url2 = "https://dog.ceo/api/breeds/image/random";


let btn = document.querySelector("#get_cat");
btn.addEventListener("click", async() => {
    for (let i = 0; i < 10; i++) {
        let link = await getimage();
        show_image(link);
        console.log(link);
    }
});

function show_image(link) {
    setTimeout(() => {
        let list = document.querySelector("#list");
        let img = document.createElement("img");
        img.setAttribute("src", link);
        list.appendChild(img);
    }, 2000);
}
async function getimage() {
    try {
        let res = await axios.get(url2);
        // console.log(res.data.message);
        return res.data.message;
    } catch (err) {
        console.log("err", err);
    }
}