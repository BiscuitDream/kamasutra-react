//КОнтейнерная компонента. Идея её просто быть обёрткой для какой-то обычной компоненты, чистой компоненты функциональной, презентационной. Удовлетворить нужды той компоненты, подготовить для неё данные, колбеки. Не имеет своего вида.
// Можем теперь основную (презентационную компоненту) переиспользовать где-то. Независя от редакса или других стейт менеджеров. Не привязана ни к какой технологии типа редакс. Она чистенькая, получает данные на входе и возвращает фиксироавнную разметку на выходе и вызывает какие-то колбеки, которые в пропсах приходят
// Что произойдёт, когда она вызовет колбеки, она понятия не имеет
// Одно работает с данными, другое с отображением
// Разделяем логику работы с данными и логику по отображению
//
// Контейнерная компонента создаётся для того, чтобы функциональная могла остаться функциональной: чистой и простой!
// Функциональной компоненте нужны данные! Вот контейнерная и даст ей их, взяв всю грязную работу на себя!
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      const action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      const action = addPostActionCreator();
      dispatch(action);
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
