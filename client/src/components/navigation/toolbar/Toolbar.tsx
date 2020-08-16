import React from 'react';
import classes from './Toolbar.scss';
import NavigationItems from '../navigation-items/NavigationItems';
import './Toolbar.scss';

const Toolbar: React.FC<{drawerToggleClicked: Function}> = ( {drawerToggleClicked} ) => (
    <header className="toolbar__container">
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;