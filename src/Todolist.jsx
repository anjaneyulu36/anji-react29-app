import React from "react";
import {connect} from 'react-redux';
function Todolist(props){
    console.log(props)
    
    return(

        <div>
            <h2>Edupoly</h2>
            <input type="text" onKeyUp={(e)=>{props.dispatch({type:'NEWTODO',payload:e.target.value})}}/>
            <button onClick={()=>{props.dispatch({type:"ADDTODO"})}}>Add task</button>
            <ul>
                {
                 props.todos.map((todo,i)=>{
                    return(
                       
                        <li>
                            {todo}
                            <button onClick={()=>{props.dispatch({type:'DEL',ind:i})}}>Delete</button>
                        </li>
                    )
                 })  
                }
            </ul>
        </div>
    )
}

export default connect(store=>store)(Todolist);