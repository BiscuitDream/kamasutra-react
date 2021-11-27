import {Input, TextArea} from "../../../common/CustomFields/CustomFields";
import {Field, reduxForm} from "redux-form";
import styles from '../../../common/CustomFields/CustomFields.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => { // TODO need to refactor form
  return (
    <form onSubmit={handleSubmit}>
      <div><button type="submit">save</button></div>
      {error && <p className={styles.commonError}>{error}</p>}
      <div>
        <b>Full name</b>: <Field name="fullName"
                                 component={Input}
                                 type="text"
                                 placeholder="Full name" />
      </div>
      <div>
        <b>looking for a job</b>: <Field name="lookingForAJob"
                                         component={Input}
                                         type="checkbox" />
      </div>
      <div>
        <b>My professional skills</b>: <Field name="lookingForAJobDescription"
                                              component={TextArea}
                                              placeholder="My professional skills"/>
      </div>
      <div>
        <b>About me</b>: <Field name="aboutMe"
                                component={TextArea}
                                placeholder="About me"/>
      </div>
      <div>
        <b>Contacts</b>:
        <ul>
          {Object.entries(profile.contacts).map(([key, value]) => {
            return (
              <li key={key}>
                <label>
                  <b>{key}</b>:
                  <Field name={`contacts.${key}`} component={Input} value={value} placeholder={key} />
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;
