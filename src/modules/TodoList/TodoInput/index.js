import React from 'react';

const styles = require('./style.scss');

export default class TodoInput extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {addTask, newTaskText, updateText} = this.props;

    return (
      <div>
        <input type="text" value={newTaskText} onChange={updateText} />
        <button onClick={() => addTask(newTaskText)}>
          Add task!
        </button>
      </div>
    );
  }

}