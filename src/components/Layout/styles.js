import {makeStyles} from "@material-ui/core";

export default makeStyles(theme => ({
    root: {
        display: "flex",
        maxWidth: "90vw",
        overflowX: "hidden", 
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        width: `calc(100vw - 240px)`,
        minHeight: "90vh",
    },
      contentShift: {
        width: `calc(100vw - ${240 + theme.spacing(6)}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    link: {
      '&:not(:first-child)': {
        paddingRight: 15
      }
    }
}))