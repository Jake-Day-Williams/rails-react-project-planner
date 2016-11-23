var ProjectTimer = React.createClass({

  getInitialState:function(){
      return { elapsed: 0, go: false };
  },
  getDefaultProps: function() {
      return {
          interval: 1000
      };
  },
  componentDidMount: function(){
      console.log('mounted');
  },
  tick: function(){
      console.log('tick')
      this.setState({elapsed: Date.now() - this.state.start});
  },
  startCount: function(e){
      console.log(e);
      console.log('GO!!!')
      this.setState({start: Date.now(), go: true})
      setInterval(this.tick, this.props.interval);
  },
  render: function(){
      var clickMe = <button onClick={this.startCount} >GO</button>;
      var display = <div>time elapsed {Math.round(this.state.elapsed / 1000)} seconds</div>
      return (
          <div>
              {this.state.go ? display : clickMe}
          </div>
      )
  }
})
