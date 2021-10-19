import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 19803;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile {...this.props} /> // TODO идёт передача всех пропсов, мб надо убрать лишние типа экшкреэйтера '{userProfile: {…}'
    )
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  status: state.profilePage.status
});

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);
