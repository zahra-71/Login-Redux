import { makeStyles } from "@material-ui/core";


export default makeStyles(theme => ({
    appBar: {},
    toolBar: {},
    headerMenu: {
        marginTop: theme.spacing(7),
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
          // color: "white",
        },
      },
      profileMenuItem: {
        color: theme.palette.text.hint,
      },
      profileMenuIcon: {
        marginRight: theme.spacing(2),
        color: theme.palette.text.hint,
        "&:hover": {
          color: theme.palette.primary.main,
        }
      },
      profileMenuLink: {
        fontSize: 16,
        // textDecoration: "none",
        "&:hover": {
          cursor: "pointer",
          color: theme.palette.primary.main,
        },
      },


}))