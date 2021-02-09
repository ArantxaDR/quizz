import React, { useState} from 'react';
import { fetchQuizQuestions } from './API';
import { QuestionState, Difficulty} from './API';
import QuestionCard from "./components/QuestionCArd"

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS= 10;

const App =() =>{

  const [loading, setLoading] = useState(false);

  const [questions, setQuestions]= useState<QuestionState[]>([]);

  const [number, setNumber]= useState(0);

  const [userAnswers, setUserAnswers]= useState<AnswerObject[]>([]);

  const [score, setScore] = useState(0);

  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY ));

  const startTrivia = async () =>{}

  const checkAnswer= (e: React.MouseEvent<HTMLButtonElement>) =>{}

  const nextQuestion = () =>{}
  return (
    <div className="App">
    <h1>Book quiz</h1>
    <button className="start" onClick={startTrivia}>
      Start
    </button>
    <p className="score">Socre:</p>
    <p className="loading">Loading questions...</p>
    {/* <QuestionCard 
    questionNumber={number + 1}
    totalQuestions={TOTAL_QUESTIONS}
    question={questions[number].question}
    answers={questions[number].answers}
    userAnswer={userAnswers ? userAnswers[number] : undefined }
    callback={checkAnswer}
    /> */}
    <button className="next" onClick={nextQuestion}>
      Next question
    </button>
    </div>
  );
}

export default App;
