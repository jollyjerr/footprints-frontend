import { DirectLine } from 'botframework-directlinejs';
import React from 'react';
import ReactWebChat from 'botframework-webchat';

import {connect} from 'react-redux'


const Footprint = (props) => {

    return (
      props.token ? <ReactWebChat directLine={ new DirectLine({ token: props.token }) } /> : null 
    );
}

const mapStateToProps = ({token}) => {
    return {
        token
    }
}

export default connect(mapStateToProps, null)(Footprint)