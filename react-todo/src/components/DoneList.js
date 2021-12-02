const DoneList = (props) => {
  return (
    <>
      <div className='done-list'>
        <h1>Done List</h1>
        <button
          onClick={() => {
            props.setDone([]);
            props.setShow(false);
          }}
        >
          Clear All
        </button>
        {props.done.map((item, i) => {
          return (
            <div key={i} className='done'>
              <p>{item}</p>
              <input
                type='checkbox'
                checked
                readOnly
                onClick={() => {
                  props.setList([...props.list, item]);
                  props.done.splice(i, 1);
                }}
              />
              <button
                onClick={() => {
                  props.done.splice(i, 1);
                  props.setDone([...props.done]);
                  {
                    props.done.length < 1
                      ? props.setShow(false)
                      : props.setShow(true);
                  }
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DoneList;
