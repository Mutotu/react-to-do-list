import "./App.css";
import { useState } from "react";
import DoneList from "./components/DoneList";
import FormPanel from "./components/FormPanel";
import TodoList from "./components/TodoList";

function App() {
  const [list, setList] = useState([]);
  const [done, setDone] = useState([]);
  const [show, setShow] = useState(false);
  return (
    <div className='App'>
      <div className='container '>
        <div className='form all'>
          <FormPanel setList={setList} list={list} />
        </div>
        <div className='todolist all'>
          <TodoList
            list={list}
            done={done}
            setDone={setDone}
            setList={setList}
            show={show}
            setShow={setShow}
          />
        </div>

        <div>
          {show ? (
            <div className='donelist all'>
              <DoneList
                done={done}
                list={list}
                setDone={setDone}
                setList={setList}
                show={show}
                setShow={setShow}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
