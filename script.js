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
    // Here you can perform any necessary validation on the credit card details

    // Assuming the validation is successful, update the membership status
    document.getElementById("membershipStatus").innerHTML = membershipStatus;

    // Hide the upgrade form and show the user profile
    document.getElementById("upgradeForm").style.display = "none";
    document.getElementById("userProfile").style.display = "block";
    document.getElementById("intro").style.display = "none";
  }
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
