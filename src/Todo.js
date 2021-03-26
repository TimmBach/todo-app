import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Modal,
} from "@material-ui/core";
import "./Todo.css";
import React, { useState } from "react";
import db from "./firebase";
import { DeleteForever } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Todo = ({ todoObj }) => {
  const classes = useStyles();
  const [input, setInput] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    db.collection("todos").doc(todoObj.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <div className="todo">
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <form>
            <h1>Hi I am a modal</h1>
            <input
              placeholder={todoObj.todo}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button type="submit" onClick={updateTodo}>
              Update Todo
            </Button>
          </form>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem className="todo__listItem">
          <ListItemText primary={todoObj.todo} secondary="Deadline.. ⏰" />
        </ListItem>
        <button className="todo__listEditButton" onClick={(e) => setOpen(true)}>
          Edit
        </button>

        <DeleteForever
          className="todo__listDeleteButton"
          onClick={(e) => db.collection("todos").doc(todoObj.id).delete()}
        />
      </List>
    </div>
  );
};

export default Todo;
