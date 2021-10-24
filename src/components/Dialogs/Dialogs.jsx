import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/CustomFields/CustomFields";
import {maxLength, required} from "../../utils/validators/validators";

const maxLength100 = maxLength(100);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <p>
          <Field name="newMessageText"
                 component={TextArea}
                 placeholder="Enter your message"
                 validate={[required, maxLength100]} />
      </p>
      <p>
        <button type="submit">Send message</button>
      </p>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({form: 'addMessage'})(AddMessageForm);

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const dialogsElements = state.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} key={elem.id} />);
  const messagesElements = state.messages.map(elem => <Message text={elem.text} key={elem.id} />)

  const addNewMessage = (formValues) => {
    console.log(formValues);
    props.sendNewMessage(formValues.newMessageText);
  };

  return (
    <section className={styles.dialogsBlock}>
      <ul className={styles.dialogs}>
        {dialogsElements}
      </ul>
      <div>
        <ul className={styles.messages}>
          {messagesElements}
        </ul>
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </section>
  );
};

export default Dialogs;
