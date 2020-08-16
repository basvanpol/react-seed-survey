import React, { useState } from 'react';
import Toolbar from '../../components/navigation/toolbar/Toolbar';

export const Layout: React.FC = ({ children }) => {

    const [ showSideDrawer, setShowSideDrawer ] = useState(false);

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

    return (
        <React.Fragment>
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
            <main className="page__content-container">
                {children}
            </main>
        </React.Fragment>
    )

}

export default Layout;