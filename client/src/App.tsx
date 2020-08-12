import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/layout/Layout';
import Home from './containers/home/Home';
import Surveys from './containers/surveys/Surveys';

const App: React.FC = () => {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/surveys" exact component={Surveys} />
                </Switch>
            </Layout>
        </div>
    );
}


export default App;