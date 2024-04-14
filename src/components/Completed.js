import { memo } from "react";
function Completed(data) {
  const completedTodo = [...data];

  const completedtasks = completedTodo.filter((n) => {
    return n.completed === true && n.completed !== undefined;
  });

  return completedtasks;
}

export default Completed;
