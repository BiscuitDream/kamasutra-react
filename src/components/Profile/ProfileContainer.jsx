import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
