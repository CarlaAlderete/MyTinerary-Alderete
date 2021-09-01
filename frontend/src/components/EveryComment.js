import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions'


const EveryComment = ({comment,user,deleteCommentHandler,userToken,editComment})=>{
    const {text, userId,_id}=comment
    const [newText, setNewText]=useState({comment:text , edit:false, editcomment:text})
    const [edit, setEdit]= useState(false)
    const [enable, setEnable] = useState({edit:false, delete:false})

    useEffect(()=>{
        user === userId._id ? setEdit(true) : setEdit(false)
    },[user])

    
    const enableEditHandler=(icon)=>{
        icon === 'cruz' && setEnable({delete:false, edit:false})
        icon === 'pencil' && setEnable({delete:true, edit:true})
    }
    const editText=(e)=>{
        setNewText({...newText, edit: !edit})
        setNewText({...newText, editcomment:e.target.value})
    }
    const enableDeleteHandler=()=>{
        setEnable({...enable, delete:true})
    }
    const editCommentHandler=(text)=>{
        editComment(_id, text, userToken)
        .then(res=>{
            if(res.success){
                let obj = res.res.find(obj => obj._id === _id)
                setNewText({comment:obj.text , edit:false, editcomment:obj.text})
                setEnable({delete:false, edit:false})
            }else{
                alert('no se pudo borrar')
            }
        })
    }
    const editComments= !edit ? null 
                    :<div>
                        {(!enable.edit && enable.delete) && <p>seguro</p>}
                        {(!enable.delete && !enable.edit) && <img className='iconComment' src='/assets/delete.png' alt='delete' onClick={enableDeleteHandler}/>}
                        {(enable.edit || enable.delete) && <img className='iconComment' src='/assets/cruz.png' alt='edit' onClick={()=>enableEditHandler('cruz')}/>}
                        {(!enable.edit && enable.delete) && <img className='iconComment' src='/assets/check.png' alt='edit' onClick={()=>deleteCommentHandler(_id)}/>}
                        {(!enable.edit && !enable.delete) && <img className='iconComment' src='/assets/edit.png' alt='edit' onClick={()=>enableEditHandler('pencil')}/>}
                    </div>
    return(
        <div className='everyComment'>
            <div>
                <div className='userComment' style={{backgroundImage:`url("${userId.src}")`}}></div>
                <p>{userId.name} {userId.lastName}</p>
            </div>
            <div>
                <div>
                    {!enable.edit && <p>{newText.comment}</p>}
                    {enable.edit && <textarea defaultValue={newText.comment} onChange={editText} disabled={!enable}/>}
                    {enable.edit && <img className='iconComment' src='/assets/send.png' alt='delete' onClick={()=>editCommentHandler(newText.editcomment)}/>}
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
