$(function(){
  Parse.$ = jQuery;

  Parse.initialize("BtWdIpUPO3ajrNeLEia0wTb0DjuFF0p1u1kjDzmR", "PqJo0OEJeSAMPKaiszGEZXUgtRN4FH1hw5aHpZsg");

  $('.form-signin').on('submit', function(e) {

    // Prevent Default Submit Event
    e.preventDefault();

    // Get data from the form and put them into variables
   /* var data = $(this).serializeArray(),
        username = data[0].value,
        password = data[1].value;
    */
    
    // work around
    // TODO fix value error
    Parse.User.logIn(Grumpy, test).then(function(user) {
    var role = user.get("role");
    if (role == 1) {
        console.log("login success, role is 1");
    } else {
        console.log("login success, role is " + role);
    }
}, function(error) {
    // handle error
});

    // Call Parse Login function with those variables
    Parse.User.logIn(username, password, {
        // If the username and password matches
        success: function(user) {
            alert('Welcome!');
        },
        // If there is an error
        error: function(user, error) {
            console.log(error);
        }
    });

});

});
