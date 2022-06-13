var Screen = React.createClass({
    render: function(){
      return (
        <div id="display">
          <span className="clean" onClick={this.props.onClickClean}>x</span>
          {this.props.displayText}
        </div>
      );
    }
  });

  var Inputs = React.createClass({
    render: function(){
      return (
        <div id="inputs">
          <Numbers onClick={this.props.onClickOperando} onClickTotal={this.props.onClickOperador}/>
          <Operations onClick={this.props.onClickOperador}/>
        </div>
      );
    }
  });
  
  var Numbers = React.createClass({
    getInitialState: function(){
      return {
        buttons: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
      }
    },
    render: function(){
      var buttonElements = [];
      for(var i = 0; i < this.state.buttons.length; i++){
        buttonElements.push(
          <Button label={this.state.buttons[i]} onClick={this.props.onClick}/>
        );
      }
      return (
        <div id="numbers">
          {buttonElements}
          <Button label="=" onClick={this.props.onClickTotal} className="greenBtn"/>
        </div>
      );
    }
  });
  
  var Operations = React.createClass({
    getInitialState: function(){
      return {
        buttons: ['+', '-', '/', 'x']
      }
    },
    render: function(){
      var buttonElements = [];
      for(var i = 0; i < this.state.buttons.length; i++){
        buttonElements.push(
          <Button label={this.state.buttons[i]} onClick={this.props.onClick}/>
        );
      }
      return (
        <div id="operations">
          {buttonElements}
        </div>
      );
    }
  });
  

  React.render(<Container/>, document.getElementById('calculadora'));