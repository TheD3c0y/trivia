let correct = 0;
let total = 11;
let percent = (correct/total) * 10;
let current = []
let counter = 1;
let holder = null;
let timer =  null;
const myQuestions = [
    {
        question: "What is Jocelyn's favorite ice cream?",

        answers: {
            a: "Lemon Mint Sorbet",
            b: "Toasted Rice",
            c: "Shrimp and Noodles",
            d: "Vanilla"

        },

        correctAnswer: "b"
    },

    {
        question: "What does Jocelyn keep for pets?",

        answers: {
            a: "Dogs",
            b: "Cats",
            c: "Baby Flies",
            d: "Turtles"

        },

        correctAnswer: "c"
    },

    {
        question: "Jocelyn's B-day is on...",

        answers: {
            a: "July 22",
            b: "November 13",
            c: "December 2",
            d: "March 18"

        },

        correctAnswer: "c"
    },

    {
        question: "Where must the corners be?",

        answers: {
            a: "In the corners",
            b: "Outside in the sun",
            c: "In the attic",
            d: "Anywhere"

        },

        correctAnswer: "a"
    },

    {
        question: "Where are Joecelyn's favorite fries from?",

        answers: {
            a: "Burger King",
            b: "Woosters",
            c: "Whataburger",
            d: "Cheescake Factory"

        },

        correctAnswer: "b"
    },

    {
        question: "Which is a pet peeve of Jocelyn's?",

        answers: {
            a: `Saying, "Same thing." When there isn't a reasonable comparison.`,
            b: "Dipping Fries into Ketchup as opposed to drizzling Ketchup on top.",
            c: "Fast Drivers in the left lane.",
            d: "Cuddles"

        },

        correctAnswer: "a"
    },

    {
        question: "Which school does Jocelyn go through for her coding bootcamp?",

        answers: {
            a: "A&M",
            b: "Rice University",
            c: "UT",
            d: "LoneStar College"

        },

        correctAnswer: "c"
    },
        {
        question: "Where is Jocelyn from?",

        answers: {
            a: "Mexico",
            b: "Russia",
            c: "Texas",
            d: "Canada"

        },

        correctAnswer: "d"
    },

    {
        question: "Which would Jocelyn rather do?",

        answers: {
            a: "Listen to and find new music.",
            b: "Edit papers.",
            c: "Play a video game.",
            d: "Walk 500 miles."

        },

        correctAnswer: "a"
    },

    {
        question: "What does Jocelyn do for work?",

        answers: {
            a: "Stripper",
            b: "Professional Stuntperson",
            c: "Technical Writer",
            d: "Psychologist"

        },

        correctAnswer: "c"
    },

    {
        question: "What is Jocelyn's go to alcoholic beverage?",

        answers: {
            a: "Vodka Cranberry",
            b: "Whiskey Cola",
            c: "Coors Light",
            d: "Vodka Gimlet"

        },

        correctAnswer: "d"
    },

]
let list = myQuestions;


function randoQuest()
{
    let x = Math.floor(Math.random() * Math.floor(list.length));
    
    current = list[x];
    list.splice(x, 1);

    return current;

}

function displayQuest(x)
{

    
    x = current;
    let currentA = x.answers;
    let tracker = "";
    
    function listAnswer()
    {   
        
    
        
        if(!tracker.includes("0")){
            tracker = tracker + "0";
            return currentA.a;
        }else
        if(!tracker.includes("1")){
            tracker = tracker + "1";
            return currentA.b;
        }else 
        if(!tracker.includes("2")){
            tracker = tracker + "2";
            return currentA.c;
        }else
        if(!tracker.includes("3")){
            tracker = tracker + "3";
            return currentA.d;
        }else listAnswer();
        
        
    }
    
    $("#question").html(`Question ${counter}: <br> ${x.question}`);
    $("#answer1").html(`${listAnswer()}`);
    $("#answer2").html(`${listAnswer()}`);
    $("#answer3").html(`${listAnswer()}`);
    $("#answer4").html(`${listAnswer()}`);
    timer = setInterval(() => next(), 5000);
    
}

$(document).ready(function(){
    $("#correct").html(`Correctly Answered:  ${correct} of ${total}`);
    $("#percentage").html(`Percentage: ${percent}%`);
    randoQuest();
    displayQuest();
    


})
function next()
{
    alert("You took too long");
    counter++;
    $("#correct").html(`Correctly Answered:  ${correct} of ${total}`);
    $("#percentage").html(`Percentage: ${percent}%`);
    clearInterval(timer);
    randoQuest();
    displayQuest();
    
}


$(".form-check").click(function(event){
    event = event.target.value;
    holder = event;
   })  

$("#submit").click(function(){
    
    if(holder == current.correctAnswer && counter < 11){
        
        correct++
        counter++
        alert("Correct!");


    }else
    if(holder != current.correctAnswer && counter < 11){
        
        counter++
        alert("OMG YOUR SUCH A SCRUB!");

        
    }else{
        alert(`Your score is: ${percent}`);
    }
    holder = null;
    
    percent = (correct/total) * 10;
    $("#correct").html(`Correctly Answered:  ${correct} of ${total}`);
    $("#percentage").html(`Percentage: ${percent}%`);
    randoQuest();
    displayQuest();
})

