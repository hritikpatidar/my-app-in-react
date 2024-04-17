// import "./styles.css";
import { useState } from "react";

export const CRUDTodoList = () => {
    const [value, setValue] = useState("");
    const [edit, setEdit] = useState(false);
    const [index, setIndex] = useState();

    const [todoList, setTodoList] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // let newData = {[name]:value}
        setValue(value);
    };
    const handleClick = () => {
        setTodoList([...todoList, value]);
        // todoList.append(value);
        setValue("");
    };
    const handleUpdate = (e) => {
        const newArray = [...todoList];
        newArray[index] = value;
        setTodoList(newArray);
        setEdit(false);
        setValue("");
    };
    const handleEdit = (index, item) => {
        setEdit(true);
        setIndex(index);
        setValue(item);
    };
    const handleDelete = (index, item) => {
        const newArray = [...todoList];
        newArray.splice(index, 1);
        setTodoList(newArray);
    };
    return (
        <div className="App">
            <h1>crud with react</h1>
            <input
                type="text"
                value={value}
                placeholder="enter your name "
                onChange={handleChange}
            />
            <button onClick={edit ? handleUpdate : handleClick}>
                {edit ? "update" : "add list"}
            </button>
            {todoList.map((item, index) => {
                return (
                    <div key={index}>
                        <span>{item}</span>
                        <button onClick={() => handleEdit(index, item)}>edit</button>
                        <button onClick={() => handleDelete(index)}>delete</button>
                    </div>
                );
            })}
            {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
        </div>
    );
}


