import React from 'react';
import { useParams } from "react-router-dom";

const QuestionDetail = () => {
  const { id } = useParams();

  return (
    <div className="container is-widescreen">
      <h1 className="title is-2">Question: {id} </h1>
      Options go here
    </div>)
}

export default QuestionDetail;
