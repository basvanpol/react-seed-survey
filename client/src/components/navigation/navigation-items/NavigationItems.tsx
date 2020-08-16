import React from 'react';

import classes from './NavigationItems.scss';
import NavigationItem from './navigation-item/navigationItem';


const NavigationItems: React.FC = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/surveys">Cycling Survey</NavigationItem>
    </ul>
);

export default NavigationItems;