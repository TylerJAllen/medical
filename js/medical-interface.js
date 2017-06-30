var Issue = require('./../js/medical.js').issueModule;


Issue.prototype.displayDoctors = function(){
  var array = this.resultsArray;
  var length = array.length;
  console.log(array);
  for(var i = 0; i < length; i++){
    console.log("inside loop test - start");
    var output = array[i];
    $('#showResults').append('<div class="individualResult"><div class="practiceInfo"><h1>' +
    output.practiceName + '</h1><h3>' +
    output.street + '<br>' +
    output.city + '<br>' +
    output.state + '<br>' +
    output.zip + '</h3><h3>Phone: ' +
    output.phone + '</h3><h3><a href="' +
    output.website +
    '">website</a></h3><h4>Accepts new patients: ' +
    output.newPatients + '</h4><form class="insuranceForm"><label for="insuranceToggle"><input type="checkbox" name="" value=""> Show Insurance Providers</label></form></div><div class="doctorInfo"><img src="' +
    output.image + '" alt=""><h2>' +
    output.firstName + ' ' +
    output.lastName + ', ' +
    output.title + '</h2><p>' +
    output.bio + '</p></div></div>'
    );
  }
  $('#showResults').show();
};

$(function(){
  $("#medicalForm").submit(function(e){
    e.preventDefault();
    $('#showResults').empty();
    var medicalIssue = $("#medicalInput").val();
    var NewIssue = new Issue(medicalIssue);
    NewIssue.getDoctors(function(){NewIssue.displayDoctors();});
    // NewIssue.displayDoctors();
  });
});
