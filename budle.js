//simple answer script made in under 30 mins not complete but still works
//did not add more then one answer support because i dont need to prove anymore
alert("Successfully loaded answer!")
var root = document.querySelector("body > div");
var vue = root.__vue__;
backgroundColor :'red'
var fetched;
var currentQuestionID;
var questionsToCheck;
var currentlyChecking = 0;
var answerIndex = 0;
let amountOfQuestions;
let correctAnswer;
let AnsweredQuestion;
let tomm;
let info = 
{
roomHash:   vue.$store._vm._data.$$state.game.data.roomHash,
questionID: vue.$store._vm._data.$$state.game.questions.currentId};

var done = fetch('https://quizizz.com/api/main/game/'+ info.roomHash)
.then(response => response.json()
.then(data => fetched = data)
.then(() => console.log(fetched))
.then(()=> {setInterval(function(){if(fetched != {}){getCurrentAnswer()}},500)
;
})
    
    
);

// getting current question id
setInterval(()=>{
    amountOfQuestions = fetched.data.questions.length
    currentQuestionID = vue.$store._vm._data.$$state.game.questions.currentId
})

function getCurrentAnswer()
{

    if(currentQuestionID == fetched.data.questions[currentlyChecking]._id )
    {
        correctAnswer = fetched.data.questions[currentlyChecking].structure.answer;
        AnsweredQuestion = "yes";
        
        let dike = fetched.data.questions[currentlyChecking].structure.options[correctAnswer].text.replace( /(<([^>]+)>)/ig, '') + "";
        document.querySelector("#questionText > div > p").innerText = "" + dike;
        console.log("correct answer is" + " " + fetched.data.questions[currentlyChecking].structure.options[correctAnswer].text + "")
        currentlyChecking = 0;
        clearInterval(tommy);
    }
    else
    {
        currentlyChecking = 0;
        tommy = setInterval(getCurrentAnswer2(),500)
    }

    

}
function getCurrentAnswer2()
{
    currentlyChecking = currentlyChecking+1;
    if(currentlyChecking == fetched.data.questions.length)
    {
        currentlyChecking = 0;
    }
    if(currentQuestionID == fetched.data.questions[currentlyChecking]._id)

    {
        let dike = fetched.data.questions[currentlyChecking].structure.options[correctAnswer].text.replace( /(<([^>]+)>)/ig, '') + "";
        document.querySelector("#questionText > div > p").innerText = "" + dike;
        correctAnswer = fetched.data.questions[currentlyChecking].structure.answer;
        console.log("correct answer is" + " "+ fetched.data.questions[currentlyChecking].structure.options[correctAnswer].text + "")
        AnsweredQuestion = "yes";
        currentlyChecking = 0;
        clearInterval(tommy);

    }
    else
    {
        getCurrentAnswer2()
    }
}


// suppose to take answer and map it to question elements (didnt finish)
function mappingToQuiz()
{
    
    
    document.getElementsByClassName("option")[correctAnswer].style.backgroundColor =('#FF0000')


}

setInterval(mappingToQuiz(),500)