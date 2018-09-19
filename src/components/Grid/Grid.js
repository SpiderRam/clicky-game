import React, {Component} from "react";
import "./Grid.css";
import femmeBlocks from "../../femmes.json";
import Card from "../Card";


class Grid extends Component {
    state = {
        femmes: femmeBlocks,
        score: 0
    }

    handleClick = name => {
       console.log(name);
       const newFemmes = this.state.femmes.map(femme => {
           if (femme.name === name) {
               femme.clicked = true;
           }
           return femme;
       })
       this.setState({
           femmes: this.shuffleArray(newFemmes), 
           score: this.state.score +1,
        });
       console.log(newFemmes);
    }

    shuffleArray = femmes => {
        for (let i = femmes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [femmes[i], femmes[j]] = [femmes[j], femmes[i]];
        }
        return (femmes);
    }

    render() {
        console.log(this.state.femmes);
        return(
            <div className="gridWrapper">
                <div className="grid">
                {this.state.femmes.map(femme => {
                    console.log(femme);
                        return (<Card 
                        key={femme.name} 
                        handleClick={this.handleClick}
                        clicked={femme.clicked} 
                        src={femme.image} 
                        alt={femme.name}  
                       />)
                    })}
                </div>
            </div>
        );
    }
};

export default Grid;
    
    // <div class="wrapper">
    //     <div id="grid-item-1" class="grid-item">One</div>
    //     <div id="grid-item-2" class="grid-item">Two </div>
    //     <div id="grid-item-3" class="grid-item">Three</div>
    //     <div id="grid-item-4" class="grid-item">Four</div>
    //     <div id="grid-item-5" class="grid-item">Five</div>
    //     <div id="grid-item-6" class="grid-item">Six</div>
    //     <div id="grid-item-7" class="grid-item">Seven</div>
    //     <div id="grid-item-8" class="grid-item">Eight</div>
    //     <div id="grid-item-9" class="grid-item">Nine</div>
    //     <div id="grid-item-10" class="grid-item">Ten</div>
    //     <div id="grid-item-11" class="grid-item">Eleven</div>
    //     <div id="grid-item-12" class="grid-item">Twelve</div>
    // </div>