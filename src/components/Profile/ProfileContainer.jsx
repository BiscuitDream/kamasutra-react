import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <Profile {...this.props} /> // TODO идёт передача всех пропсов, мб надо убрать лишние типа экшкреэйтера '{userProfile: {…}'
    )
  }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
});

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent); // TODO имя придумать лучше

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
