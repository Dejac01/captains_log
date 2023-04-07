const React = require("react");

class New extends React.Component {
  render() {
    // const { log } = this.props;
    return (
      <div>
        <nav>
          <a href="/logs/new">Create a New Log!</a>
        </nav>
        <h1>New Log page</h1>
        <form action="/logs" method="POST">
          Title: <input type="text" name="title" />
          <br />
          Entry: <input type="textarea" name="entry" />
          <br />
          Ship is Broken: <input type="checkbox" name="shipIsBroken" />
          <br />
          <input type="submit" name="" value="Create Log" />
        </form>
      </div>
    );
  }
}

module.exports = New;