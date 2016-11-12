var React = require('react');
var axios = require('axios');

var Search = require('./Search');
var Results = require('./Results');
var Saved = require('./Saved');

var Main = React.createClass({
  render: function() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>New York Times Scrubber</h1>
        </div>

        <Search />
        <Results />
        <Saved />
        
      </div>
    );
  }
});

module.exports = Main;