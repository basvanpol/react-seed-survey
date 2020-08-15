import React, { useState } from 'react';
import classes from './Layout.scss';
import Toolbar from '../../components/navigation/toolbar/Toolbar';

export const Layout: React.FC = ({ children }) => {

    const [ showSideDrawer, setShowSideDrawer ] = useState(false);

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

    return (
        <React.Fragment>
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
            <main className={classes.Content}>
                {children}
            </main>
        </React.Fragment>
    )

}

export default Layout;