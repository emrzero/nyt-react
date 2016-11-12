var React = require('react');

var Results = React.createClass ({
  render: function() {
    return(
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3> Results</h3>
          </div>

          <div className="panel-body">
            <p>Search Results</p>
          </div>
        </div>
      );
  }
});

module.exports = Results;