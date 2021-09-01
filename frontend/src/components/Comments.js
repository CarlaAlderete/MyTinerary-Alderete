import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import itinerariesActionsActions from '../redux/actions/itinerariesActions'
import EveryComment from './EveryComment'

const Comments=({comments,userId,addComment,deleteComment,userToken,itineraryId})=>{
    const [text, setText] = useState('')
    const [newComments, setNewComments] = useState(comments)

    // useEffect(()=>{
    //     if()
    // },[])

    const toWriteHandler=(e)=> setText(e.target.value)

    const addCommentHandler=()=>{
        setText('')
        if(text){
            addComment(userToken,itineraryId,text)
            .then(res=>{
                if(res.success){
                    setNewComments([...newComments, res.res[res.res.length -1]])
                }else{
                    alert('oops! algo paso')
            }})
        }else{
            alert('llena')
        }
    }
    const deleteCommentHandler=(id)=>{
        deleteComment(id ,userToken)
        .then(res=>{
            if(res.success){
                setNewComments(res.res)
            }else{
                alert('no se pudo borrar')
            }
        })
    }
    const everyComment =newComments.map(obj =><EveryComment key={obj._id} comment={obj} user={userId} userToken={userToken} deleteCommentHandler={deleteCommentHandler}/>)
    return(
        <div className='comentaries'>
            <div className='divComentaries'>
                {everyComment}
            </div>
            <div className='divEnviar'>
                <textarea placeholder='Comment' disabled={!userToken} maxLength='200' value={text} onChange={toWriteHandler}/>
                <button disabled={!userToken} onClick={addCommentHandler}><img src='/assets/send.png'/></button>
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        userToken:state.user.user.token,
        userId:state.user.user.id
    }
}
const mapDispatchToProps ={
    addComment:itinerariesActionsActions.addComment,
    deleteComment:itinerariesActionsActions.deleteComment
}
export default connect(mapStateToProps,mapDispatchToProps)(Comments)