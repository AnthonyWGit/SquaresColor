const wrapperQuerySelector = document.querySelector(".wrapper")
const squareQuerySelector = document.querySelector(".square")
const newSquareCreateDiv = document.createElement("div")
document.addEventListener("keydown", squareCreation)          //Will pop up squares ib the screen
document.addEventListener("keydown", squareDeletion)
document.addEventListener("keydown", createAll)
let randomization 
let lastNumber
let cellsEmoji = Range(6,10).concat(Range(19,20))
console.log(cellsEmoji)

function squareCreation(event)   
{
    if (event.keyCode == 38)
    {
        const SquareClone = newSquareCreateDiv.cloneNode()                  //Cloning nodes so we pop a square each time event is called         
        randomization = Math.random()                                       //Variable taking a random number between 0 and 1
        console.log(randomization)                                          //Debug tracker
        wrapperQuerySelector.SquareClone
        SquareClone.addEventListener("click",turnBlackOnClick)
        if (randomization < (1/4))                                                  //I want equal probabilities so i do (1 / number of colors) and assign a color for each range
        {
            SquareClone.classList.add("blue")
            SquareClone.classList.add("square")
            wrapperQuerySelector.appendChild(SquareClone)        
        }
        else if ((randomization >= (1/4) && randomization < (1/2)))
        {
            SquareClone.classList.add("violet")
            SquareClone.classList.add("square")
            wrapperQuerySelector.appendChild(SquareClone)        
        }
        else if ((randomization >= (1/2) && randomization < (3/4)))
        {
            SquareClone.classList.add("silver")
            SquareClone.classList.add("square")
            wrapperQuerySelector.appendChild(SquareClone)        
        }
        else 
        {
            SquareClone.classList.add("grey")
            SquareClone.classList.add("square")
            wrapperQuerySelector.appendChild(SquareClone)        
        }

        console.log(wrapperQuerySelector.childNodes)        
    }
}
function squareDeletion(event)                                                       //This will remove the last square created | errors are not cool so check if we created a square or not
{
    if (event.keyCode == 40)
    {
        if (wrapperQuerySelector.children.length !== 0) wrapperQuerySelector.removeChild(wrapperQuerySelector.lastChild) //We use lastChild to target the last square we created by clicking        
    }
}

function createAll(event)
{
    if (event.keyCode == 39)
    {
        for(var x = 0; x < 225; x++) 
        {
            const SquareClone = newSquareCreateDiv.cloneNode()                  //Cloning nodes so we pop a square each time event is called       
            randomization = Math.random()                                       //Variable taking a random number between 0 and 1
            console.log(randomization)                                          //Debug tracker
            wrapperQuerySelector.SquareClone
            SquareClone.addEventListener("click",turnBlackOnClick)
            if (randomization < (1/4))                                                  //I want equal probabilities so i do (1 / number of colors) and assign a color for each range
            {
                SquareClone.classList.add("blue")       
                SquareClone.classList.add("square")
                wrapperQuerySelector.appendChild(SquareClone)     
            }
            else if ((randomization >= (1/4) && randomization < (1/2)))
            {
                SquareClone.classList.add("violet")      
                SquareClone.classList.add("square")
                wrapperQuerySelector.appendChild(SquareClone)     
            }
            else if ((randomization >= (1/2) && randomization < (3/4)))
            {
                SquareClone.classList.add("silver")
                SquareClone.classList.add("square")
                wrapperQuerySelector.appendChild(SquareClone)     
            }
            else 
            {
                SquareClone.classList.add("grey")
                SquareClone.classList.add("square")
                wrapperQuerySelector.appendChild(SquareClone)     
            }
        }        
    }
}

function turnBlackOnClick()
{
    if (this ==  wrapperQuerySelector.childNodes[7])
    {
        this.classList.remove("blue")           //Remove color classes 
        this.classList.remove("violet")
        this.classList.remove("silver")
        this.classList.remove("grey")
        this.classList.add("black")
        alert("aaa")        
    }

}
function Range(beginRange, endRange)    //This function will let us build ranges for arrays containing emoji cells 
{
    return Array.from(Array(endRange - beginRange + 1).keys()).map( x => beginRange + x)     // +1 because index starts at 0 and we'll miss one number without it. We give the beginning and the end of array 
}                                                                                           //  we want. Array.from always starts at 0 so we use .map to transform the initial array 