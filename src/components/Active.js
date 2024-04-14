import { memo } from "react";
function Active(data) {
  const activeTodo = [...data];

  const activeTasks = activeTodo.filter((n) => {
    return n.completed === false && n.completed !== undefined;
  });

  return activeTasks;
}

export default Active;
