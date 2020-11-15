import React from "react";
import { CardList } from "./components/card-list/card-list.component"
import './App.css';
import {SearchBox} from "./components/search-box/search-box.component"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      searchField: "",
      monsters: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMonster}/>
      </div>
    )
  }
}

export default App;
