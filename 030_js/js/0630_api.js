// https://www.youtube.com/watch?v=QSF8JXFPR18&list=PLiOhsP3M5j5wIUlXkYMuWTVR8inofxLS0&index=7
async function getResponce() {
    // let responce = await fetch("https://my-json-server.typicode.com/typicode/demo/posts")
    //let responce = await fetch("https://vmarshirov.github.io/g06u28/030_js/data/0620.json")
    //let responce = await fetch("http://185.182.111.214:7628/tmp/g06u28.txt_api.json")
    let responce = await fetch("../../tmp/g06u28.shop.json")

    /*

        if (response.ok) { // if HTTP-status is 200-299
                           // get the response body (the method explained below)
            let content = await response.json();
        } else {
            alert("HTTP-Error: " + response.status);
        }
    */


    // let content = await responce.text()
    // console.log(JSON.parse(content))

    let content = await responce.json()
    content = content.splice(0, 4)
    console.log(content)
    /*
        let key
        for (key in content ) {
            console.log(content[key].id)
            console.log(content[key].title)
            console.log(content[key].thumbnailUrl)
            console.log(content[key].url)
        }
    */

    let key
    let ul_0 = document.getElementsByTagName("ul")[0]
    for (key in content) {
        ul_0.innerHTML += ` 
        <li class="m-3 list-group-item"> 
        <img src=${content[key].img} width="200px">
        <h5>${content[key].title}</h5>
        <p>${content[key].description}. Цена 
        ${content[key].price} р.</p>
        <p>Заказать 
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <input type="number" name="amount" value="0" size="2">
        </p> 
        </li>
                `
    }


}

getResponce()
