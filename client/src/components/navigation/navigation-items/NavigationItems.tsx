import React from 'react';

import classes from './NavigationItems.scss';
import NavigationItem from './navigation-item/navigationItem';


const NavigationItems: React.FC = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
);

export default NavigationItems;