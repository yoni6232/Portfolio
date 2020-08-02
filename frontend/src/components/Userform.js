import React, { Component } from 'react';

class UserForm extends Component {
  
   
    render() {
        
        return (
            <form className="user-form" >
                <div className="card">
                    < img  className="card-img-top" src={this.props.user.avatar} alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.user.id}#{this.props.user.first_name} {this.props.user.last_name}</h5>
                    </div>
                </div>
            </form>
        )
    }
 
}


export default UserForm;