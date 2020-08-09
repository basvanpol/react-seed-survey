import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.scss';

interface IProps {
    link: string;
    exact?: boolean;
}

const NavigationItem: React.FC<IProps> = ({link, exact, children}) => (
    <li className={classes.NavigationItem}>
        <NavLink
            to={link}
            exact={exact}
            activeClassName={classes.active}>{children}</NavLink>
    </li>
);

export default NavigationItem;