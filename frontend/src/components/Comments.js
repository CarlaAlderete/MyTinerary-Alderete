import {useState} from 'react'
import {connect} from 'react-redux'
import itinerariesActionsActions from '../redux/actions/itinerariesActions'

const Comments=({comments,addComment,userToken,itineraryId})=>{
    const [text, setText] = useState('')
    const toWriteHandler=(e)=> setText(e.target.value)
   
    const addCommentHandler=()=>{
        setText('')
        addComment(userToken,itineraryId,text)
        .then(res=>console.log(res))
    }
    comment= comments.map((obj,index)=>{
        return(<div key={index}>
            
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