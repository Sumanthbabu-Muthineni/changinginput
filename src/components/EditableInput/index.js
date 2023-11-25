import './index.css'
import {Component} from 'react'

class EditableTextInput extends Component {
  state = {inputText: '', save: false}

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onClickSave = event => {
    event.preventDefault()

    this.setState(prevState => ({save: !prevState.save}))
  }

  render() {
    const {inputText, save} = this.state
    return (
      <div className="Bg-container">
        <div className="inputContainer">
          <h1>Editable Text Input</h1>
          <div className="input-btn">
            {' '}
            {save ? (
              <p>{inputText}</p>
            ) : (
              <input
                value={inputText}
                onChange={this.onChangeInput}
                type="text"
                className="input-text"
              />
            )}
            <button
              type="button"
              className="saveBtn"
              onClick={this.onClickSave}
            >
              {save ? 'Edit' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditableTextInput
