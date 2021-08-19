//КОнтейнерная компонента. Идея её просто быть обёрткой для какой-то обычной компоненты, чистой компоненты функциональной, презентационной. Удовлетворить нужды той компоненты, подготовить для неё данные, колбеки. Не имеет своего вида.
// Можем теперь основную (презентационную компоненту) переиспользовать где-то. Независя от редакса или других стейт менеджеров. Не привязана ни к какой технологии типа редакс. Она чистенькая, получает данные на входе и возвращает фиксироавнную разметку на выходе и вызывает какие-то колбеки, которые в пропсах приходят
// Что произойдёт, когда она вызовет колбеки, она понятия не имеет
// Одно работает с данными, другое с отображением
// Разделяем логику работы с данными и логику по отображению

import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const state = props.store.getState();

  const addPost = () => {
    const action = addPostActionCreator();
    props.store.dispatch(action);
  };

  const onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return <MyPosts updateNewPostText={onPostChange}
                  addPost={addPost}
                  postsData={state.profilePage.posts}
                  newPostText={state.profilePage.newPostText} />;
};

export default MyPostsContainer;
