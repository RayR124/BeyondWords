let loggedInUser = null;
let membershipStatus = "free"; // Default membership status

function showSignupForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
}

function showLoginForm() {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

function signup(event) {
  event.preventDefault(); // Prevent default form submission behavior
  let newUsername = document.getElementById("newUsername").value;
  let newPassword = document.getElementById("newPassword").value;

  // Check if the fields have values
  if (username === "" || password === "") {
    // Display a popup or error message
    alert("Username and password fields cannot be empty.");
  } else {
    // Perform signup logic here, e.g., creating a new user account

    // Assuming signup is successful, update the logged-in user
    loggedInUser = newUsername;

    // Display the user profile with the appropriate membership status
    document.getElementById("loggedInUsername").innerHTML = loggedInUser;
    document.getElementById("membershipStatus").innerHTML = membershipStatus;

    // Hide the signup form and show the user profile
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("userProfile").style.display = "block";
  }
}

function login(event) {
  event.preventDefault(); // Prevent default form submission behavior
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Check if the fields have values
  if (username === "" || password === "") {
    // Display a popup or error message
    alert("Username and password fields cannot be empty.");
  } else {
    // Perform login logic here, e.g., verifying username and password

    // Assuming login is successful, update the logged-in user
    loggedInUser = username;

    // Display the user profile with the appropriate membership status
    document.getElementById("loggedInUsername").innerHTML = loggedInUser;
    document.getElementById("membershipStatus").innerHTML = membershipStatus;

    // Hide the login form and show the user profile
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("userProfile").style.display = "block";
  }
}

function upgradeBasicMembership() {
  // Logic for membership upgrade
  if (membershipStatus === "free") {
    membershipStatus = "basic";
  } else if (membershipStatus === "basic") {
    membershipStatus = "premium";
  }

  showContentBasedOnMembershipStatus();
  //document.getElementById("upgradeButton").style.display = "none";
  document.getElementById("userProfile").style.display = "none";
  document.getElementById("upgradeBasicButton").style.display = "none";
  document.getElementById("upgradeForm").style.display = "block";
}

function upgradePremiumMembership() {
  // Logic for membership upgrade
  if (membershipStatus === "basic" || "free") {
    membershipStatus = "premium";
  }

  showContentBasedOnMembershipStatus();
  //document.getElementById("upgradeButton").style.display = "none";
  document.getElementById("userProfile").style.display = "none";
  document.getElementById("upgradeForm").style.display = "block";
  document.getElementById("upgradeBasicButton").style.display = "none";
  document.getElementById("upgradePremiumButton").style.display = "none";
}

function submitUpgrade(event) {
  event.preventDefault(); // Prevent default form submission behavior
  let creditCard = document.getElementById("creditCard").value;
  let expiryDate = document.getElementById("expiryDate").value;
  let cvv = document.getElementById("cvv").value;

  if (creditCard === "" || expiryDate === "" || cvv === "") {
    // Display a popup or error message
    alert("All credit card information must be present to proceed.");
  } else {
    // Assuming the validation is successful, update the membership status
    if (membershipStatus === "free" && creditCardValidated()) {
      membershipStatus = "basic";
    } else if (membershipStatus === "basic" || membershipStatus === "free" && creditCardValidated()) {
      membershipStatus = "premium";
    }

    // Display the updated membership status
    document.getElementById("membershipStatus").innerHTML = membershipStatus;

    // Hide the upgrade form
    document.getElementById("upgradeForm").style.display = "none";

    // Show the user profile and content
    document.getElementById("userProfile").style.display = "block";
    document.getElementById("intro").style.display = "none";
    showContentBasedOnMembershipStatus();
  }
}

function creditCardValidated() {
  // Get the credit card details
  let creditCardNumber = document.getElementById("creditCard").value;
  let expiryDate = document.getElementById("expiryDate").value;
  let cvv = document.getElementById("cvv").value;

  // Validate the credit card number
  if (!isValidCreditCardNumber(creditCardNumber)) {
    alert("Invalid credit card number");
    return false;
  }

  // Validate the expiration date
  if (!isValidExpiryDate(expiryDate)) {
    alert("Invalid expiration date");
    return false;
  }

  // Validate the CVV
  if (!isValidCVV(cvv)) {
    alert("Invalid CVV");
    return false;
  }

  // All validation checks passed
  return true;
}

function isValidCreditCardNumber(creditCardNumber) {
  // Implement credit card number validation logic here
  // Return true if the credit card number is valid; otherwise, return false
  return creditCardNumber.length === 16; // Example: Check if the credit card number has 16 digits
}

function isValidExpiryDate(expiryDate) {
  // Implement expiration date validation logic here
  // Return true if the expiration date is valid; otherwise, return false
  return expiryDate.length === 4; // Example: Check if the expiry date has 4 digits (MMYY format)
}

function isValidCVV(cvv) {
  // Implement CVV validation logic here
  // Return true if the CVV is valid; otherwise, return false
  return cvv.length === 3; // Example: Check if the CVV has 3 digits
}

function showContentBasedOnMembershipStatus() {
  if (membershipStatus === "free") {
    document.getElementById("freeContent").style.display = "block";
    document.getElementById("basicContent").style.display = "none";
    document.getElementById("premiumContent").style.display = "none";
  } else if (membershipStatus === "basic") {
    document.getElementById("freeContent").style.display = "none";
    document.getElementById("basicContent").style.display = "block";
    document.getElementById("premiumContent").style.display = "none";
  } else if (membershipStatus === "premium") {
    document.getElementById("freeContent").style.display = "none";
    document.getElementById("basicContent").style.display = "none";
    document.getElementById("premiumContent").style.display = "block";
  }
}

// Other functions for login, signup, and content display

// Call the function to initially show the appropriate content based on membership status
showContentBasedOnMembershipStatus();

function saveData() {
  var name = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var message = document.getElementById("message").value;

  // Perform actions with the captured values

  alert("Data saved successfully!");
}