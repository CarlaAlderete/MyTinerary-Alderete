import { set } from 'mongoose'
import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions'

const EveryComment = ({comment,user,userToken,deleteCommentHandler,editComment})=>{
    const {text, userId,_id}=comment
    const [newText, setNewText]=useState({oldText:text})
    const [edit, setEdit]= useState(false)
    const [enable, setEnable] = useState(false)

    useEffect(()=>{
        user === userId._id ? setEdit(true) : setEdit(false)
    },[user])

    
    const enableEditHandler=()=>{
        !enable ? setEnable(true) : setEnable(false)
    }
    const editText=(e)=>{
        setNewText(e.target.value)
        console.log(e.target.value)
    }
    const editCommentHandler=()=>{
        editComment(_id, newText)
    }

    const editComments= !edit ? null 
                    :<div>
                        <img className='iconComment' src='/assets/delete.png' alt='delete' onClick={()=>deleteCommentHandler(_id)}/>
                        {enable && <img className='iconComment' src='/assets/cruz.png' alt='edit' onClick={enableEditHandler}/>}
                        {!enable && <img className='iconComment' src='/assets/edit.png' alt='edit' onClick={enableEditHandler}/>}
                    </div>
   
    return(
        <div className='everyComment'>
            <div>
                <div className='userComment' style={{backgroundImage:`url("${userId.src}")`}}></div>
                <p>{userId.name} {userId.lastName}</p>
            </div>
            <div>
                <div>
                    <textarea defaultValue={newText} onChange={editText} disabled={!enable}/>
                    {enable && <img className='iconComment' src='/assets/send.png' alt='delete' onClick={editCommentHandler}/>}
                </div>
                {editComments}
            </div>
        </div>
    )
}
const mapDispatchToProps={
    editComment:itinerariesActions.editComment
}
export default connect(null,mapDispatchToProps)(EveryComment)
