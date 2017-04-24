/**
 * Created by chenjinxin on 2017/3/25.
 */
import './home.scss';
import React from 'react';
import Header from 'components/header/index.js';
import { connect } from 'react-redux';
import { testAction } from '../../actions';
import { testGet } from '../../service/getData'
class Home extends React.Component {

  constructor (props) {
    super(props);
  }

  async componentDidMount() {
    let data = await testGet();
    this.props.test(data);
  }

  render () {
    return (
      <div>
        <Header signinUp='home'>
          <span name='logo' className="head_logo">react</span>
        </Header>
        <div style={{marginTop: '300px'}}>
          {
            this.props.testData.id || 'test'
          }
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    testData : state.test
  }
}

function mapDispatchToProps(dispatch) {
  return {
    test: (res) => dispatch( testAction(res))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
