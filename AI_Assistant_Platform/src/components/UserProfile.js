
import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../redux/actions/userActions';

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.getUserProfile();
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.bio}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.profile,
});

const mapDispatchToProps = dispatch => ({
  getUserProfile: () => dispatch(getUserProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
