/**
 * Created by chenjinxin on 2017/3/25.
 */
import './header.scss'
import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';


class Header extends React.Component {


  constructor(props) {
    super(props);
  }



  componentWillMount(){

  }

  render() {
    const {headTitle, goBack, signinUp, children} = this.props;
    return (
        <header id="head_top">
          {
              Array.isArray(children) ? children.map(child => {
              return (
                child && child.props.name == 'logo' || child.props.name == 'search' ? child : ''
              )
            }) : children && (children.props.name == 'logo' || children.props.name == 'search') ? children : ''

          }

        </header>
    )
  }
}


function mapStateToProps(state) {
  let userInfo = state.userInfo;
  return {
    userInfo
  }
}

export default connect(mapStateToProps)(Header);
