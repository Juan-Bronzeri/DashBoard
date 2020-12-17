import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from '../views/DashBoard';
import List from '../views/List';
import Layout from '../components/Layout';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/dashboard" exact component={DashBoard} />
            <Route path="/list/:type" exact component={List} />
        </Switch>
    </Layout>
);

export default AppRoutes;