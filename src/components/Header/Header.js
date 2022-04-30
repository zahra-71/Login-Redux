import { AppBar, IconButton, MenuItem, Menu, Toolbar, Typography } from "@material-ui/core"
import { getUser } from "../../storage/Storage";
import {Person,
    Menu as MenuIcon,
    ArrowForward} from "@material-ui/icons";
import { useState } from "react";
import classnames from "classnames";

// styles
import useStyles from "./styles";
import { Logout } from "../../store/LoginApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useLayoutDispatch, useLayoutState } from "../../context/LayoutContext";
import {toggleSidebar} from "../../context/LayoutContext"


function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    var classes = useStyles();

    // global
    var layoutDispatch = useLayoutDispatch();
    var layoutState = useLayoutState();

    const user = getUser();
    const [profileMenu, setProfileMenu] = useState(null);

    const handleLogout = () => {
        Logout(dispatch, navigate)
        // console.log("handle logout")
    }
  return (
    <AppBar className={classes.appbar}
        // position="fixed" 
    >
        <Toolbar className={classes.toolbar}>
            <IconButton
                onClick={() => toggleSidebar(layoutDispatch)}
                className={classnames(
                    classes.headerMenuButtonSandwich,
                    classes.headerMenuButtonCollapse,
                    )}
            >
                {layoutState.isSidebarOpened ? (
                    <ArrowForward 
                        classes={{
                            root: classnames(
                            classes.headerIcon,
                            classes.headerIconCollapse,
                        ),
                    }}
                    />
                ):(
                    <MenuIcon 
                        classes={{
                            root: classnames(
                            classes.headerIcon,
                            classes.headerIconCollapse,
                        ),
                    }}
                    />
                )}
            </IconButton>
            <IconButton
                aria-haspopup="true"
                onClick={e => setProfileMenu(e.currentTarget)}
                aria-controls="profile-menu"
            >
                <Person classes={{
                            root: classnames(
                            classes.headerIcon,
                            classes.headerIconCollapse,
                        ),
                    }}/>
            </IconButton>
            <Typography className={classes.headerText}>
                پنل کاربری
            </Typography>
            <Menu
                id="profile-menu"
               open={Boolean(profileMenu)} 
               anchorEl={profileMenu}
               onClose={()=> setProfileMenu(null)}
            //    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
               transformOrigin={{ vertical: "top", horizontal: "center" }}
               className={classes.headerMenu}
               classes={{paper: classes.profileMenu}}
            >
                <div className={classes.profileMenuUser}>
                    <Typography>{user}</Typography>
                </div>
                <MenuItem className={classnames(
                    classes.profileMenuItem,
                    classes.headerMenuItem,
                )}>
                    <Person />ویرایش پروفایل
                </MenuItem>
                <div className={classes.profileMenuUser}>
                    <Typography  className={classes.profileMenuLink}
                        onClick={handleLogout}
                    >
                        خروج
                    </Typography>
                </div>
            </Menu>
            
        </Toolbar>
    </AppBar>
  )
}

export default Header