const wrapperQuerySelector = document.querySelector(".wrapper")
const newSquareCreateDiv = document.createElement("div")
document.addEventListener("click", squareCreation)

function squareCreation()
{
    const SquareClone = newSquareCreateDiv.cloneNode()
    wrapperQuerySelector.SquareClone
    SquareClone.classList.add("blue")
    wrapperQuerySelector.appendChild(SquareClone)
}