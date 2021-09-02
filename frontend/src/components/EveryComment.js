import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions'


const EveryComment = ({comment,user,deleteCommentHandler,userToken,editComment})=>{
    const {text, userId,_id}=comment
    const [newText, setNewText]=useState({comment:text , edit:false, editcomment:text})
    const [edit, setEdit]= useState(false)
    const [enable, setEnable] = useState({edit:false, delete:false})
    const [error, setError] = useState('')

    useEffect(()=>{
        user === userId._id ? setEdit(true) : setEdit(false)
    },[user])

    
    const enableEditHandler=(icon)=>{
        icon === 'cruz' && setEnable({delete:false, edit:false})
        icon === 'pencil' && setEnable({delete:true, edit:true})
        setError('')
    }
    const editText=(e)=>{
        setNewText({...newText, edit: !edit})
        setNewText({...newText, editcomment:e.target.value})
        setError('')
    }
    const enableDeleteHandler=()=>{
        setEnable({...enable, delete:true})
        setError('')
    }
    const editCommentHandler=(text)=>{
        editComment(_id, userToken, text)
        .then(res=>{
            if(res.success){
                let obj = res.res.find(obj => obj._id === _id)
                setNewText({comment:obj.text , edit:false, editcomment:obj.text})
                setEnable({delete:false, edit:false})
                setError('')
            }else{
                setError("Oops! There's a problem, try later")
            }
        })
    }
    const editComments= !edit ? null 
                    :<div>
                        {(!enable.edit && enable.delete) && <span>Are you sure?</span>}
                        {(!enable.delete && !enable.edit) && <img className='iconComment' src='/assets/delete.png' alt='delete' onClick={enableDeleteHandler}/>}
                        {enable.edit && <img className='iconComment' src='/assets/send.png' alt='delete' onClick={()=>editCommentHandler(newText.editcomment)}/>}
                        {(enable.edit || enable.delete) && <img className='iconComment' src='/assets/cruz.png' alt='edit' onClick={()=>enableEditHandler('cruz')}/>}
                        {(!enable.edit && enable.delete) && <img className='iconComment' src='/assets/check.png' alt='edit' onClick={()=>deleteCommentHandler(_id)}/>}
                        {(!enable.edit && !enable.delete) && <img className='iconComment' src='/assets/edit.png' alt='edit' onClick={()=>enableEditHandler('pencil')}/>}
                    </div>
    return(
        <div className='everyComment'>
            <div className='userComment' style={{backgroundImage:`url("${userId.src}")`}}></div>
            <div className='commentTextGr'>
                <div className='commentText'>
                    <h6>{userId.name} {userId.lastName}</h6>
                    <div className='chat'>
                        {!enable.edit && <p>{newText.comment}</p>}
                        {enable.edit && <textarea maxLength='200' defaultValue={newText.comment} onChange={editText} disabled={!enable}/>}
                    </div>
                </div>
                {editComments}
            </div>
            <span>{error}</span>
        </div>
    )
}
const mapDispatchToProps={
    editComment:itinerariesActions.editComment
}
export default connect(null,mapDispatchToProps)(EveryComment)
