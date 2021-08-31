import {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import itinerariesActionsActions from '../redux/actions/itinerariesActions'

const Comments=({comments,addComment,userToken,itineraryId})=>{
    const [text, setText] = useState('')
    const toWriteHandler=(e)=> setText(e.target.value)
    const [newComments, setNewComments] = useState(comments)


    const addCommentHandler=()=>{
        setText('')
        addComment(userToken,itineraryId,text)
        .then(res=>setNewComments([...newComments, res.res[res.res.length -1]]))
    }

    const comment= newComments.map((obj,index)=>{
        return(<div key={index}>
            <input defaultValue={obj.text}/>
        </div>)
    })
    return(
        <div className='comentaries'>
            <div className='divComentaries'>
                {comment}
            </div>
            <div className='divEnviar'>
                <textarea placeholder='Commentary' disabled={!userToken} maxLength='200' value={text} onChange={toWriteHandler}/>
                <button disabled={!userToken} onClick={addCommentHandler}>Enviar</button>
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        userToken:state.user.user.token
    }
}
const mapDispatchToProps ={
    addComment:itinerariesActionsActions.addComment
}
export default connect(mapStateToProps,mapDispatchToProps)(Comments)