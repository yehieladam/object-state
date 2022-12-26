import './App.css';
import { useState } from 'react';
function App() {
  const[toDo, setToDo]= useState('');
  const[toDoList,setToDoList] = useState(['Buy milk','Go to a Movie','Buy Coffee']);

function HendeleTodoChange(e){
  setToDo(e.target.value)
}

function AddItem(){
  setToDoList([...toDoList,toDo])
}

  return (
    <div className="App">
      <input value = {toDo} onChange={HendeleTodoChange} />
      <button onClick={AddItem}> Add to List </button>
      <h3>List of To Do List</h3>
      <ul>
        { 
        toDoList.map(
          toDo => (<li>{toDo}</li>)
        )

        }

      </ul>
    </div>
  );
}

export default App;
