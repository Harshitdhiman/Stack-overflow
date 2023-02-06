import React from 'react'
import Questions from './Questions'
const QuestionList = ({questionsList}) => {
  return (
    <>
      {
        questionsList.map((question,idx) => (
            <Questions question = {question} key={idx}/>
        ))
      }
    </>
  )
}

export default QuestionList
