import React from 'react';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
    const history = useHistory();
    const handleClick = () => history.push('/surveys');

    return (
        <React.Fragment>
            <h1>What kind of cyclist are you?</h1>
            <button type="button" className="cta-button" onClick={handleClick}>
                Go take the survey
            </button>
        </React.Fragment>
    )
};

export default Home;