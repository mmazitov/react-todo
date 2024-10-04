export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props
  return (    
    <li className="todoItem">
      {children}
      <div className="actionsContainer">        
        <button onClick={() => {
            handleEditTodo(index)
        }}>
          <i className="fa-pen-to-square fa-solid"></i>
        </button>
        <button onClick={() => {
          handleDeleteTodo(index)
        }}>
          <i className="fa-trash-can fa-solid"></i>
        </button>
      </div>        
    </li>    
  )
}
