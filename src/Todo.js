import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import "./Todo.css";
import React from "react";

const Todo = ({ text }) => {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemText primary={text} secondary="Deadline.. ⏰" />
      </ListItem>
    </List>
  );
};

export default Todo;
