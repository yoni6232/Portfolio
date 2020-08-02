import React , {Component} from 'react';
import { connect} from 'react-redux';

class Home extends Component {
    render(){
        return (
            <div className = "home-page">
                Home
                </div>
        )
        
    }
}
const mapStateToProps = state =>{
    return {

    }
  }

  const mapDispacthToProps = disaptch =>{
    return{

        }
      }
    


export default connect(mapStateToProps,mapDispacthToProps)(Home);
