var Issue = require('./../js/medical.js').issueModule;


// Issue.prototype.displayDoctors = function(){
//   var practiceName = this.getPracticeName();
//
//   $('#showResults').append('<div class="individualResult"><div class="practiceInfo"><h1>' +
//   practiceName + '</h1><h2>' +
//   );
// }

$(function(){
  $("#medicalForm").submit(function(e){
    e.preventDefault();
    var medicalIssue = $("#medicalInput").val();
    var NewIssue = new Issue(medicalIssue);
    NewIssue.getDoctors();


  });
});
