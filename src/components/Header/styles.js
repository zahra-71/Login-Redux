import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  appbar: {
    // width: `calc(100vw - ${drawerWidth}px)`,
    background: theme.palette.text.primary,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  headerMenuButtonSandwich: {
    marginRight: 9,
    [theme.breakpoints.down("sm")]: {
      marginRight: 0
    },
    padding: theme.spacing(0.5),
  },
  headerMenuButtonCollapse: {
    marginLeft: theme.spacing(2),
  },
  headerIcon: {
    fontSize: 28,
    color: "rgba(255, 255, 255, 0.35)",
    "&:hover": {
      color: theme.palette.secondary.main
    }
  },
  headerIconCollapse: {
    color: "white",
  },
  headerText: {
    alignItems: "left",
    "&:hover": {
      color: theme.palette.secondary.main
    }
  },
  headerMenu: {
    marginTop: theme.spacing(7),
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
  },
  profileMenu: {
    minWidth: 265,
  },
  profileMenuUser: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  headerMenuItem: {
    "&:hover, &:focus": {
      backgroundColor: theme.palette.background.light,
      color: theme.palette.secondary.main,
    },
  },
  profileMenuItem: {
    color: theme.palette.text.hint,
  },
  profileMenuLink: {
    fontSize: 16,
    // textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.palette.background.light,
      color: theme.palette.secondary.main,
    },
  },
}))