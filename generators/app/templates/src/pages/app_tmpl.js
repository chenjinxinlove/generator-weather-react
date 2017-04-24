/**
 * Created by chenjinxin on 2017/3/25.
 */

import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <Link to="/home">HOME</Link>
      </div>
    )
  }
}

export default App;
