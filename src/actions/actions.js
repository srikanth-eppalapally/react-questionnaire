import * as types from '../constants';

export const evaluateTotalPercentage = () => {
    return (dispatch, getState) => {
        let surveyList = getState().survey.surveyList;
        var total = 0;
        for (var i = 0; i < surveyList.length; i++) {
            total += parseInt(surveyList[i].percentage);

        }
        var avg = total / surveyList.length;
        dispatch({
            type: types.FIND_SUM,
            percentageSecured: avg
        })
    }
}

export const changeToOtherQuestion = (direction) => {
    return (dispatch, getState) => {
        let questionIndex = getState().survey.questionIndex;
        if (direction === 'nxt') {
            questionIndex++;
        } else if (direction === 'prv') {
            questionIndex--;
        }
        dispatch({
            type: types.CHANGE_QUESTION,
            questionIndex: questionIndex
        })
    }
}

export const confirmAnswer = (val) => {
    return (dispatch, getState) => {
        let surveyList = getState().survey.surveyList;
        let hasDuplicate = false;
        for (let i = 0; i < surveyList.length; i++) {
            if (surveyList[i].id === val.id) {
                surveyList[i] = val;
                hasDuplicate = true;
            }
        }

        if (!hasDuplicate) {
            surveyList.push(val);
        }

        let questionIndex = val.id + 1;
        if (val.id === 3) {
            questionIndex = val.id;
        }


        dispatch({
            type: types.CONFIRM_ANSWER,
            surveyList: surveyList,
            questionIndex: questionIndex
        })
    }
}




