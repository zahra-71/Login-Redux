import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, TextField, Typography, Fade, CircularProgress } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

// logo
import logo from "./logo.svg";

// styles
import useStyles from "./styles";

// components
import { LoginApi } from "../../store/LoginApi";
import { selectIsloading, selectError } from "../../store/reducers/LoginReducer";
import { useUserDispatch } from "../../context/UserContext";

function LoginPage () {

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // global
  var userDispatch = useUserDispatch()

  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });
    
  const loading = useSelector(selectIsloading);
  const error = useSelector(selectError);
    
  const handleChange = (e) => {
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginApi( userDispatch, inputs, navigate, dispatch )
  }

  return (
    <Grid container className={classes.container}>
      {/* logo of login */}
      <div className={classes.logotypeContainer}>
        <img src={logo} className={classes.logotypeImage} alt=""/>
        <Typography className={classes.logotypeText}>پنل کاربری</Typography>
      </div>
      {/* end logo of login */}
      {/* form of login */}
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Typography variant="h3" className={classes.greeting}>
            خوش آمدید
          </Typography>
          <div className={classes.formDividerContainer}>
            <div className={classes.formDivider} />
          </div>
          <Fade in={error}>
            <Typography color="secondary" className={classes.errorMessage}>
              مشکلی در نام کاربری یا رمز عبور شما وجود دارد :(     
            </Typography>
          </Fade>
          <TextField 
            name="username"
            placeholder="نام کاربری"
            type="email"
            InputProps={{
              classes:{
                underline: classes.textFieldUnderline,
                input: classes.textFeild
              }
            }}
            margin="normal"
            onChange={handleChange}
            // error={ inputs.username.length? false : true }
            fullWidth
          />
          <TextField 
            name="password"
            placeholder=" رمز عبور"
            onChange={handleChange}
            InputProps={{
              classes:{
                underline: classes.textFieldUnderline,
                input: classes.textFeild
              }
            }}
            margin="normal"
            type="password"
            fullWidth
          />
          <div className={classes.formButtons}> 
            {loading? (
              <CircularProgress />
            ):(
              <Button
                disabled={
                  inputs.username.length === 0 || inputs.password.length === 0
                }
                onClick={handleSubmit}
                variant="contained"
                color="secondary"
                // className={classes.buttonRoot}
                size="large"
              >
                ورود
              </Button>
            )}
          </div>
        </div>
      </div>
      {/* end form of login */}
    </Grid>
  )
}

export default LoginPage;