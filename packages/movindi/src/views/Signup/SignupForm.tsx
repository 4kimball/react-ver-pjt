import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, CircularProgress, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useInput } from '../../hooks';
import { authApis } from '../../apis';

const useStyles = makeStyles((theme) => ({
  root: {},
  fields: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: theme.spacing(-1),

    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1),
    },
  },
}));

const usernameValidator = (text: string) => {
  const reg = /[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]/g;
  return text.length >= 4 && text.length <= 12 && !reg.test(text);
};

const passwordValidator = (text: string) => {
  const reg = /[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]/g;

  return text.length >= 6 && text.length <= 12 && reg.test(text);
};

function SignupForm() {
  const username = useInput('');
  const password = useInput('');
  const passwordConfirmation = useInput('');
  const [error, setError] = useState({
    username: false,
    password: false,
    passwordConfirmation: false,
  });
  const classes = useStyles();
  const navigate = useNavigate();

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!usernameValidator(username.value)) {
      setError({ ...error, username: true });
    } else if (!passwordValidator(password.value)) {
      setError({ ...error, password: true });
    } else if (
      !passwordValidator(passwordConfirmation.value) ||
      passwordConfirmation.value !== password.value
    ) {
      setError({ ...error, passwordConfirmation: true });
    } else {
      const crednetials = {
        username: username.value,
        password: password.value,
        passwordConfirmation: passwordConfirmation.value,
        sns_id: 'id',
        sns_type: 'instagram',
      };
      const response = authApis.signup(crednetials);
      navigate('/login');
    }
  }
  return (
    <form className={clsx(classes.root)} onSubmit={handleSubmit}>
      <div className={classes.fields}>
        <TextField
          id="username"
          name="username"
          type="text"
          label="아이디"
          variant="outlined"
          value={username.value}
          onChange={username.onChange}
          error={error.username}
          required
          fullWidth
        />
        <TextField
          id="password"
          name="password"
          type="password"
          label="비밀번호"
          variant="outlined"
          value={password.value}
          onChange={password.onChange}
          error={error.password}
          required
        />
        <TextField
          id="passwordConfirmation"
          name="passwordConfirmation"
          type="password"
          label="비밀번호 확인"
          variant="outlined"
          value={passwordConfirmation.value}
          onChange={passwordConfirmation.onChange}
          error={error.passwordConfirmation}
          required
        />
      </div>
      <Box position="relative" mt={4}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="primary"
          fullWidth
        >
          회원가입
        </Button>
      </Box>
    </form>
  );
}

export default SignupForm;
