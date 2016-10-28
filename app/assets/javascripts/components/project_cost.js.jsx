var ProjectTime = React.createClass({

  calculateTime: function(){
    totalTime = 0;

    this.props.projects.map(function(project){
      time = project.time_estimate == null || project.time_estimate == undefined ? 0 : parseFloat(project.time_estimate)
      totalCost += cost
    })

    return totalCost.toFixed(2)
  },



  render: function() {

    return(
      <div style={{marginTop: "30px"}}>
        <h4>
          Total Time Scheduled
        </h4>
        <h4>
          {this.calculateCost()}
        </h4>
      </div>
    )

  }



});
