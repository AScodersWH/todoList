import React, { Component } from 'react';
import { connect } from 'react-redux';
import addToLists from '../actions/addToList';
import updateItem from '../actions/updateItem';
import removeList from '../actions/removeList';
import {} from './index.css';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      text: '',
      flag: false
    };
  }

  addToLists = () => {
    this.props.addToLists(this.state.text);
  };

  render() {
    const { list, lists } = this.props;
    return (
      <div>
        <div>
          <button onClick={this.addToLists}>添加todo</button>
          <input
            type="text"
            className={this.state.flag ? 'flags' : ''}
            placeholder="Input Your Infos"
            onChange={e => {
              this.setState({ text: e.target.value });
            }}
          />
        </div>
        {list.filter(item => item.name.includes(this.state.text)).map(item => {
          return (
            <div key={item.id}>
              <input
                type="checkbox"
                onChange={() => {
                  console.log(1111, item.id);
                  this.props.updateItem(item.id);
                }}
                checked={this.state.flag}
              />
              <input
                type="text"
                className={item.flag ? 'completed' : ''}
                placeholder="Input Your Infos"
                value={item.name}
              />
              <button onClick={() => this.props.removeList(item.id)}>×</button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.todoList
});
const mapDispatchToProps = {
  addToLists,
  updateItem,
  removeList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
