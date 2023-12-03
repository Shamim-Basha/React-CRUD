import React, { useState } from 'react'

function Item({item,handle_delete,handle_edit,handle_update}) {
    const [edit_value,setEdit_value] = useState(item.value)
    const handle_edit_item  = (e)=>{
        setEdit_value(e.target.value)
    }
  return (
    <div className='item'>
        {item.isEditing? 
        <form className='item_form'>
            <input autoFocus onChange={(e)=>handle_edit_item(e)} type='text' value={edit_value}/>
            <button className='update' onClick={(e)=>handle_update(e,item.id,edit_value)}>Update</button>
        </form>
        :
        <>
        <div className='item_desc'>{item.value}</div>
        <div className='buttons'>
            <button className='edit' onClick={()=>handle_edit(item.id)}>Edit</button>
            <button className='delete' onClick={()=>handle_delete(item.id)}>Delete</button>
        </div>
        </>
        }
    </div>
  )
}

export default Item
