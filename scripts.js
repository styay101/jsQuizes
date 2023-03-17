// first get the form and set you vairable
const frmQuiz = document.querySelector(".quiz-form");
const question_clr = document.querySelector(".question");
const showResults = document.querySelector(".show_results");
//to access all questions use querySelectorAll(".questions")
const all_questions = document.querySelectorAll(".question");
// set the correct answers in a list and compare them to the user's answer
const correctAnswers = ["A", "B", "E", "C", "D", "A", "B"];

// add the listener to the form when hit submit
frmQuiz.addEventListener("submit", (event) => {
    event.preventDefault();
    // to capture user's ansowers, create a list to capture the answers
    const userAnswers = [
        frmQuiz.q1.value, 
        frmQuiz.q2.value, 
        frmQuiz.q3.value,
        frmQuiz.q4.value, 
        frmQuiz.q5.value, 
        frmQuiz.q6.value, 
        frmQuiz.q7.value,   
        frmQuiz.q8.value           
    ];

    //console.log(userAnswers);
    //console.log(correctAnswers);

    // set score to zero and add the correct answer to it
    let score = 0;

    // loop through the user's answers and compare them to the correct ones
    // using forEach() for each answer and its index
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score +=1; 
            // set question colors, green if the answer is correct and red if the answer is wrong
            all_questions[index].classList.add("correct");  
            //console.log(`correct answer for Question#${index +1} is ${answer}`);         
        } else {
            all_questions[index].classList.add("wrong");
        }        
    });

    let scorePercent = (score / all_questions.length) * 100;
    console.log(scorePercent);
    //console.log(score);
    //let yourScorePercent = `${score} / ${all_questions.length} * 100`;
    // show results box, the score and the message for the user and scrol to the top
    scrollTo(0,0);
    showResults.classList.remove("hide");
    // to show the score
    showResults.querySelector("p").textContent = `your score: ${scorePercent}`;    
    //showResults.querySelector("p").textContent = `your score: ${scorePercent}`;    
});