import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/layout/Layout';
import Home from './containers/home/Home';

const App: React.FC = () => {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Layout>
        </div>
    );
}


export default App;