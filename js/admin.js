$(function(){
  Parse.$ = jQuery;

  Parse.initialize("BtWdIpUPO3ajrNeLEia0wTb0DjuFF0p1u1kjDzmR", "PqJo0OEJeSAMPKaiszGEZXUgtRN4FH1hw5aHpZsg");

  $('.form-signin').on('submit', function(e) {

    // Prevent Default Submit Event
    e.preventDefault();

    // Get data from the form and put them into variables
/*        var data = $(this).serializeArray(),
            username = data[1].value,
            password = data[2].value;
 */
 Parse.User.logIn("Grumpy", "test", {
  success: function(user) {
    // Do stuff after successful login.
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
  }
});

    // Call Parse Login function with those variables
    Parse.User.logIn(username, password, {
        // If the username and password matches
        success: function(user) {
            alert('Welcome!');
        },
        // If there is an error
        error: function(user, error) {
            console.log(error + 'Help me');
        }
    });

});

});
