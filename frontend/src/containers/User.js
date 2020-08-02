import React , {Component} from 'react';
import { connect} from 'react-redux';
import UserForm from '../components/Userform'
import { getUserAction } from '../actions/usersActions';

class User extends Component {

    componentWillMount(){
        this.props.getUser(this.userID)
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.userID !== this.userID){
            this.props.getUser(this.userID);
        }
    }
    

    get userID(){
        return this.props.match.params.userID;
    }
    render(){
        return (
            <div className = "user-page">
                <UserForm user = {this.props.user}></UserForm>
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
            getUser(UserId) {
                disaptch(getUserAction(UserId))
            }
        }
      }
    


export default connect(mapStateToProps,mapDispacthToProps)(User);