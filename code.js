
let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// The rollDie function Generates the random numbers between min = 1 and max = 6
// where each number is equally likely to occur. The function returns
// the outcome of the die roll.
function rollDie(min, max){
    let outcome = Math.floor(Math.random()*max + min);
    return outcome;
}

// Accessing the button element with the roll id
// and assining it the roll variable
let roll= document.getElementById("roll");

// Accessing the div element with the result id and
// assigningit the result variable.
let result=document.getElementById("result");

let graph = document.getElementById("graph")
let secondButtonClicked = false;

// Adding the event listener with the click argument to the roll
// button with the callback funcdtion, pairRoll
roll.addEventListener("click", pairRoll)

// The pairRoll function generates the sum of the outcomes on 
// a pair of dice rolled once.
function pairRoll(){
    if (secondButtonClicked) {
        results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        secondButtonClicked = false;
    }
    // sum of the two outcomes on the pair of dice
    let sum = rollDie(1,6)+ rollDie(1,6);
    
    // Adding the message for the outcome of the pair roll to
    // the result element.
    result.innerText = `You rolled a ${sum}!`;
    
    // Resetting the graph element
    graph.innerText="";

    // Making an increment of each pair roll to the results array
    results[sum] += 1;

    // Rendering the results array in the "graph" div element
    renderGraph() 
}

// The renderGraph function creates the eleven div elements,
// which are appended to the graph element (a flex container).
function renderGraph(){
    graph.style.display ="flex"
    graph.style.flexBasis="800px"
    graph.style.flexDirecton = "row"

    let max = results[0];
    for (let i=0; i < results.length;i++){
        if(max < results[i]){
            max = results[i]
        }
    }

    for (let index=2; index < results.length; index +=1){
        let div_container = document.createElement("div");
        div_container.classList.add("container")
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        
        div1.style.margin= "8px"
        div1.style.background= "blue";
        div1.style.height = `${(results[index]/max)*100}px`
        div1.style.width ="70";
        
        div2.innerText = `You rolled a ${index}: \n ${results[index]} times`;
        div2.marginTop = "5px"
        div_container.append(div1,div2);
        graph.append(div_container)
    } 

}

// Accessing the pairRoll_1000 div elment and assigning it
// to the pairRoll_1000 variable
let pairRoll_1000 = document.getElementById("pairRoll_1000")

// Adding the event listener to the pairRoll_1000 button
// with the callback function, simulateRoll_1000.
pairRoll_1000.addEventListener("click", simulateRoll_1000)

// The simulateRoll_1000 function simulates the roll of the pair of dice
// for 1000 times by invoking the pairRoll function 1000 times
// So, all the outcomes are recorded in the graph element.
function simulateRoll_1000(){
    // Resetting the results array for the graph element
    results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // Updating the results array with the 1000 rolls of the pair of dice
    for(let index=0; index < 1000; index +=1){
        pairRoll()
        result.innerText = "You rolled 1000 times";
    }
    return secondButtonClicked = true;
}


