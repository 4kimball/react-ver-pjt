import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import { Page } from '../../ui';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: theme.spacing(6, 2),
  },
  card: {
    display: 'flex',
    position: 'relative',
    maxWidth: '100%',
    width: theme.breakpoints.values.sm,
    overflow: 'visible',
  },
  content: {
    width: '100%',
    padding: theme.spacing(4, 4, 6, 4),
  },
}));

function Signup() {
  const classes = useStyles();
  return (
    <Page title={'회원가입'}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <h1>Signup</h1>
        </CardContent>
      </Card>
    </Page>
  );
}

export default Signup;
