var ProjectTable = React.createClass({

  renderProjectRows: function(){
    return(
      this.props.projects.map(function(project) {
        return (
          <ProjectRow
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            time_estimate={project.time_estimate}
            parentUpdateProject={this.props.parentUpdateProject}/>
        );
      }.bind(this))
    )
  },



  render: function() {
    return(
      <div>

        <div className="row" style={{fontSize: "18", fontWeight: "bold", marginTop: "50px"}}>

          <div className="col-sm-2">
            Project
          </div>

          <div className="col-sm-4">
            Description
          </div>

          <div className="col-sm-2">
            Time
          </div>

        </div>

        {this.renderProjectRows()}

      </div>
    );
  }
});
