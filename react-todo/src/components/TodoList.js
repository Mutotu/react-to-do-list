const TodoList = (props) => {
  const removeEl = (i) => {
    props.list.splice(i, 1);
  };
  return (
    <div className='todo-list'>
      <h1>Todo List</h1>
      {props.list.map((item, i) => {
        return (
          <div className='todo-card' key={i} id={i}>
            <h4>{item}</h4>
            <button
              onClick={() => {
                removeEl(i);
                props.setDone([item, ...props.done]);
                props.setShow(true);
              }}
            >
              DONE
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
