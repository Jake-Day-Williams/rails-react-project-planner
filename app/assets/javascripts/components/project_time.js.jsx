var ProjectTime = React.createClass({

  calculateTime: function(){
    totalTime = 0;

    this.props.projects.map(function(project){
      time = project.time_estimate == null || project.time_estimate == undefined ? 0 : parseFloat(project.time_estimate)
      totalTime += time
    })

    return totalTime
  },



  render: function() {

    return(
      <div style={{marginTop: "40px"}} className="col-sm-6">
        <h4>
          Total Time
        </h4>
        <h4>
          {this.calculateTime()}
        </h4>
      </div>
    )

  }



});
