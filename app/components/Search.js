var React = require('react');

var Search = React.createClass ({
  render: function() {
    return(
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4> Search</h4>
          </div>

          <div className="panel-body">
            
            <form>
                <div className="form-group">
                  <label htmlFor="topic">Topic</label>
                  <input type="text" className="form-control" id="topic"  placeholder="Electoral college failures" />
                  <small id="topcHelp" className="form-text text-muted">Anything that comes to mind</small>
                </div>

                <div className="form-group">
                  <label htmlFor="startYear">Start Year</label>
                  <input type="text" className="form-control" id="startYear"  placeholder="12/31/1999" />
                </div>

                <div className="form-group">
                  <label htmlFor="endYear">End Year</label>
                  <input type="text" className="form-control" id="endYear"  placeholder="01/30/2000" />
                </div>

                <button type="button" id="btnSearch" className="btn btn-success" >Search</button>
            </form>

          </div>
        </div>
      );
  }
});

module.exports = Search;