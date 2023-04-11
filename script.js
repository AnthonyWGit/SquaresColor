const wrapperQuerySelector = document.querySelector(".wrapper")
const newSquareCreateDiv = document.createElement("div")
document.addEventListener("keyup", squareCreation)          //Will pop up squares ib the screen
document.addEventListener("click", squareDeletion)
let randomization 

function squareCreation()
{
    const SquareClone = newSquareCreateDiv.cloneNode()                  //Cloning nodes so we pop a square each time event is called 
    randomization = Math.random()                                       //Variable taking a random number between 0 and 1
    console.log(randomization)                                          //Debug tracker
    wrapperQuerySelector.SquareClone
    if (randomization < (1/4))                                                  //I want equal probabilities so i do (1 / number of colors) and assign a color for each range
    {
        SquareClone.classList.add("blue")
        wrapperQuerySelector.appendChild(SquareClone)        
    }
    else if ((randomization >= (1/4) && randomization < (1/2)))
    {
        SquareClone.classList.add("violet")
        wrapperQuerySelector.appendChild(SquareClone)        
    }
    else if ((randomization >= (1/2) && randomization < (3/4)))
    {
        SquareClone.classList.add("silver")
        wrapperQuerySelector.appendChild(SquareClone)        
    }
    else 
    {
        SquareClone.classList.add("grey")
        wrapperQuerySelector.appendChild(SquareClone)        
    }

    console.log(wrapperQuerySelector.childNodes)
}
function squareDeletion()                                                       //This will remove the last square created | errors are not cool so check if we created a square or not
{
    wrapperQuerySelector.children.length == 0 ? null : wrapperQuerySelector.removeChild(wrapperQuerySelector.children[0])
}
