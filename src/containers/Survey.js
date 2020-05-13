import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeToOtherQuestion, confirmAnswer, evaluateTotalPercentage } from '../actions/actions'
import Survey from '../components/Survey'


export class SurveyContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Survey">
                <div className='questions-section'>
                    <Survey {...this.props} />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changeToOtherQuestion,
    confirmAnswer,
    evaluateTotalPercentage
}, dispatch)

function mapStateToProps(state) {
    return {
        surveyList: state.survey.surveyList,
        questionIndex: state.survey.questionIndex,
        list: state.survey.list,
        percentageSecured: state.survey.percentageSecured
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SurveyContainer)
