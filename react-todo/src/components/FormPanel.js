import { useState } from "react";

const FormPanel = (props) => {
  const [todo, setTodo] = useState("");

  return (
    <>
      <div>
        <h1>Add Todo</h1>
        <div>
          <form className='form-panel' onSubmit={(e) => e.preventDefault()}>
            <input
              type='text'
              placeholder='Add todo'
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              onClick={() => {
                if (todo !== "") {
                  props.setList([...props.list, todo]);
                  setTodo("");
                }
              }}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormPanel;
