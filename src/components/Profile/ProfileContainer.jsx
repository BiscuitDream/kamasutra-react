import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
  }

  render() {
    return (
      <Profile {...this.props} /> // TODO идёт передача всех пропсов, мб надо убрать лишние типа экшкреэйтера '{userProfile: {…}'
    )
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer); // TODO имя придумать лучше

export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);
