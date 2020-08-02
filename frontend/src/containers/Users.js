import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersForm from '../components/Usersform'
import { getUsersAction } from '../actions/usersActions';

class Users extends Component {

    componentWillMount(){
        this.props.getUsers(this.pageNumber);
    }

    get pageNumber() {
        const isPageNumberExist = typeof this.props.match.params.pageNumber !== 'undefined';
        return (isPageNumberExist ? this.props.match.params.pageNumber : 1)
    }
    
    render() {
        const pagebuttonsRender = this.getPageNumberButtonsRender();
        return (
            <div className="users-page">
                <UsersForm users = {this.props.users} pagebuttonsRender = {pagebuttonsRender} handlerClickUser={this.handlerClickUser}></UsersForm>
            </div>
        )
    }
    getPageNumberButtonsRender() {
        let pagesButtonsRender = [];
        for(let i=1;i<=this.props.users.total_pages ; i++){
            pagesButtonsRender.push(<li key ={i} className="page-item">
                <button className = " page-link" onClick = {() => this.handlerClickPage(i)}>{i}</button>
            </li>)
        }
        return pagesButtonsRender;
    }
    handlerClickPage(pageNumber){
        if(this.props.users.page !== pageNumber){
            this.props.history.push(`/users/${pageNumber}`)
            this.props.getUsers(pageNumber);
        }
    }
    handlerClickUser = (UserID) => {
        this.props.history.push(`/user/${UserID}`);
    }

   
}



const mapStateToProps = state =>{
    return {
        users : state.usersReducer.users
    }
  }

  const mapDispacthToProps = disaptch =>{
    return{
            getUsers(pageNumber){
                disaptch(getUsersAction(pageNumber))
            }
        }
      }
    


export default connect(mapStateToProps, mapDispacthToProps)(Users);