import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions'
import EveryComment from './EveryComment'
import ScrollableFeed from 'react-scrollable-feed'

const Comments=({userId,addComment,editComment,userToken,getComments,itineraryId})=>{
    const [text, setText] = useState('')
    const [newComments, setNewComments] = useState([])
    const [error, setError]= useState('')

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
                    setError('Oops! There was a problem, try later')
            }})
        }
    }
    const deleteCommentHandler=(id)=>{
        editComment(id ,userToken)
        .then(res=>{
            if(res.success){
                setNewComments(res.res)
            }else{
                setError("Oops! There's a problem, try later")
            }
        })
    }
    
    const everyComment =newComments.map(obj =><EveryComment key={obj._id} comment={obj} user={userId} userToken={userToken} deleteCommentHandler={deleteCommentHandler} userToken={userToken}/>)
    return(
        <div className='comentaries'>
            <ScrollableFeed className='divComentaries'>
                {everyComment}
            </ScrollableFeed>
            <span>{error}</span>
            <div className='divEnviar'>
                <textarea placeholder={!userToken ? 'Create an account and add your comment' : 'Add a comment...'} disabled={!userToken} maxLength='200' value={text} onChange={toWriteHandler}/>
                <button className='send' disabled={!userToken} onClick={addCommentHandler}><img src='/assets/send.png'/></button>
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