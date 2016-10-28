var ProjectsContainer = React.createClass({

  getInitialState:function(){
    return {
      projects: this.props.projects,
    }
  },


  parentProjectSubmit: function(formData, onSuccess, onError) {

    $.ajax({
      url: "/projects",
      dataType: "json",
      type: "POST",
      data: formData,

      success: function(projects) {

        this.setState({projects: projects})

        onSuccess()

      }.bind(this),

      error: function(response, status, err) {

        onError(response.responseJSON)

      }

    })

  },


  parentUpdateProject: function(formData, onSuccess, onError){

    $.ajax({
      url: ("/projects/" + formData["project"]["id"]),
      dataType: 'json',
      type: 'PATCH',
      data: formData,

      success: function(projects) {

        this.setState({projects: projects, showNewForm: false})

        onSuccess()

      }.bind(this),

      error: function(response, status, err) {

        onError(response.responseJSON)
      }

    })

  },



  render: function() {

    return(
      <div>
        <h2> Project List </h2>

        <ProjectTable projects={this.state.projects} parentUpdateProject={this.parentUpdateProject}/>

        <NewProjectForm parentProjectSubmit={this.parentProjectSubmit}/>

        <ProjectCost projects={this.state.projects}/>

      </div>
    )
  }
})
