import {Input, TextArea} from "../../../common/CustomFields/CustomFields";
import {Field, reduxForm} from "redux-form";

const ProfileDataForm = ({userProfile, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div><button type="submit">save</button></div>
      <div>
        <b>Full name</b>: <Field name="fullName"
                                 component={Input}
                                 type="text"
                                 placeholder="Full name"
                                 validate={[]} />
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
          {/*{Object.entries(userProfile.contacts).map(([key, value]) => (*/}
          {/*  <li><Contact contactTitle={key} contactValue={value} key={key} /></li>))}*/}
        </ul>
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;
