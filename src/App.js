import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EdamameAPI from './API/edamame'
import { loadRecipes } from './utilities'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      recipes: [],
    };
  }

  componentDidMount() {
    let recipePromise = loadRecipes();

    Promise.all([
      recipePromise
    ])
    .then(values => {
      console.log(values);
      this.recipes = values[0].hits;
    })
  }

  filterRecipes = (query) => {
    let f = this.recipes.filter(recipe => recipe.label.toLowerCase().includes(query.toLowerCase()));


    this.setState({ filteredRecipes: f, query });
  }

  render() {
    return (
      <div>
        <ol className="recipeList">
          {
            this.filteredRecipes && this.filteredRecipes.length > 0 && this.filteredRecipes.map((recipe, index) => (
              <li
                className="listItem"
                key={index}
                >
                {recipe.label}

              </li>

            ))
          }
        </ol>
      </div>
    );
  }
}

export default App;
