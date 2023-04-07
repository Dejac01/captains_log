const React = require('react');

class Show extends React.Component {
    render(){
      const {log} = this.props
        return (
            <div>
                <h1>Logs show page</h1>
                <h2>{props.title}</h2>
                <p>{props.entry}</p>
        The {log.name } is { log.title }
        { log.shipIsBroken ? `It is ready to broken` : `It is not broken` }
            </div>
            
        )
    }
}



module.exports = Show;