import * as types from '../constants';

const initialState = {
    percentageSecured: 0,
    surveyList: [],
    questionIndex: 0,
    list: [
        {
            questionName: 'What is Lorem ipsum',
            answer: 'A quick and simplified answer is that Lorem Ipsum refers to text that the DTP (Desktop Publishing) industry use as replacement text when the real text is not available.',
            options: [
                {
                    id: 0,
                    percentage: 100,
                    selectedChoice: 'Yes'
                },
                {
                    id: 0,
                    percentage: 0,
                    selectedChoice: 'No'
                }
            ]
        },
        {
            questionName: 'Where did it come from',
            answer: 'In design magazine, Before and After Magazine, a journalist wrote in volume 4, number 2 the following:After telling everyone that Lorem ipsum, the nonsensical text that comes with PageMaker, only looks like Latin but actually says nothing, I heard from Richard McClintock, publication ',
            options: [
                {
                    id: 1,
                    percentage: 10,
                    selectedChoice: 'Whatever'
                },
                {
                    id: 1,
                    percentage: 40,
                    selectedChoice: 'May be'
                },
                {
                    id: 1,
                    percentage: 60,
                    selectedChoice: 'Hmm ok'
                },
                {
                    id: 1,
                    percentage: 100,
                    selectedChoice: 'Yeah'
                }

            ]
        },
        {
            questionName: 'Why do a lot of web pages contain Lorem ipsum',
            answer: 'Do a search for "Lorem ipsum" on the internet, is it a surprise that hundreds of thousands of results are returned. There are a few reasons for this, when you consider that most of the websites listed in the search results contain "lorem ipsum" for no specific purpose:',
            options: [
                {
                    id: 2,
                    percentage: 100,
                    selectedChoice: 'Yes'
                },
                {
                    id: 2,
                    percentage: 30,
                    selectedChoice: 'No'
                }

            ]
        },
        {
            questionName: 'Every day blind text',
            answer: 'There we go, the origins of Lorem ipsum trace back to ancient latin text from Cicero and have been already used for hundreds of years by book makers. To read "De Finibus et Malorum" by Cicero, and the translation in English (The Extremes of Good and Evil),',
            options: [
                {
                    id: 3,
                    percentage: 50,
                    selectedChoice: 'Whatever'
                },
                {
                    id: 3,
                    percentage: 70,
                    selectedChoice: 'May be'
                },
                {
                    id: 3,
                    percentage: 90,
                    selectedChoice: 'Yes'
                }
            ]
        }
    ]

}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_QUESTION:
            return {
                ...state,
                questionIndex: action.questionIndex
            }
            break;
        case types.CONFIRM_ANSWER:
            return {
                ...state,
                surveyList: action.surveyList,
                questionIndex: action.questionIndex
            }
            break;
        case types.FIND_SUM:
            return {
                ...state,
                percentageSecured: action.percentageSecured
            }
            break;
        default:
            return state
    }
}