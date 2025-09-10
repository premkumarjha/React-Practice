import React, { use, useState } from "react";
import "../App.css";

const TodoAppWithoutRedux = () => {
  const [data, setData] = useState({ userName: "" });
  const [todos, setTodos] = useState([]);

 
  //If the UI should show something immediately → use 0 (developer style) or 1 (user style).
  //If the UI should wait until something happens (e.g., user picks a page, or data loads) → use null.
  //   1. null
  // When to use: To represent the intentional absence of any value or object. The data is expected but not yet available.

  // Common Scenarios:

  // Data fetched from an API (user, posts, productDetails).

  // An optional piece of state that might not exist (selectedItem, error).
  //const [selectedIndex, setSelectedIndex] = useState(null); // nothing selected
  // A state that toggles between something and nothing (editingId, currentVideo).
  // const [user, setUser] = useState(null); // User data isn't loaded yet.
  // const [selectedProduct, setSelectedProduct] = useState(null); // Nothing is selected.
  // const [error, setError] = useState(null); // There is no error initially.
  // 2. 0 (Number)
  // When to use: When the state is quantitative and zero is a meaningful, valid starting point.

  // Common Scenarios:

  // Counters, scores, indexes (if you intend to start at 0).

  // Pagination (page 0 is the first page).

  // jsx
  // const [counter, setCounter] = useState(0); // The count starts at zero.
  // const [pageIndex, setPageIndex] = useState(0); // Start on the first page.
  // const [votes, setVotes] = useState(0); // Initial votes are zero.

  const [editId, setEditId] = useState(null);
  const [editedData, setEditedData] = useState({ userName: "" });
  let newData = [];
  const addDataHandler = () => {
    if (data.userName.length > 0) {
      setTodos([...todos, data]);
      setData({ userName: "" });
    }
  };

  const editHandler = (item, index) => {
    setEditId(index);
    setEditedData({ userName: item.userName });
  };
  const saveHandler = (item, index) => {
    setEditId(null);
    const response = todos.map((todo, todoId) =>
      todoId == index ? { ...todo, userName: editedData.userName } : todo
    );
    setEditedData({ userName: "" });
    setTodos(response);
    setEditId(null);
    setEditedData({ userName: "" });
  };
  const deleteHandler = (index) => {
    const res = todos.filter((item, id) => id != index);
    setTodos(res);
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
              {/* <div key={index}>{item?.userName}</div> */}
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
                  <button
                    type="button"
                    onClick={() => saveHandler(item, index)}
                  >
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
