import React from 'react';
import './App.scss';
import classNames from 'classnames';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
  }

  turnSelecteItemsListToString = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No Goods Selected';
      case 1:
        return `${selectedGoods[0]} is Selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and
          ${selectedGoods.slice(-1)} are Selected`;
    }
  }

  selectItem = (item) => {
    this.setState((prevState) => {
      if (prevState.selectedGoods.includes(item)) {
        const index = prevState.selectedGoods.indexOf(item);

        prevState.selectedGoods.splice(index, 1);
      } else {
        prevState.selectedGoods.push(item);
      }

      return {
        selectedGoods: prevState.selectedGoods,
      };
    });
  }

  clearAllSelections = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>
          {this.turnSelecteItemsListToString()}
        </h1>
        <button
          type="button"
          onClick={this.clearAllSelections}
          disabled={this.state.selectedGoods.length === 0}
        >
          Clear all Selections
        </button>
        <ul>
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={classNames('goods__item', {
                selectedGood: this.state.selectedGoods.includes(item),
              })}
            >
              {item}
              <button
                type="button"
                onClick={() => {
                  this.selectItem(item);
                }}
              >
                {this.state.selectedGoods.includes(item)
                  ? 'Unselect'
                  : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}