var React = require('react');

var Saved = React.createClass ({
  render: function() {
    return(
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3> Saved</h3>
          </div>

          <div className="panel-body">
            <p>Saved Articles</p>
          </div>
        </div>
      );
  }
});

module.exports = Saved;