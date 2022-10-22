import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      word: "",
      translate: "",
      cards: []
    }
  }

  render() {
    return (
      <div className='App'>
        <h1 className='app-title'>Карточки английских слов</h1>
        <div className='container'>
          <input
            type='text'
            placeholder='Введите слово'
            value={this.state.word}
            onChange={(e) => this.updateInput('word', e.target.value)}
          />
          <input
            type='text'
            placeholder='Введите слово'
            value={this.state.translate}
            onChange={(e) => this.updateInput('translate', e.target.value)}
          />
        </div>
      </div >
    );
  }
}

export default App;
