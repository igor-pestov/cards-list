import React, { useState } from 'react';
import Card from './Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    margin: '50px auto 0 auto',
  },
}));
const ListCard = () => {
  const classes = useStyles();
  let timer;
  const [boxes, setBoxes] = useState([
    { id: 1, name: 'BOX 1', color: 'LightBlue' },
    { id: 2, name: 'BOX 2', color: 'pink' },
    { id: 3, name: 'BOX 3', color: 'LightBlue' },
    { id: 4, name: 'BOX 4', color: 'pink' },
    { id: 5, name: 'BOX 5', color: 'LightBlue' },
    { id: 6, name: 'BOX 6', color: 'pink' },
    { id: 7, name: 'BOX 7', color: 'LightBlue' },
    { id: 8, name: 'BOX 8', color: 'pink' },
    { id: 9, name: 'BOX 9', color: 'LightBlue' },
    { id: 10, name: 'BOX 10', color: 'pink' },
  ]);
  const up = (box) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      let newBoxes = boxes.filter((e) => e.id !== box.id);
      newBoxes.splice(0, 0, box);
      setBoxes(newBoxes);
    }, 250);
  };
  const down = (box) => {
    clearTimeout(timer);
    let newBoxes = boxes.filter((e) => e.id !== box.id);
    newBoxes.splice(newBoxes.length, 0, box);
    setBoxes(newBoxes);
  };
  const del = (e, box) => {
    e.preventDefault();
    let newBoxes = boxes.filter((e) => e.id !== box.id);
    setBoxes(newBoxes);
  };
  return (
    <div className={classes.root}>
      {boxes.map((box) => {
        return <Card box={box} key={box.id} up={up} down={down} del={del} />;
      })}
    </div>
  );
};
export default ListCard;
