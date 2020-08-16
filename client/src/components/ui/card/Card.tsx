import React from 'react';
import { animated, interpolate } from "react-spring";
import classes from './Card.scss';

interface IProps {
    i: number;
    x: any;
    y: any;
    rot: any;
    scale: any;
    trans: any;
    bind: any;
    data: any;
}

const Card: React.FC<IProps> = ({ i, x, y, rot, scale, trans, bind, data }) => {
    const { question } = data[i];
    return (
        <animated.div
            key={`animatedCard${i}`}
            style={{
                transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)
            }}
            className={classes.CardHolder}
        >
            <animated.div
                key={`animatedCardContent${i}`}
                {...bind(i)}
                style={{
                    transform: interpolate([rot, scale], trans)
                }}
            >
                <div className={classes.Card}>
                    <h2>{question.text}</h2>
                    {/* <h2>{age}</h2>
                    <h5>{distance}</h5>
                    <h5>{bio}</h5> */}
                </div>
            </animated.div>
        </animated.div>
    );
}

export default Card;
