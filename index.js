const quizdata =[{
			"title": "Quiz 1",
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
					"hint": "some hint text - try 4 sides",
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
			"title": "Quiz 2",
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
			"title": "Quiz 3",
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
					"hint": "some hint text - try 4 sides",
					"answer": "colour",
					"wrong_answers": ["color", "vegetable"]
				}
			]
		},
    {
			"title": "Quiz 4",
			"state": "completed",
			"numberOfQuestionsAttempted": 6,
			"score": 5,
			"questions": ["","","","","",""]
    },
    {
			"title": "Quiz 5",
			"state": "completed",
			"numberOfQuestionsAttempted": 10,
			"score": 7,
			"questions": ["","","","","","","","","",""]
    },
    {
			"title": "Quiz 6",
			"state": "completed",
			"numberOfQuestionsAttempted": 5,
			"score": 5,
			"questions": ["","","","",""]
    }

	]
const completedQuizzes = quizdata.filter((quiz)=>{
  return quiz.state ==="completed"
});

const remainingQuizzes = quizdata.filter((quiz)=>{
  return quiz.state !=="completed"
});

const titlesAndState = quizdata.map((quiz) =>{
  return [quiz.title, quiz.state, quiz.score, quiz.questions.length]
})

const averageScore = completedQuizzes.reduce((acc, value) =>{
  if (value.questions.length !=0){
    return acc+(value.score/value.questions.length)
  } else {
    return null
  }
},0) / completedQuizzes.length *100;

console.log("All Data\n", quizdata);
console.log("\ncompleted quizzes\n", completedQuizzes);
console.log("\n",completedQuizzes.length, "completed quizzes");
console.log("\n",remainingQuizzes.length, "remaining quizzes");
console.log("\nSummary\n", titlesAndState);
console.log("\nAverage Score\n", averageScore,"%");
