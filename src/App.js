import './App.css';
import Items from './components/Items';
import { useState } from 'react';

function App() {
  const [id,setId] = useState(1)
  const [items, setItems] = useState([{'id':0,'value':'Welcome to the App'}])
  const [new_item, setNew_item] = useState('')

  const handle_create = (e)=>{
    setNew_item(e.target.value)
  }

  const handle_add = (e)=>{
    e.preventDefault()
    setItems([...items,{'id':id,'value':new_item}])
    setNew_item('')
    setId(prev => prev+1)
  }

  const handle_delete = (id)=>{
    setItems( items => items.filter(item => item.id !== id))
  }

  const handle_edit = (id)=>{
    const new_items = items.map(item => item.id===id? {...item,'isEditing':true} : {...item,'isEditing':false} )
    setItems(new_items)
  }

  const handle_update = (e,id,new_value) =>{
    e.preventDefault()
    setItems(items.map(item => item.id===id? {...item,'value':new_value,'isEditing':false} : {...item} ))

  }


  return (
    <div className="App">
      <h1 className='head'>CRUD App</h1>
      <form>
      <input onChange={(e)=>handle_create(e)} value={new_item} type='text'/>
      <button className='update' type='submit' onClick={(e)=>handle_add(e)}>Add</button>
      </form>
      <Items items={items} handle_delete={handle_delete} handle_edit={handle_edit} handle_update={handle_update}/>
    </div>
  );
}

export default App;