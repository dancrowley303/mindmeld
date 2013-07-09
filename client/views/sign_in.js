Template.signIn.helpers({
});

Template.signIn.events({
  'focus #usernameOrEmail': function(event) {
    $('#usernameGroup').removeClass('error');
    $('#usernameOrEmailNotFound').hide();
  },
  'focus #password': function(event) {
    $('#passwordGroup').removeClass('error');
    $('#passwordIncorrect').hide();
  },
  'click #signIn': function(event) {
    event.preventDefault();

    var usernameOrEmail = $('#usernameOrEmail').val();
    var password = $('#password').val();

    if ($('#signInCredentials').parsley().validate()) { 

      Meteor.loginWithPassword(usernameOrEmail, password, function(error) {
        if (error) {
          "User not found"
          if (error.error == 403 && error.reason == "User not found") {
            $('#usernameOrEmailNotFound').show();
            $('#usernameGroup').addClass('error');
          }
          if (error.error == 403 && error.reason == "Incorrect password") {
            $('#passwordIncorrect').show();
            $('#passwordGroup').addClass('error');
          }
          return;
        }
        Meteor.Router.to(Meteor.Router.homePath());
      });
    } 

  }
})
