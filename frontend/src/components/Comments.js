import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions'
import EveryComment from './EveryComment'

const Comments=({userId,addComment,editComment,userToken,getComments,itineraryId})=>{
    const [text, setText] = useState('')
    const [newComments, setNewComments] = useState([])

    useEffect(()=>{
        getComments(itineraryId)
        .then(res=>setNewComments(res.res))
        .catch(err=>console.log(err))
    },[])

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
        editComment(id ,userToken)
        .then(res=>{
            if(res.success){
                setNewComments(res.res)
            }else{
                alert('no se pudo borrar')
            }
        })
    }
    
    const everyComment =newComments.map(obj =><EveryComment key={obj._id} comment={obj} user={userId} userToken={userToken} deleteCommentHandler={deleteCommentHandler} userToken={userToken}/>)
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
    getComments:itinerariesActions.getComments,
    addComment:itinerariesActions.addComment,
    editComment:itinerariesActions.editComment
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Comments)