
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as aiActions from '../redux/actions/aiActions';

class AI_Functions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aiResponse: '',
    };
  }

  handleAIRequest = async (request) => {
    const response = await this.props.aiActions.processAIRequest(request);
    this.setState({ aiResponse: response });
  }

  render() {
    return (
      <div>
        <h1>AI Functions</h1>
        <button onClick={() => this.handleAIRequest('Hello AI')}>Test AI</button>
        <p>{this.state.aiResponse}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ai: state.ai,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    aiActions: bindActionCreators(aiActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AI_Functions);
