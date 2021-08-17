import React, { useState } from "react";
import { Link, useNavigation } from "react-navi";
import { onLogin } from "./auth.api";
import { AuthForm } from "./Auth.components";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Button, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const navigation = useNavigation();
  const [{ email, password }, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    const { error, token } = await onLogin({
      email,
      password,
    });

    if (error) {
      setError(error);
    } else {
      navigation.setContext({ token });
      navigation.navigate("/");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="email"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(event) =>
            setCredentials({
              email: event.target.value,
              password,
            })
          }
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) =>
            setCredentials({
              email,
              password: event.target.value,
            })
          }
        />

        <Button fullWidth variant="contained" color="primary">
          Log in
        </Button>
        {error.length > 0 && <p>{error}</p>}

        <Link href="/">Back</Link>

        กรณีเข้าระบบได้จะเด้งไปหน้านี้foradmin
        <Button variant="contained" color="secondary" href="#contained-buttons">
        <Link href="/menuhomeadmin">success</Link>
      </Button>

      กรณีเข้าระบบได้จะเด้งไปหน้านี้foruser
        <Button variant="contained" color="secondary" href="#contained-buttons">
        <Link href="/menuhomeuser">success</Link>
      </Button>

      </div>
    </Container>
  );
};

export default LoginPage;
