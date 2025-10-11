//why there is need redux toolkit , alreddy have redux???
//createsore and all is not work now? and we should use createe slice rather than normal reducer ???

import React, { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { addTodo, saveTodo, deleteTodo } from "../redux/todoSlice";
const TodoAppWithoutRedux = () => {
  const [data, setData] = useState({ userName: "" });

  const [editId, setEditId] = useState(null);
  const [editedData, setEditedData] = useState({ userName: "" });
  const { todos } = useSelector((state) => state?.todo);
  const dispatch = useDispatch();

  const addDataHandler = () => {
    if (data.userName.length > 0) {
      dispatch(addTodo(data));
      setData({ userName: "" });
    }
  };

  const editHandler = (item, index) => {
    setEditId(index);
    setEditedData({ userName: item.userName });
  };
  const saveHandler = (index) => {
    setEditId(null);

    dispatch(saveTodo({ editedData, index }));
  };
  const deleteHandler = (index) => {
    dispatch(deleteTodo(index));
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        {}
        <input
          value={data.userName}
          onChange={(e) => setData({ userName: e.target.value })}
        />
        <button onClick={() => addDataHandler()} type="button">
          {" "}
          Add Todo
        </button>
      </div>

      <div>
        {todos?.map((item, index) => (
          <>
            <div style={{ display: "flex" }}>
              {index == editId ? (
                <input
                  value={editedData.userName}
                  onChange={(e) => setEditedData({ userName: e.target.value })}
                />
              ) : (
                <div key={index}>{item?.userName}</div>
              )}

              <div>
                {index == editId ? (
                  <button type="button" onClick={() => saveHandler(index)}>
                    save Todo
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      editHandler(item, index);
                    }}
                  >
                    Edit Todo
                  </button>
                )}
              </div>
              <div>
                <button type="button" onClick={() => deleteHandler(index)}>
                  Delete Todo
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default TodoAppWithoutRedux;
