var apiKey = require('./../.env').apiKey;

//Constructer that houses userInput and userInput search results
function Issue(input){
  this.userInput = input;
  this.resultsArray = [];
}

//extracts info from API objects into smaller objects and pushes smaller objects to Issue.resultsArray, using for loop
Issue.prototype.extractDoctorInfo = function(input){
  var length = input.length;
  for(var i = 0; i < length; i++){
    var practices = input[i].practices[0];
    var addresses = practices.visit_address;
    var profiles = input[i].profile;
    var newPatientsYesOrNo;
    if(practices.accepts_new_patients){
      newPatientsYesOrNo = "Yes";
    } else {
      newPatientsYesOrNo = "No";
    }
    var individualPractice = {
      practiceName: practices.name,
      street: addresses.street,
      city: addresses.city,
      state: addresses.state,
      zip: addresses.zip,
      phone: practices.phones[0].number,
      website: practices.website,
      newPatients: newPatientsYesOrNo,
      firstName: profiles.first_name,
      lastName: profiles.last_name,
      title: profiles.title,
      image: profiles.image_url,
      bio: profiles.bio,
    };
    this.resultsArray.push(individualPractice);
  }
};

//Get search results from BetterDoctor API and stores in Issue.resultsArray
Issue.prototype.getDoctors = function(callback){
  var that = this;
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ that.userInput +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result){
     that.extractDoctorInfo(result.data);
     callback();
     console.log(that.resultsArray);
    })
   .fail(function(error){
      console.log("fail");
    });
};






exports.issueModule = Issue;
