function Counter(props) {
    return(
        <div class="counter">
            <button className="down">-</button>
            <div className="counter-total">
                <p>{this.props.life}</p>
            </div>
            <button className="up">+</button>
        </div>
    );
};

function Player(props) {
   console.log('Hello from Player')
   return(
        <div className="player">
            <div className="player-name">
                <p>{this.props.name}</p>
            </div>
            <Counter life={this.props.life} />        
        </div>
   );
};


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [
                {
                    name: "Nathan",
                    life: 40,
                    id: 1
                },
                {
                    name: "Andre",
                    life: 40,
                    id: 2
                },
                {
                    name: "Gerard",
                    life: 40,
                    id: 3
                },
                {
                    name: "Nick",
                    life: 40,
                    id: 4
                }
            ]
        } 
    }

    render() {
        return(
            this.state.players.map( player => { 
                <Player name={player.name} life={player.life} key={player.id} /> 
            })
        );
    };
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
