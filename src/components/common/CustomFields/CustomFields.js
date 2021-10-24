import styles from './CustomFields.module.css';

export const CustomField = (FormField) => ({input, meta: {error, touched, submitting, submitFailed, visited}, ...props}) => {
  const hasError = touched && error; // TODO проработать случаи появления ошибки
  return (
    <div>
      <p className={styles.field}>
        <FormField className={hasError ? styles.error : ''} {...input} {...props} />
        {submitFailed && (error &&
          <span className={styles.errorMessage}>&nbsp;{error}</span>)}
      </p>
    </div>
  );
};

export const Input = CustomField('input');

export const TextArea = CustomField('textarea');


export const CustomFields = (props) => {
  console.log(props)
  return (
    <div>
      <input  />
    </div>
  );
};

// const renderField = ({
//                        input,
//                        label,
//                        type,
//                        meta: { touched, error, warning }
//                      }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={label} type={type} />
//       {touched &&
//       ((error && <span>{error}</span>) ||
//         (warning && <span>{warning}</span>))}
//     </div>
//   </div>
// )
