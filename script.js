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
        wrapperQuerySelector.replaceChildren()                                  //Replace all child nodes of wrapper with none to clear the page 
        for(var x = 0; x < 225; x++)                                            //The emoji needs a 15*15 board
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
    cellsEmoji.forEach(element => {                         //Foreach so we can go through all the numbers is the huge range we created 

    if ((this == wrapperQuerySelector.children[element - 1]) && (wrapperQuerySelector.children.length == 225)) //element - 1 because there is a "" in the nodelist created when the first square pops 
    {
        this.classList.remove("blue")           //Remove color classes 
        this.classList.remove("violet")
        this.classList.remove("silver")
        this.classList.remove("grey")
        this.classList.add("black")
    }
    });
}
function Range(beginRange, endRange)    //This function will let us build ranges for arrays containing emoji cells 
{
    return Array.from(Array(endRange - beginRange + 1).keys()).map( x => beginRange + x)     // +1 because index starts at 0 and we'll miss one number without it. We give the beginning and the end of array 
}

function instantEmoji(event)
{
    if (event.keyCode == 32) 
    {
        cellsEmoji.forEach(element => 
            {                         //Foreach so we can go through all the numbers is the huge range we created 
                wrapperQuerySelector.children[element - 1].classList.remove("blue")           //Remove color classes 
                wrapperQuerySelector.children[element - 1].classList.remove("violet")
                wrapperQuerySelector.children[element - 1].classList.remove("silver")
                wrapperQuerySelector.children[element - 1].classList.remove("grey")
                wrapperQuerySelector.children[element - 1].classList.add("black")
            })
    }
}
//______________________________________________________________DOM selectors__________________________________
const wrapperQuerySelector = document.querySelector(".wrapper")
const squareQuerySelector = document.querySelector(".square")
const newSquareCreateDiv = document.createElement("div")
//_______________________________________________________________Event Listeners______________________________________
document.addEventListener("keydown", squareCreation)          //Will pop up squares ib the screen
document.addEventListener("keydown", squareDeletion)
document.addEventListener("keydown", createAll)
document.addEventListener("keydown", instantEmoji)
//_________________________________________________________________Variables________________________________________________
let randomization 
let lastNumber
let cellsEmoji = Range(6,10).concat(Range(19,20)).concat(Range(26,27)).concat(33).concat(43).concat(47).concat(59).concat(62).concat(74).concat(Range(76,90)).concat(91)
                .concat(Range(93,94)).concat(Range(97,100)).concat(103).concat(Range(105,106)).concat(Range(108,110)).concat(112).concat(Range(114,116)).concat(118).concat(Range(120,121))
                .concat(Range(124,126)).concat(Range(130,132)).concat(Range(135,136)).concat(150).concat(152).concat(155).concat(164).concat(167).concat(Range(171,174)).concat(179)
                .concat(183).concat(193).concat(Range(199,200)).concat(Range(206,207)).concat(Range(216,220))                                                                                           //  we want. Array.from always starts at 0 so we use .map to transform the initial array 