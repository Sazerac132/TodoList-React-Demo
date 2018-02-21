import React from 'react';
import TodoTable from './TodoTable';
import TodoInput from './TodoInput';

const styles = require('./style.scss');

export default class TodoList extends React.Component {

  constructor() {
    super();

    this.state = {
      nextId: 4,
      tasks: [
        {
          id: 0,
          name: 'Prepare React demo',
          done: false
        },
        {
          id: 1,
          name: 'Eat lunch',
          done: true
        },
        {
          id: 2,
          name: 'Study French',
          done: false
        },
        {
          id: 3,
          name: 'Clean fish tank',
          done: true
        }
      ]
    };

    this.render = this.render.bind(this);
    this.updateText = this.updateText.bind(this);
    this.addTask = this.addTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
    this.removeTask = this.removeTask.bind(this);

  }

  render() {
    let {tasks, newTaskText} = this.state;

    let numTasks = tasks.length;
    let completedTasks = tasks.filter(task => task.done).length;

    return (
      <div className={styles.wrapper}>
        <TodoTable
          tasks={tasks}
          toggleTask={this.toggleTask}
          removeTask={this.removeTask}
        />
        <TodoInput
          addTask={this.addTask}
          newTaskText={newTaskText || ''}
          updateText={this.updateText}
        />
        <div className={styles.announcer}>I have completed {completedTasks} out of {numTasks} tasks. {
          completedTasks >= numTasks && 'Yay!'
        }</div>
      </div>
    );
  }

  updateText(el) {
    let {
      target: {value: newTaskText}
    } = el;

    this.setState({
      newTaskText
    });
  }

  addTask(name) {
    let {tasks, nextId} = this.state;

    let id = ++nextId;
    tasks.push({
      name, id, done: false
    });

    this.setState({
      tasks, nextId
    });
  }

  toggleTask(id) {
    let {tasks} = this.state;

    let thisTask = tasks.find(task => task.id === id);
    thisTask.done = !thisTask.done;

    this.setState({
      tasks
    });
  }

  removeTask(id) {
    let {tasks} = this.state;

    tasks = tasks.filter(task => task.id !== id);

    this.setState({
      tasks
    });
  }

}