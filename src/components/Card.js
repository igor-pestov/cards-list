import { makeStyles } from '@material-ui/core/styles';

import { Paper } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    margin: '10px 0px',
    cursor: 'pointer',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    border: '2px',
    borderBottom: 'none',
    userSelect: 'none',
    borderRadius: '4px',
  },
  span: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#282c34',
  },
}));
const Card = ({ up, down, del, box }) => {
  const classes = useStyles();
  return (
    <Paper
      className={classes.root}
      onClick={() => up(box)}
      onDoubleClick={() => down(box)}
      onContextMenu={(e) => del(e, box)}
    >
      <div
        style={{ backgroundColor: box.color,  }}
        className={classes.paper}
      >
        <span className={classes.span}>{box.name}</span>
      </div>
    </Paper>
  );
};
export default Card;
