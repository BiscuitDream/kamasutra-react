import {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  }

  return (
    <>
      {!editMode &&
      <div>
        <span onDoubleClick={activateEditMode}>{props.status || 'no status'}</span>
      </div>
      }
      {editMode &&
      <div>
        <input type="text"
               onChange={onStatusChange}
               onBlur={deactivateEditMode}
               autoFocus
               value={status} />
      </div>
      }
    </>
  );

}

export default ProfileStatusWithHooks;
