import React, { useEffect, useState } from 'react';
import { getSurveySuccess, fetchSurveys } from '../../store/survey/reducers/survey.reducers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { useSprings } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import Card from '../../components/ui/card/Card';
import SurveyProgress from './survey-progress/SurveyProgress';
import './Surveys.scss';
import YesNoControls from './survey-controls/yes-no/YesNoControls';

const to = (i: number) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = (i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: any, s: any) => `scale(${s})`;

export const SurveyProgressContext = React.createContext(null);
const Surveys: React.FC = () => {
    const dispatch = useDispatch();
    const questions = useSelector(
        (state: RootState) => {
            return state.survey.questions
        }
    )
    const loading = useSelector(
        (state: RootState) => {
            return state.survey.loading
        }
    )
    const [progressState, setProgressState] = useState({
        totalQuestions: questions.length,
        progressIndex: 1,
        isCompleted: false
    })
    const [selectedIndex, setSelectIndex] = useState(0);

    const [gone] = useState(() => new Set());

    const [props, set] = useSprings(questions.length, i => ({ ...to(i), from: from(i) }))

    const bind = useDrag(({ args: [index], down, movement: [mx], distance, direction: [xDir], velocity }) => {
        const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
        const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
        if (!down && trigger) {
            gone.add(index);
        } // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
        set((i: number) => {
            if (index !== i) return // We're only interested in changing spring-data for the current spring
            const isGone = gone.has(index)
            const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
            const rot = mx / 100 + (isGone ? dir * 10 * velocity : dir * 30) // How much the card tilts, flicking it harder makes it rotate faster
            const scale = down ? 1.1 : 1 // Active cards lift up a bit
            return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
        })
        if (!down && trigger) {
            setSelectIndex(index - 1);
            updateSurvey(selectedIndex);
        }
    })

    const updateSurvey = (index: number, down: boolean = false, trigger: boolean = true) => {
        if (!down && gone.size === questions.length) {
            gone.clear()
            setProgressState((prevState) => {
                return {
                    ...prevState,
                    isCompleted: true,
                }
            })
        } else if (!down && trigger) {
            // update the progress state when a card is swiped off the page
            setProgressState((prevState) => {
                return {
                    ...prevState,
                    progressIndex: (questions.length - (index - 1)),
                }
            })
        }
    }

    const onAnswerControl = (dir: number) => {
        set((i: number) => {
            if (i !== selectedIndex) return;
            gone.add(i);
            setSelectIndex((prevIndex) => prevIndex - 1);
            const x = 200 + window.innerWidth * dir;// When a card is gone it flys out left or right, otherwise goes back to zero
            const rot = -1 * 10 * 0.2;
            const scale = 1.1
            return { x, rot, scale, delay: undefined, config: { friction: 50, tension: 200 } }
        })
        updateSurvey(selectedIndex);
    }

    useEffect(
        () => {
            if (!loading && questions && questions.length === 0) {
                dispatch(fetchSurveys());
            }
        }, [loading, questions]);


    useEffect(
        () => {
            if (loading) {
                dispatch(getSurveySuccess());
            }
        }, [loading]
    );

    useEffect(
        () => {
            if (!loading && questions && questions.length > 0) {
                setProgressState((prevState) => {
                    return {
                        ...prevState,
                        totalQuestions: questions.length
                    }
                })
                setSelectIndex(questions.length - 1); // since the cards are piled up, the first card to handle is the last of the list
            }
        }, [loading, questions]
    );

    return (
        <SurveyProgressContext.Provider value={progressState}>
            <React.Fragment>
                <SurveyProgress />
                <div className="survey__container">
                    {
                        props.map(({ x, y, rot, scale }, i) => {
                            return <Card
                                key={`cardContainer${i}`}
                                i={i}
                                x={x}
                                y={y}
                                rot={rot}
                                scale={scale}
                                trans={trans}
                                data={questions}
                                bind={bind}
                            />
                        })
                    }
                </div>
                <YesNoControls answerControl={onAnswerControl} />
            </React.Fragment>

        </SurveyProgressContext.Provider>
    )
}

export default Surveys;