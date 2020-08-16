import React, { useContext } from 'react';
import { NoIcon, YesIcon } from '../../../../components/ui/icons/Icons';
import './YesNoControls.scss';
import { SurveyProgressContext } from '../../Surveys';
interface IProps {
    answerControl: Function
}
const YesNoControls: React.FC<IProps> = ({ answerControl }) => {
    const { isCompleted } = useContext(SurveyProgressContext);

    return (
        !isCompleted ? (
            <div className="yes-no-control__container" >
                <div className="yes-no-control__button-container">
                    <div className="yes-no-control__button--no" onClick={() => answerControl(-1)}>
                        <NoIcon />
                    </div >
                </div>
                <div className="yes-no-control__button-container">
                    <div className="yes-no-control__button--yes" onClick={() => answerControl(1)}>
                        <YesIcon />
                    </div>
                </div>
            </div >
        ) : null
    )
}

export default YesNoControls;