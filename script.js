const wrapperQuerySelector = document.querySelector(".wrapper")
const newSquareCreateDiv = document.createElement("div")
const blueSearch = document.querySelector(".blue")
document.addEventListener("keyup", squareCreation)
document.addEventListener("click", squareDeletion)

function squareCreation()
{
    const SquareClone = newSquareCreateDiv.cloneNode()
    wrapperQuerySelector.SquareClone
    SquareClone.classList.add("blue")
    wrapperQuerySelector.appendChild(SquareClone)
    console.log(wrapperQuerySelector.childNodes)
}
function squareDeletion()
{
    wrapperQuerySelector.removeChild(wrapperQuerySelector.children[0])
}
