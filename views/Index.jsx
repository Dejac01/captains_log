const React = require("react");
class Index extends React.Component {
  render() {
    const { logs } = this.props;
    return (
      <div>
        <h1>Logs Page</h1>
        <nav>
          <a href="/logs/new">Create a New Log</a>
        </nav>
        <ul>
          {logs.map((log, i) => {
            return (
              <li key={i}>
                <a href={`/logs/${i}`}>{log.title}</a> {log.entry}{" "}
                <br></br>
                {log.shipIsBroken
                  ? `Is broken`
                  : `Is not broken`}
                <br />
               
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}



module.exports = Index;
