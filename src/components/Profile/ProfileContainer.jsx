import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <Profile {...this.props} /> // TODO идёт передача всех пропсов, мб надо убрать лишние типа экшкреэйтера '{userProfile: {…}, setUserProfile: ƒ}'
    )
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer); // TODO имя придумать лучше

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
