import { useRef, useState } from "react";

export const useQuiz = (questions) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const inputRef = useRef(null);

  const handleSubmit = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = userAnswer;
    setAnswers(newAnswers);

    // 4️⃣-1. 다음 문제로 이동하면서 input에 포커스 (아래에 setTimeout 주석처리만 풀면 됨)
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setUserAnswer("");
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setUserAnswer("");
    setAnswers([]);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return {
    currentQuestion,
    userAnswer,
    setUserAnswer,
    answers,
    inputRef,
    handleSubmit,
    handleReset,
  };
};
