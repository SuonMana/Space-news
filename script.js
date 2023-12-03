

let url = "https://v2.jokeapi.dev/joke/Any"

async function getJoke() {

    const result = document.querySelector(".result")
    result.innerHTML = ``
    try{
        let response = await fetch(url)

        let data = await response.json()

        result.innerHTML = `
        <div class="joke">
            <h4>${data.setup}</h4>
            <h4>&downdownarrows;</h4>
            <h4>${data.delivery}</h4>
        </div>
        `

    }catch (error) {
        console.log("some error accur")
    }
}

getJoke()

const randomJoke = document.querySelector("#randomJoke")
randomJoke.addEventListener("click", async () => {
    getJoke()
})