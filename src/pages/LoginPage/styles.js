import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    container: {
        direction: "rtl",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
    },
    logotypeContainer: {
        backgroundColor:theme.palette.text.primary,
        width: "60%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
          width: "50%",
        },
        [theme.breakpoints.down("md")]: {
            display: "none",
          },
    },
    logotypeImage: {
        width: 165,
        marginBottom: theme.spacing(4),
    },
    logotypeText: {
      color: "white",
      fontWeight: 500,
      fontSize: 80,
      [theme.breakpoints.down("md")]: {
        fontSize: 48,
      },
    },
    formContainer: {
        width: "40%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
          width: "50%",
        },
    },
    form: {
      width: 320
    },
    greeting: {
      fontWeight: 200,
      textAlign: "center",
      marginTop: theme.spacing(4),
    },
    formDividerContainer: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      display: "flex",
      alignItems: "center",
    },
    formDivider: {
      flexGrow: 1,
      height: 1,
      backgroundColor: theme.palette.text.hint + "40",
    },
    textFieldUnderline: {
      "&:before": {
        borderBottomColor: theme.palette.text.primary,
      },
      "&:after": {
        borderBottomColor: theme.palette.secondary.main,
      },
      "&:hover:before": {
        borderBottomColor: `${theme.palette.secondary.light} !important`,
      },
    },
    textField: {
      borderBottomColor: theme.palette.background.light,
    },
    formButtons: {
      width: "100%",
      marginTop: theme.spacing(4),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    // buttonRoot: {
    //   "&:active , &:focus":{
    //     backgroundColor: theme.palette.secondary.main
    //   }
     
    // }


}))
