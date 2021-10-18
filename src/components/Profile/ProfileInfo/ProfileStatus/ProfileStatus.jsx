import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  };

  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
  }

  render() {
    return (
      <>
        {!this.state.editMode &&
        <div>
          <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
        </div>
        }
        {this.state.editMode &&
        <div>
          <input type="text" onBlur={this.deactivateEditMode} autoFocus value={this.props.status} />
        </div>
        }
      </>
    );
  }
}

export default ProfileStatus;
