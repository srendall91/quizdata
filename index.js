// Web App Development module
// assignment 1
// Data design for Quiz App
// Stuart Rendall 25/03/2019

// note that, there is no functionality to give a results summary at the end of quiz
// e.g. identifying correct/incorrect answers, returning to icorrect questions etc.
// and anticipated use is to progress linearly through each chosen quiz, with only
// the option to pause and return to it later, or restart once finished.
// the data model is adequate for this purpose.

// data required for app.props
// page: 1 of 4: selectQuiz, question, hint, result
// quizid: current quiz (needed for question, hint and result pages)
// currentQuestion: current question ( needed for question and hint pages)
// hintUsed: flag to allow only single use of hint page (question page only)
const appState={
	page: "quiz",
	quizid: "Quiz 2",
	currentQuestion: 1,
	hintUsed: false
}

// complete data set for all quizzes
// array of quizzes containing array of questions
// additional user data stored regarding progress through quizzes:
// state: indicates whether quiz has been not been started, started or completed
// numberOfQuestionsAttempted: facilitates returning to quiz later
// score: number of correct answers so far
// (if it were expected that there may be more than one correct answer for
// a question, this would require that 'answer' be an array of correct answers
// for all questions)
const quizdata =[{
			"id": "Quiz 1",
			"title" : "Shapes",
			"state": "completed",
			"numberOfQuestionsAttempted": 3,
			"score": 2,
			"questions": [{
					"id": 1,
					"question text": "how many sides to a triangle?",
					"image": "triangle.png",
					"hint": "some hint text",
					"answer": "3",
					"wrong_answers": ["2", "4", "5"]
				},
				{
					"id": 2,
					"question text": "how many sides to a square?",
					"image": "square.png",
					"hint": "some hint text",
					"answer": "4",
					"wrong_answers": ["3", "2", "5"]
				},
				{
					"id": 3,
					"question text": "how many sides to a pentagon?",
					"image": "pentagon.png",
					"hint": "some hint text",
					"answer": "5",
					"wrong_answers": ["2", "4", "6"]
				}
			]
		},
		{
			"id": "Quiz 2",
			"title" : "Arithmetic",
			"state": "started",
			"numberOfQuestionsAttempted": 1,
			"score": 1,
			"questions": [{
					"id": 1,
					"question text": "what is 1+1?",
					"image": "add.png",
					"hint": "some hint text",
					"answer": "2",
					"wrong_answers": ["3", "4", "6"]
				},
				{
					"id": 2,
					"question text": "what is 72 divided by 8?",
					"image": "divide.png",
					"hint": "some hint text",
					"answer": "9",
					"wrong_answers": ["7", "8", "10"]
				},
				{
					"id": 3,
					"question text": "what is 3 squared?",
					"image": "squared.png",
					"hint": "some hint text",
					"answer": "9",
					"wrong_answers": ["6", "8", "12", "33"]
				}
			]
		},
		{
			"id": "Quiz 3",
			"title" : "Randoms",
			"state": "unattempted",
			"numberOfQuestionsAttempted": 0,
			"score": 0,
			"questions": [{
					"id": 1,
					"question text": "how do you spell authorised?",
					"image": "spell.png",
					"hint": "some hint text",
					"answer": "authorised",
					"wrong_answers": ["authorized"]
				},
				{
					"id": 2,
					"question text": "orange is a ?",
					"image": "orange.png",
					"hint": "some hint text",
					"answer": "colour",
					"wrong_answers": ["color", "vegetable"]
				}
			]
		},

    {
			"id": "Quiz 4",
			"title" : "Another Quiz title",
			"state": "completed",
			"numberOfQuestionsAttempted": 6,
			"score": 5,
			"questions": ["","","","","",""]
    },
    {
			"id": "Quiz 5",
			"title" : "Another Quiz title",
			"state": "completed",
			"numberOfQuestionsAttempted": 10,
			"score": 7,
			"questions": ["","","","","","","","","",""]
    },
    {
			"id": "Quiz 6",
			"title" : "Another Quiz title",
			"state": "completed",
			"numberOfQuestionsAttempted": 5,
			"score": 5,
			"questions": ["","","","",""]
    }

	]

const getQuiz = (title) => {
	return quizdata.filter((quiz)=>{
  	return quiz.title === title
	}, title);
};

const completedQuizzes = quizdata.filter((quiz)=>{
  return quiz.state === "completed"
});

const remainingQuizzes = quizdata.filter((quiz)=>{
  return quiz.state !== "completed"
});

const titlesAndState = quizdata.map((quiz) =>{
  return [quiz.title, quiz.state, quiz.score, quiz.questions.length]
})

const titlesAndStateObj = quizdata.map((quiz) =>{
	return {
		title:quiz.title,
		state:quiz.state,
		correct:quiz.score,
		num_questions:quiz.questions.length
	}
})

const averageScore = completedQuizzes.reduce((acc, value) =>{
  if (value.questions.length !=0){
    return acc+(value.score/value.questions.length)
  } else {
    return null
  }
},0) / completedQuizzes.length *100;

console.log("All Data\n", quizdata);
console.log("\nQuiz 1 Data\n", getQuiz("Quiz 1"));
console.log("\nQuiz 2 questions\n",getQuiz("Quiz 2")[0].questions);
console.log("\ncompleted quizzes\n", completedQuizzes);
console.log("\n",completedQuizzes.length, "completed quizzes");
console.log("\n",remainingQuizzes.length, "remaining quizzes");
console.log("\nSummary\n", titlesAndState);
console.log("\nSummary as objects\n", titlesAndStateObj);
console.log("\nAverage Score\n", averageScore,"%");
