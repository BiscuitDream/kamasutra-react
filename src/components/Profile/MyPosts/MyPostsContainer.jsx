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
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        const addPost = () => {
          const action = addPostActionCreator();
          store.dispatch(action);
        };

        const onPostChange = (text) => {
          const action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };

        return (<MyPosts updateNewPostText={onPostChange}
                         addPost={addPost}
                         postsData={state.profilePage.posts}
                         newPostText={state.profilePage.newPostText} />);
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
