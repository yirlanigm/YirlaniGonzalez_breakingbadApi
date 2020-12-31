import React, {Component} from "react";
import './App.css';
import Nav from '../components/Nav';
import Card from "../components/Card";
import CardList from "../components/CardList";
import CardDeath from "../components/CardDeath";
import CardListDeath from "../components/CardDeathList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";


        class App extends Component {
            constructor() {
                super();
                this.state= {
                    characters: [],
                    deaths: [],
                    searchField: '',
                    Visible: 6,
                    deathsView:5,

                }
                this.LoadMore = this.LoadMore.bind(this);
          }

      componentDidMount() {
        fetch('https://www.breakingbadapi.com/api/characters/')
            .then(response => response.json())
            .then(characters => this.setState({characters: characters}));
          fetch('https://www.breakingbadapi.com/api/characters/')
              .then(response => response.json())
              .then(deaths => this.setState({deaths: deaths}));
      }
            onSearchChange = (event) => {
                this.setState({searchField: event.target.value})
            }

            LoadMore(){
                this.setState(() => {
                    return {Visible: this.state.Visible + 3}
                })
            }

        render() {
          const {characters, searchField, Visible, deathsView} = this.state;
          const filteredCharacters = characters.filter(character => {
              return character.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
          })
          return !characters.length ?
              <h1>Loading</h1> :
              (
                <div>
                  <Nav/>
                    <div className="mw9 center ph3-ns">
                        <div className="cf ph2-ns">
                            <div className="fl w-100 pa2 -ns pa2">
                                <div className="outline  pv4">
                                    <div className='tc'>
                                        <h1 className='f1'>The Breaking Bad API</h1>
                                        <h1 className='f3'>Characters</h1>
                                        <SearchBox searchChange={this.onSearchChange}/>
                                         <Scroll>
                                            <CardList visible={Visible} characters={filteredCharacters}/>
                                        </Scroll>
                                        <div className="ph3 mt4">
                                            {Visible < characters.length &&
                                            <a onClick={this.LoadMore} className="f6 link dim ba ph3 pv2 mb2 dib black"
                                               href="#0">More Characters</a>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='fl w100 w-40-ns pa2'>
                                <div className='outline pv4'>


                                </div>
                            </div>

                        </div>
                    </div>

                </div>


              );
      }
    }

export default App;