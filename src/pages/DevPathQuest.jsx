import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import questions from '../data/questions';

export default function DevPathQuest() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const username = searchParams.get('username');
  const pathId = searchParams.get('path');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const pathQuestions = questions[pathId] || [];

  useEffect(() => {
    document.title = `Quest - ${pathId} | Ary Budiarto`;
    if (!username || !pathId) navigate('/dev-path');
  }, [username, pathId, navigate]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);
    if (currentIndex + 1 < pathQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  const handleSubmitScore = async () => {
    await addDoc(collection(db, 'leaderboard'), {
      username,
      path: pathId,
      score,
      createdAt: serverTimestamp(),
    });
    navigate('/leaderboard');
  };

  if (!pathQuestions.length)
    return <div className="text-green-300 p-6">No questions available for this path.</div>;

  if (finished) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-green-300 bg-black text-center px-4">
        <h1 className="text-2xl font-pixel mb-4">🎉 Quest Completed!</h1>
        <p className="mb-4 text-sm">
          Well done, {username}! You scored {score} out of {pathQuestions.length}.
        </p>
        <button
          onClick={handleSubmitScore}
          className="px-4 py-2 border border-green-300 hover:bg-green-300 hover:text-black font-pixel text-sm"
        >
          Submit Score to Leaderboard
        </button>
      </div>
    );
  }

  const question = pathQuestions[currentIndex];

  return (
    <div className="min-h-screen bg-black text-green-300 px-4 py-10 font-pixel">
      <div className="max-w-xl mx-auto bg-green-900 p-6 border border-green-400">
        <h2 className="mb-4 text-lg">{`Q${currentIndex + 1}. ${question.question}`}</h2>
        <ul className="grid gap-3">
          {question.options.map((opt, idx) => (
            <li
              key={idx}
              className="bg-green-800 px-4 py-2 border border-green-500 hover:bg-green-600 cursor-pointer text-sm"
              onClick={() => handleAnswer(opt === question.answer)}
            >
              {opt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
