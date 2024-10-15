// Main App component
import { Header } from "./Header/Header.js";

function App() {
  const appContainer = document.getElementById("app");

  appContainer.appendChild(Header());
  appContainer.appendChild(StepProgress());
  appContainer.appendChild(Form());
  appContainer.appendChild(FormButtons());
}

// function Client() {
//     const appContainer = document.getElementById('client');

//     appContainer.appendChild(Header());
//     appContainer.appendChild(StepProgress());
// appContainer.appendChild(Form());
// appContainer.appendChild(FormButtons());
// }

// Header component
// function Header() {
//     const container2 = document.createElement('div');
//     container2.classList.add('container-2');

//     const leftDiv = document.createElement('div');
//     leftDiv.classList.add('left');
//     leftDiv.innerHTML = '<p style="color: #969292;">Driver Management / <b style="color: #000000;">Add New Driver</b></p>';

//     const rightDiv = document.createElement('div');
//     rightDiv.classList.add('right');
//     rightDiv.innerHTML = `
//         <p style="color: #969292;padding-right: 8px;">Dec 01 2022 | 10:00 AM</p>
//         <div class="icons">
//             <img src="ASSETS/IMAGES/path-14055@2x.png" alt="" style="width: 17px;height: 16px;">
//             <p class="path"></p>
//             <img src="ASSETS/IMAGES/path-36@2x.png" alt="" style="width: 17px;height: 15.9px;">
//             <p class="path"></p>
//             <img src="ASSETS/IMAGES/path-35@2x.png" alt="" style="width: 14px;height: 16px;">
//         </div>
//         <div class="col">
//             <p style="font-size: 16px;"><b>Ezio Auditore</b></p>
//             <p style="font-size: 12px;color: #969292;">Admin</p>
//         </div>
//         <img src="ASSETS/IMAGES/ellipse-12@2x.png" alt="" style="height: 55px; padding: 5px;">`;

//     container2.appendChild(leftDiv);
//     container2.appendChild(rightDiv);
//     return container2;
// }

// Step Progress component
function StepProgress() {
  const statusDiv = document.createElement("div");
  statusDiv.classList.add("status");

  statusDiv.innerHTML = `
         <img class="back" src="IMAGES/group-28608@2x.png" alt="">
        <div class="progress">
            <div class="step active">
                <div style="border-color: #e6f2ff;color: #e6f2ff;" class="step-number">1</div>
                <div class="step-label">Personal Details</div>
            </div>
            <div class="Path-45302"></div>
            <div class="step">
                <div class="step-number">2</div>
                <div class="step-label">Vehicle Details</div>
            </div>
            <div class="Path-45302"></div>
            <div class="step">
                <div class="step-number">3</div>
                <div class="step-label">Document Details</div>
            </div>
            <div class="Path-45302"></div>
            <div class="step">
                <div class="step-number">4</div>
                <div class="step-label">Bank Details</div>
            </div>
            <div class="Path-45302"></div>
            <div class="step">
                <div class="step-number">5</div>
                <div class="step-label">Client Details</div>
            </div>
        </div>

    `;

  return statusDiv;
}

// Form component
function Form() {
  const formContainer = document.createElement("div");
  formContainer.classList.add("container-1");

  const formHTML = `
        <form class="personal-details-form">
            <div class="section-title">
                <h2>Personal Details</h2>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="driverType">Driver Type</label>
                    <select id="driverType">
                        <option value="" disabled selected hidden>Select Owner / Driver / Both</option>
                        <option value="owner">Owner</option>
                        <option value="driver">Driver</option>
                        <option value="both">Both</option>
                    </select>

                </div>
                <div class="form-group">
                    <label for="serviceType">Service Type</label>
                    <select id="serviceType">
                        <option>Select Fleet / Attachment</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="driverID">Driver ID</label>
                    <input type="text" id="driverID" placeholder="Enter Id">
                </div>
            </div>
            <div class="Profile">
                <div class="profile-row">
                    <img class="profile-pic" src="ASSETS/IMAGES/group-28720@2x.png" alt="" style="height: 95px;">
                    <div class="pic">
                        <label for="profilePicture">Profile Picture</label>
                        <p style="color: #969292;max-width:100%;">Maximum size : 2 MBI Minimum Resolution : 1000px, Format :
                            JPG, PNG
                        </p>
                        <button type="submit" class="Browser-btn">Browse</button>
                    </div>

                </div>
            </div>
            <div class="form-row">

                <div class="form-group">
                    <label for="fullName">Full Name</label>
                    <input type="text" id="fullName" placeholder="Enter Name">
                </div>
                <div class="form-group">
                    <label for="phoneNumber">Phone Number</label>
                    <input type="text" id="phoneNumber" class="error" placeholder="Enter Number">
                    <!-- <span class="error-msg">Invalid Parameters</span> -->
                </div>
                <div class="form-group">
                    <label for="gender">Gender</label>
                    <select id="gender">
                        <option value="" disabled selected>Choose Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="dob">Date of Birth</label>
                    <input type="text" id="dob" placeholder="DD/MM/YYYY">
                </div>
            </div>
            <div class="section-title">
                <h3>Address Details</h3>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="addressLine1">Address Line 1</label>
                    <input type="text" id="addressLine1" placeholder="Enter Address">
                </div>
                <div class="form-group">
                    <label for="addressLine2">Address Line 2</label>
                    <input type="text" id="addressLine2" placeholder="Enter Address">
                </div>
                <div class="form-group">
                    <label for="city">City</label>
                    <input type="text" id="city" placeholder="Enter City">
                </div>
                <div class="form-group">
                    <label for="state">State</label>
                    <select id="state">
                        <option>Select State</option>
                    </select>
                </div>

            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="country">Country</label>
                    <select id="country">
                        <option>Select Country</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="pinCode">Pin Code</label>
                    <input type="text" id="pinCode" placeholder="Enter Pin Code">
                </div>
            </div>
        </form>
    `;

  formContainer.innerHTML = formHTML;
  return formContainer;
}

// Form buttons component
function FormButtons() {
  const formButtonsDiv = document.createElement("div");
  formButtonsDiv.classList.add("form-buttons");

  formButtonsDiv.innerHTML = `
        <button type="button" class="cancel-btn">Cancel</button>
        <a href="vehicle.html"><button type="submit" class="next-btn">Next</button></a>
        <br>
        <br>
        <br>
    `;

  return formButtonsDiv;
}

// Initialize the app


// setTimeout( ()=>{
App();
Client();

// }, 3000) ;
