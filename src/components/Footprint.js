import { DirectLine } from 'botframework-directlinejs';
import React from 'react';
import ReactWebChat from 'botframework-webchat';

import {connect} from 'react-redux';

import WEB_CHAT_STYLE from '../styles/webChat';


const Footprint = (props) => {
    return (
      props.token ? <ReactWebChat directLine={ new DirectLine({ token: props.token }) } styleOptions={WEB_CHAT_STYLE} /> : null 
    );
}

const mapStateToProps = ({token}) => {
    return {
        token
    }
}

export default connect(mapStateToProps, null)(Footprint)