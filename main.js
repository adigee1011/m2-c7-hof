'use strict'

console.log("main.js file loaded")

//when the add button is clicked
//we want to reach the value of the input box,
//and add it as a new li element to our ul#theList


//whenever an li element is clicked
//we want to remove the class "done" if the li element has that class
//otherwise we want to add the class 'done' if the li element does not that class

//get a reference to the button from the object from the dom
let button = document.getElementById("inputButton");
//console.log(button);

//add an event listner, that capture when the add button is clicked
//you can define function later as well by 
//passing the next line to varaible
button.addEventListener('click', function(){
    //this is what we want the code to do
    //when the even is captured (recognized)
    console.log("button clicked");
    
    let inputBox = document.getElementById("inputBox");
    //console.log(inputBox);
    let inputText = inputBox.value;
    //console.log(inputText);

    // empty out the inputBox's value
    inputBox.value = '';

    // create an li element <<<<<this does not add it to the dom
    let li = document.createElement('li');
    //console.log(li);
    
    // want to add the li element to ul element
    //get the ul element that i want to add this li to
    let ul = document.getElementById("theList");

    //add the li element to the ul element
    ul.appendChild(li);

  
    // want to set the text of the li element to the 
    // text captured in inputText
    li.innerText = inputText;
    //different way to do it 
    //let textNode = document.createTextNode(inputText)
    //li.appendChild(textNode);

    // add an event listener to the new li, so we can do
    // stuff when it is clicked
    li.addEventListener('click', function (){
        console.log('li is clicked');

        // if the done class is not already present,  we add the done class
        // else we remove the done class
        
        //console.log(li.className);

        if(li.className == ''){
            li.className = 'done';
        } else {
            li.className = '';
        }

    })



})
