import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@material-ui/core";
import { ArrowForward, Home, Image } from "@material-ui/icons";
import { useLocation, useNavigate } from "react-router";
import classnames from "classnames";
import { useTheme } from "@material-ui/styles";
import {useEffect, useState} from "react";

// styles
import useStyles from "./styles";

// components
import { toggleSidebar, useLayoutDispatch, useLayoutState } from "../../context/LayoutContext";

function Sidebar() {

  var classes = useStyles();
  var theme = useTheme();
  const navigation = useNavigate();
  const location = useLocation();

  // global
  var layoutDispatch = useLayoutDispatch();
  var { isSidebarOpened } = useLayoutState();

  // local
  const [permanent, setPermanent] = useState(true);

  const menuItems= [
    {
      id: 0,
      label: "داشبورد",
      link: "/app/dashboard",
      icon: <Home />
    },
    {
      id: 1,
      label: "اضافه کردن عکس",
      link: "/app/addImages",
      icon: <Image />
    },
  ]

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup(){
      window.removeEventListener("resize", handleWindowWidthChange);
    }
  })

  return(
    <Drawer
      variant={permanent ? "permanent" : "temporary"}
      anchor="right"
      className={classnames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classnames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
    <div className={classes.toolbar} />
    <div className={classes.mobileBackButton}>
      <IconButton onClick={() => toggleSidebar(layoutDispatch)} className={classes.mobileBackButtonIcon}>
        <ArrowForward />
      </IconButton>
    </div>
    <div>
      <List>
        {menuItems.map(item => (
          <ListItem key={item.id} 
            button
            onClick={() => navigation(item.link)}
            classes = {{root: classnames(
              location.pathname === item.link ? classes.ListItemActive : null
            )}}
            disableRipple
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} className={classes.ListItemText} />
          </ListItem>  
        ))}
      </List>
    </div>
    </Drawer>
  )

  // ##############################################

  // change style of sidebar with width of window
  function handleWindowWidthChange() {

    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && permanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !permanent) {
      setPermanent(true)
    }
  }
}

export default Sidebar;