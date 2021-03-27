import {
  Avatar,
  Button,
  Input,
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
            <Input
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

      <List>
        <div className="todo__list">
          <div className="todo__listItem">
            <ListItem>
              <ListItemText primary={todoObj.todo} secondary="Deadline.. ⏰" />
            </ListItem>
          </div>

          <div className="todo__listButton">
            <button
              className="todo__listEditButton"
              onClick={(e) => setOpen(true)}
            >
              Edit
            </button>

            <DeleteForever
              className="todo__listDeleteButton"
              onClick={(e) => db.collection("todos").doc(todoObj.id).delete()}
            />
          </div>
        </div>
      </List>
    </div>
  );
};

export default Todo;
