var ProjectRow = React.createClass({

  getInitialState: function(){
    return ( {id: this.props.id, name: this.props.name, description: this.props.description, time_estimate: this.props.time_estimate, edit: false, formErrors: {}} )
  },

  editProject: function(){
    this.setState({edit: true});
  },

  cancelEdit: function(e){
    e.preventDefault();
    this.setState({edit: false, name: this.props.name, description: this.props.description, time_estimate: this.props.time_estimate, formErrors: {}});
  },

  handleNameChange: function(e){
    this.setState({name: e.target.value});
  },

  handleDescriptionChange: function(e){
    this.setState({description: e.target.value});
  },

  handleTimeEstimateChange: function(e){
    this.setState({time_estimate: e.target.value});
  },

  handleValidationErrors: function(formErrorObject){
    this.setState({edit: true, formErrors: formErrorObject});
  },

  handleUpdate: function(){
    this.setState({edit: false, formErrors: false});
  },

  updateProject: function(e){
    e.preventDefault();
    this.props.parentUpdateProject(
      {project: {id: this.state.id, name: this.state.name, description: this.state.description, time_estimate: this.state.time_estimate}},
      this.handleUpdate,
      this.handleValidationErrors
    );
  },

  renderFieldErrors: function(attribute){
    if(this.state.formErrors[attribute]){
      return(
        this.state.formErrors[attribute].map(function(error, i){
          return(
            <span key={i} className="help-block">
              {error}
            </span>
          );
        })
      );
    }
    else{
      return "";
    }
  },

  renderProjectNameEditFields: function(){
    var formGroupClass = this.state.formErrors["name"] ? "form-group has-error" : "form-group"

    return(

      <div className= {formGroupClass}>

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


    );
  },

  renderProjectDescriptionEditFields: function(){
    var formGroupClass = this.state.formErrors["description"] ? "form-group has-error" : "form-group"

    return(

      <div className= {formGroupClass}>

        <textarea
          name="project[description]"
          placeholder="Project Description"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
          className="text form-control"
        />

        {this.renderFieldErrors("description")}

      </div>


    );
  },

  renderTimeEstimateEditFields: function(){

    var formGroupClass = this.state.formErrors["time_estimate"] ? "form-group has-error" : "form-group"

    return(

      <div className={formGroupClass}>

        <input
          name="project[time_estimate]"
          type="number"
          placeholder="Time Estimate"
          value={this.state.time_estimate}
          onChange={this.handleTimeEstimateChange}
          className="numeric decimal form-control"
        />

        {this.renderFieldErrors("time_estimate")}

      </div>


    );

  },

  render: function() {

    if(this.state.edit == false){
      return(
        <div className="row" style={{marginTop: "20px"}}>

          <div className="col-sm-2">
            {this.state.name}
          </div>

          <div className="col-sm-4">
            {this.state.description}
          </div>

          <div className="col-sm-2">
            {this.state.time_estimate}
          </div>

          <div className="col-sm-2">
            <button className='btn btn-sm btn-primary' onClick={this.editProject}>
              Edit
            </button>
          </div>

        </div>
      );
    }
    else{
      return(

        <div className="row" style={{marginTop: "20px"}}>

          <form style={{marginTop: "30px"}} onSubmit={this.updateProject}>



            <div className="col-sm-2">
              {this.renderProjectNameEditFields()}
            </div>

            <div className="col-sm-4">
              {this.renderProjectDescriptionEditFields()}
            </div>

            <div className="col-sm-2">
              {this.renderTimeEstimateEditFields()}
            </div>

            <div className="col-sm-2">

              <input type="submit" value="Save" className='btn btn-success' />

              <button className='btn btn-sm btn-primary' style={{marginRight:'10px'}} onClick={this.cancelEdit}>
                Cancel
              </button>

            </div>
          </form>

        </div>


      );
    }

  }

});
