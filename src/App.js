// import React from "react";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Grid from "./components/Grid/Grid";
import Femmes from "./components/Femmes/Femmes";
import femmes from "./femmes.json";

// const App = () => (
//   <div>
//     <Header />
//     <Grid />
//   </div>
// );

// export default App;



class App extends Component {
  // Setting this.state.femmes to the femmes json array
  state = {
    femmes
  };

  changeToClickedTrue = id => {
    
  };

  // Map over this.state.femmes and render a Femmes component for each femme object
  render() {
    return (
      <Wrapper>
        <Header />
          <Grid>
            {this.state.femmes.map(femme => (
              <Femmes
                clicked={this.changeToClickedTrue}
                id={femme.id}
                key={femme.id}
                name={femme.name}
                image={femme.image}
              />
            ))}
          </Grid>
      </Wrapper>
    );
  }
}

export default App;
