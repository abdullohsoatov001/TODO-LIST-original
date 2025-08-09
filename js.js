let input = document.querySelector('#input')
let sendBtn = document.querySelector('#btn')
let body = document.querySelector('body')

let son = 0
sendBtn.addEventListener('click', () => {
    let label = document.createElement('span')
    label.className = "text-[40px] "
    let text = document.createElement('input')
    son++
    body.className = "relative"
    let container = document.createElement('div')
    container.className = "items-center flex gap-2 ml-[400px] mt-[20px] "
    text.type = "checkbox"
    text.className = "w-[50px] h-[50px]"
    label.textContent = input.value + "" + "#" + son
    input.value = ``
    container.prepend(text, label)
    body.prepend(container)
    let xax = document.querySelector('#xax')
    xax.className = "mt-[20px] "
    let chiziq = document.createElement('div')
    chiziq.className = "h-[1px] w-[740px] bg-black m-auto mt-[10px]"
    xax.prepend(container, chiziq)
    let musor = document.createElement('button')
    let img = document.createElement('img')
    img.setAttribute('src', 'trash-svgrepo-com 1.svg')
    musor.prepend(img)
    text.addEventListener('change', () => {
        if (text.checked) {
            label.style.textDecoration = "line-through"
        }
        else {
            label.style.textDecoration = "none"

        }
    })

    let h1 = document.querySelector('h1')
    let night = document.querySelector('#night')
    let darkMode = false;
    night.addEventListener('click', () => {
        darkMode = !darkMode;
        if (darkMode) {

            input.classList.remove('text-black');
            input.classList.add('text-white');

            body.className = "bg-black";

            chiziq.classList.remove('bg-black')
            chiziq.classList.add("bg-white")

            h1.style.color = "white";

            label.classList.remove("text-black");
            label.classList.add("text-white");
            input.classList.add("text-white")
            icon.src = "Vector (2).svg";
        } else {
            input.classList.remove('text-white');
            input.classList.add('text-black');

            body.className = "bg-white";

            chiziq.classList.remove('bg-white')
            chiziq.classList.add("bg-black")

            h1.style.color = "black";

            label.classList.remove("text-white");
            label.classList.add("text-black");

            icon.src = "Vector (1).svg";
        }
    })
})
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        sendBtn.click()
    }
})