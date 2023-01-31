import './App.css';
import { useState } from 'react';
function App() {
  const[toDo, setToDo]= useState('');
  const[toDoList,setToDoList] = useState(['חלב','קפה','עוגיות']);


  function DeleteItem(index) {
    setToDoList(toDoList.filter((_, i) => i !== index))
  }


function HendeleTodoChange(e){
  setToDo(e.target.value)
}

function AddItem(){
  setToDoList([...toDoList,toDo])
  setToDo('')
}

  return (
    <div className="App">

      <input value = {toDo} onChange={HendeleTodoChange} />
      <button onClick={AddItem} > Add to List </button>
      <h3>רשימת קניות </h3>
      <ul>
        {
          toDoList.map((toDo, index) => (
            <li key={index}>{toDo}
              <button onClick={() => DeleteItem(index)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
