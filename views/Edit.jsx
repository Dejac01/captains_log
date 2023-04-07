class Edit extends React.Component{
    render() {
      return (
        <DefaultLayout title="Edit Page">      
       {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
            {/* form is not complete we will do that below*/}
        <form>
            Title: <input type="text" name="title" defaultValue={this.props.log.title}/><br/>
            Entry: <input type="textarea" name="entry"  defaultValue={this.props.log.entry}/><br/>
            Is Broken:
                { this.props.log.shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type="checkbox" name="shipIsBroken"/> }
            <br/>
            <input type="submit" value="Submit Changes"/>
        </form>
        </DefaultLayout>
      )
    }
  }
  module.exports= Edit;