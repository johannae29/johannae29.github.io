/**
 * Email form validation
 * Author: Johanna Erlandsson
 */

function validateForm() {
    var x = document.forms["email-form"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  /*<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" 
  method="post">
  Name: <input type="text" name="fname">
  <input type="submit" value="Submit">
</form>*/