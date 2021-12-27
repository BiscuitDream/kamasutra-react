import styles from './CustomFields.module.css';
import React from "react";
import {
  GenericField,
  GenericFieldHTMLAttributes,
  WrappedFieldInputProps,
  WrappedFieldMetaProps, WrappedFieldProps
} from "redux-form";

type PropsType = {
  input: WrappedFieldInputProps,
  meta: WrappedFieldMetaProps,
  className?: string
};
// TODO типизацию FormField надо сделать нормально. пока не разобрался
export const CustomField = (FormField: string | GenericField<{}> | any) => ({input, meta: {error, touched}, ...props}: WrappedFieldProps & GenericFieldHTMLAttributes): JSX.Element => {
  const hasError = touched && error;
  return (
    <div className={styles.field}>
        <FormField className={hasError ? styles.error : ''} {...input} {...props} />
        {hasError &&
          <span className={styles.errorMessage}>&nbsp;{error}</span>}
    </div>
  );
};

export const Input = CustomField('input');

export const TextArea = CustomField('textarea');


// export const CustomFields = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <input  />
//     </div>
//   );
// };

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
