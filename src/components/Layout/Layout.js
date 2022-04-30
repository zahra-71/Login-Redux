import classnames from 'classnames';

// Component
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

import useStyles from './styles'
import {useLayoutState} from '../../context/LayoutContext';
import {Outlet} from 'react-router-dom';

function Layout({children}) {

    var classes = useStyles();
    var layoutState = useLayoutState();
    // console.log("layout")

    return(
        <div className={classes.root}>
            <Header />
            <Sidebar />
            
            <div className={classnames(classes.content,{
                [classes.contentShift]: layoutState.isSidebarOpened,
            })}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;