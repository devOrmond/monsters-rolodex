import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

//Class based component called App
class App extends Component{

  constructor(){
    super();

      //State: An object that determines how a component renders 
      //and behaves
      this.state = {
        monsters: [],
        searchField: ''
      }; 
  }

  //componentDidMount() is invoked immediately after
  //a component is mounted (inserted into the tree)
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    //Taking the response and converting it to JSON 
    //that JS understands and uses
    .then(response => response.json())
    //The monsters array is set to the users array returned from the API call
    .then(users => this.setState({monsters:users}))
  };

  handleChange = (e) => {  
      //When setState is called and the value is changed
      //React re-renders our component
      this.setState({searchField: e.target.value})
  }

  //Returns any HTML Elements we want
  render(){
    //Destructuring
    const { monsters, searchField} = this.state

    const filteredMonsters = monsters.filter(monster =>(
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ));


    return (
      <div className="App">       
      <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder = {'search monsters'}
          handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
