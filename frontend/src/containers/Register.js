import React , {Component} from 'react';
import { connect} from 'react-redux';


class Register extends Component {

    // componentWillMount(){
    //     this.props.getUser(this.userID)
    // }

    // componentDidUpdate(prevProps){
    //     if(prevProps.match.params.userID !== this.userID){
    //         this.props.getUser(this.userID);
    //     }
    // }
    

    get userID(){
        return this.props.match.params.userID;
    }
    render(){
        return (
            <div className = "register-page">
                register
             </div>
        )
        
    }
}

const mapStateToProps = state =>{
    return {
        user : state.usersReducer.userActive
    }
  }

  const mapDispacthToProps = disaptch =>{
    return{
           
        }
      }
    


export default connect(mapStateToProps,mapDispacthToProps)(Register);