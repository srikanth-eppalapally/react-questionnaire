import React from 'react'

const Survey = (props) => {
    const { list, confirmAnswer, questionIndex, changeToOtherQuestion, percentageSecured, evaluateTotalPercentage } = props
    function renderClassName(questionIndex) {
        let className = '';
        if (questionIndex == 0) {
            className = 'first';
        } else if (questionIndex === 1) {
            className = 'second';
        } else if (questionIndex === 2) {
            className = 'third';
        } else if (questionIndex === 3) {
            className = 'fourth';
        }
        return className;
    }

    return (
        <div className='survey'>
            <h1>Questionnaire Survey:-</h1>
            <div className='survey-container'>
                <div className='survey-content'>
                    <div className='survey-carousel-controls'>
                        <h3 className={questionIndex === 0 ? 'arrow arrow-left disable' : 'arrow arrow-left'} onClick={() => changeToOtherQuestion('prv')}>&#60;</h3>
                        <span> Step {questionIndex + 1} of 4</span>
                        <h3 className={questionIndex === 3 ? 'arrow arrow-right  disable' : 'arrow arrow-right'} onClick={() => changeToOtherQuestion('nxt')}>&#62;</h3></div>
                    <div className='survey-carousel-container'>
                        <div className={'survey-carousel ' + renderClassName(questionIndex)}>
                            {
                                list.map((question, index) => (
                                    <div className='slide' key={index}>
                                        <h3>{question.questionName} ?</h3>
                                        <p className='text'>{question.answer}</p>
                                        {question.options.map((answer, i) => (
                                            <button className='btn-choice' onClick={() => { confirmAnswer(answer); evaluateTotalPercentage() }} key={i}>
                                                {answer.selectedChoice}</button>
                                        ))}
                                    </div>
                                ))
                            }

                        </div></div>
                    <div className='survey-result'>
                        {questionIndex === 3 ? <p> Total: {percentageSecured.toFixed(2)} % </p> : null}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Survey
