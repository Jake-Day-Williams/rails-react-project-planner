var NewProjectForm = React.createClass({


  getInitialState: function(){
    return{name: "", description: "", time_estimate: "", formErrors: {}}
  },

  resetState: function(){
    this.setState({name: "", description: "", time_estimate: ""})
  },

  handleValidationError: function(formErrorObj){
    this.setState({formErrors: formErrorObj})
  },



  newProjectSubmit: function(e){
    e.preventDefault()

    this.props.parentProjectSubmit(
      {project: {name: this.state.name, description: this.state.description, time_estimate: this.state.time_estimate}},
      this.resetState,
      this.handleValidationError
    );
  },



  handleNameChange: function(e){
    this.setState({name: e.target.value})
  },

  handleDescriptionChange: function(e) {
    this.setState({description: e.target.value})
  },

  handleTimeEstimateChange: function(e){
    this.setState({time_estimate: e.target.value})
  },



  renderFieldErrors: function(attribute) {
    if (this.state.formErrors[attribute]) {
      return (
        this.state.formErrors[attribute].map(function (error, i) {
          return (
            <span key={i} className="help-block">
              {error}
            </span>
          );
        })
      );
    }
    else {
      return "";
    }
  },


  renderProjectNameField: function(){

    var formGroupClass = this.state.formErrors["name"] ? "form-group has-error" : "form-group"

    return(

      <div className="row">

        <div className="col-sm-4">

          <div className="form-group">

            <input
              name="project[name]"
              type="string"
              placeholder="Project Name"
              value={this.state.name}
              onChange={this.handleNameChange}
              className="string form-control"
            />

            {this.renderFieldErrors("name")}

          </div>

        </div>

      </div>
    )
  },


  renderProjectDescriptionField: function() {

    var formGroupClass = this.state.formErrors["description"] ? "form-group has-error" : "form-group"
    return(
      <div className="row">

        <div className="col-sm-4">

          <div className="form-group">

            <textarea
              name="project[descripton]"
              placeholder="Project Description"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              className="text form-control"
            />

            {this.renderFieldErrors("description")}

          </div>

        </div>

      </div>
    )
  },


  renderTimeEstimateField: function(){

    return(
      <div className="row">

        <div className="col-sm-4">

          <div className="form-group">

            <input
              name="project[time_estimate]"
              type="number"
              placeholder="Project Cost"
              value={this.state.time_estimate}
              onChange={this.handleTimeEstimateChange}
              className="numeric decimal form-control"
            />

            {this.renderFieldErrors("time_estimate")}

          </div>

        </div>

      </div>
    )
  },



  render:function() {

    return(
      <div>
        <h4 style={{marginTop: "50px"}}> Create New Project </h4>

        <form style={{marginTop: "30px"}} onSubmit={this.newProjectSubmit}>

          <div className="form-inputs"/>

          {this.renderProjectNameField()}

          {this.renderProjectDescriptionField()}

          {this.renderTimeEstimateField()}

          <div className="row">
            <div className="col-sm-4">
              <input type="submit" value="Save" className="btn btn-primary" />
            </div>
          </div>

        </form>

      </div>
    )
  },



})
