import React,{Component} from 'react';
import {CardList} from  './components/card-list/card-list.components'
import {SearchBox} from  './components/searchbox/searchBox.components'
// import logo from './logo.svg';
import './App.css';

// class Component is made 
class App extends Component{
  constructor(){
    super();
    this.state = {
      monster : [],
      searchField :''
    };
    

    this.handleChange = this.handleChange.bind(this)
    // by we bind this keyword of our method to the this keyword of JS
    // but we don't want to do it as it for every new method we have to bind therefore we use ES6 arrow
    // function which automatically bind it 

  } 

 componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monster : users}))

 } 

 handleChange = e => {
  this.setState({searchField : e.target.value, })
 }

  render(){
    //destructuring because we don't want to modify our base statez
    const {monster, searchField} = this.state;
    // filter() takes a function, include() checks if name is present in the array or not
    const filteredMonster = monster.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
         <h1 id = 'header_1'>Monsters Cards</h1>
        {/* SearchBox Component is made */}
        <SearchBox  placeholder = 'search monster' 
         handleChange = { this.handleChange}/>
        
       <CardList monster = {filteredMonster} /> 
      </div>
     
    );
  }
}

export default App;
