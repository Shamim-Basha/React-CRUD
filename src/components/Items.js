import Item from './Item'

function Items({items,handle_delete,handle_edit,handle_update,handle_edit_item}) {
  return(
    <div className='items'>
        {items.map((i)=> <Item key={i.id} item={i} handle_delete={handle_delete} handle_edit={handle_edit} handle_update={handle_update}/>)}
    </div>
  )
}

export default Items
