import React from 'react';

const styles = require('./style.scss');

export default class TodoTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {tasks = [], toggleTask, removeTask} = this.props;
    return (
      <table className={styles.todoTable}>
        <thead>
          <tr>
            <th>Task</th><th>Completed</th><th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            !!tasks.length && tasks.map(task => {
              let {id, name, done} = task;
              return <tr key={id}>
                <td>{name}</td>
                <td><input type="checkbox" checked={done} onChange={() => toggleTask(id)} /></td>
                <td><i className="fa fa-times-circle" onClick={() => removeTask(id)} /></td>
              </tr>})
          }
        </tbody>
      </table>
    )
  }

}