import React from 'react';
import { useParams } from "react-router-dom";

const QuestionDetail = () => {
  const { id } = useParams();

  return <div>Question detail for {id}</div>
}

export default QuestionDetail;
