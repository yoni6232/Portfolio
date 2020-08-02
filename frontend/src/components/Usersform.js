import React, { Component } from 'react';

class UsersForm extends Component {
  
   
    render() {
        
        return (
            <form className="users-form" >
                <div className="form-group">
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                                {this.props.users.data.map((user,userinex) =>
                                <tr key={userinex}>
                                <th scope="row">{user.id}</th>
                                <td><span className="pointer" onClick = { () => this.handlerSubmit(user.id)}>{user.first_name}</span></td>
                                <td>{user.last_name}</td>
                                </tr>
                                )}
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {this.props.pagebuttonsRender}
                    </ul>
                </nav>
                 </div>
            </form>
        )
    }
    handlerSubmit = (userID) => {
        this.props.handlerClickUser(userID);
    }
 
}


export default UsersForm;