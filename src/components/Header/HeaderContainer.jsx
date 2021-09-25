import React from 'react';
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import Header from "./Header";
import {api} from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    api.checkAuth().then(data => {
        if (data.resultCode === 0) {
          const {id, login, email} = data.data;
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
