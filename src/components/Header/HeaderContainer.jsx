import React from 'react';
import {connect} from "react-redux";
import axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
      .then(response => {
        if (response.data.resultCode === 0) {
          const {id, login, email} = response.data.data;
          this.props.setAuthUserData(id, login, email); // TODO можно еще профиль залогиненного юзера загрузить и отобразить что-нибудь напр аватар
        }
      });
  }

  render() {
    return (
      <Header {...this.props} /> // TODO не все пропсы нужны в этом компоненте
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
