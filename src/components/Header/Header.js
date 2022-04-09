import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core"
import { getUser } from "../../storage/Storage";
import {Person} from "@material-ui/icons";
import { useState } from "react";
import classNames from "classnames";

// styles
import useStyles from "./styles";
import { Logout } from "../../store/LoginApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    var classes = useStyles();

    const user = getUser();
    const [profileMenu, setProfileMenu] = useState(null);

    const handleLogout = () => {
        Logout(dispatch, navigate)
        // console.log("handle logout")
    }
  return (
    <AppBar>
        <Toolbar>
            <IconButton
                aria-haspopup="true"
                onClick={e => setProfileMenu(e.currentTarget)}
                aria-controls="profile-menu"
            >
                <Person />
            </IconButton>
            <Typography >
                پنل کاربری
            </Typography>
            <Menu
                id="profile-menu"
               open={Boolean(profileMenu)} 
               anchorEl={profileMenu}
               onClose={()=> setProfileMenu(null)}
               className={classes.headerMenu}
               classes={{paper: classes.profileMenu}}
            >
                <div className={classes.profileMenuUser}>
                    <Typography>{user}</Typography>
                </div>
                <MenuItem className={classNames(
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