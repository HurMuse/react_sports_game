class Team extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shots: 0,
      score: 0,
      scoreboard: 0,
      stats: 0,
    };
    this.shotSound = new Audio("./assets/sound effects/ENCORE_B.mp3");
    this.scoreSound = new Audio("assets/sound effects/cheering1.mp3");
  }

  shotsTaken = () => {
    let score = this.state.score;
    /* let stats = (this.state.score / this.state.shots) * 100;*/
    let scoreboard = this.state.scoreboard;

    this.shotSound.play();

    /* let randomA = Math.floor(Math.random() * 10 + 1);*/
    let randomA = Math.floor(Math.random() * 10);
    /* if (Math.floor(Math.random() * 10 + 1) > 0.5) {
        score += 1;
        scoreboard += randomA;*/
    if (Math.floor(Math.random() * 10) > 0) {
      score += 1;
      scoreboard += randomA;
      setTimeout(() => {
        this.scoreSound.play();
      }, 100);
    }

    console.log(score);
    console.log(randomA);
    console.log(scoreboard);
    /*console.log(stats);*/

    this.setState((state, props) => ({
      shots: state.shots + 1,
      score,
      scoreboard,
      /*stats,*/
    }));
  };

  render() {
    let statsPercent;
    let stats = Math.round((this.state.score / this.state.shots) * 100);
    if (this.state.shots) {
      statsPercent = (
        <div>
          <strong>Stats:</strong> {stats}
        </div>
      );
    }
    return (
      <div className="Team">
        <h1>{this.props.name}</h1>

        <div className="picture">
          <img src={this.props.logo} alt={this.props.name} />
        </div>

        <button onClick={this.shotsTaken}>Shoot!</button>
        <div>
          <strong>Shots:</strong> {this.state.shots}
        </div>

        <div>
          <strong>Score:</strong> {this.state.score}
        </div>

        <div>
          <strong>Scoreboard:</strong> {this.state.scoreboard}
        </div>

        {statsPercent}
      </div>
    );
  }
}

/*Default Stateless component*/
function SportsApp(props) {
  const kangaroos = {
    name: "Kenzie Kangaroos",
    logo: "./assets/logos/kangaroo.jpg",
  };

  const bully = {
    name: "Bombay Bullies",
    logo: "./assets/logos/bully.jpg",
  };

  const armadillos = {
    name: "Amazing Armadillos",
    logo: "./assets/logos/armadillo.jpg",
  };

  const quokkas = {
    name: "Quirky Quokkas",
    logo: "./assets/logos/quokka.jpg",
  };
  return (
    <div className="SportsApp">
      <SportsGame
        venue="Zoom Game ID #2222222222"
        teamA={kangaroos}
        teamB={bully}
      />

      <SportsGame
        venue="Zoom Game ID #3333333333"
        teamA={armadillos}
        teamB={quokkas}
      />
    </div>
  );
}

function SportsGame(props) {
  /*Team variables could not be defined here, had to be defined in SportsApp component*/
  return (
    <div className="SportsGame">
      <h1>Welcome to {props.venue}</h1>
      <Team name={props.teamA.name} logo={props.teamA.logo} />
      <Team name={props.teamB.name} logo={props.teamB.logo} />
    </div>
  );
}
/*ReactoDom.render() should only ever render the default component. All other components will
        render through this component either referenced directly in this component or as children of
        components referenced directly in this component.*/

ReactDOM.render(<SportsApp />, document.getElementById("root"));

/*<SportsGame venue="Zoom Game ID #2222222222" />
      <SportsGame venue="Zoom Game ID #3333333333" /><Team name="Kenzie Kangaroos" logo="./assets/logos/kangaroo.jpg" />

      <Team name="Bombay Bullies" logo="./assets/logos/bully.jpg" />*/
