const {
  addPersonalDetails,
  addVehicleDetails,
  addClientDetails,
  addBankDetails,
} = require("../../CONFIG/Api_Calls.js");

import Driver_Profile from "../../ASSETS/IMAGES/group-28720@2x.png";
import vehicle_image from "../../ASSETS/IMAGES/group-28721@2x.png";
import Bank_Profile from "../../ASSETS/IMAGES/group-28722@2x.png";
import pluss from "../../ASSETS/IMAGES/path-38511@2x.png";
import Fair_info from "../../ASSETS/IMAGES/path-44933@2x.png";
import Rupee from "../../ASSETS/IMAGES/path-44930@2x.png";

class BankDetails {
  constructor() {
    this.config = {
      bankNames: ["Indian Bank", "Central Bank", "SBI" , "HDFC"],
      accountHolderLabel: "Account Holder's Name",
      accountNumberLabel: "Account Number",
      confirmAccountNumberLabel: "Confirm Account Number",
      profilePictureLabel: "Profile Picture",
      uploadedBankPictureUrl: "",
    };
  }

  render() {
    return `
    <div class="container-1">
        <div class="bank-details-section">
            <div class="section-title">
                <h2>Primary Bank Details</h2>
            </div>
            <form>
                <div class="bank-form-row">
                    ${this.renderInputField(
                      "accountHolderName",
                      this.config.accountHolderLabel,
                      "Enter Account Holders Name"
                    )}
                    ${this.renderInputField(
                      "accountNumber",
                      this.config.accountNumberLabel,
                      "Enter Account No"
                    )}
                    ${this.renderInputField(
                      "confirmAccountNumber",
                      this.config.confirmAccountNumberLabel,
                      "Enter Account No"
                    )}
                    ${this.renderBankDropdown(
                      "bankName",
                      "Select Bank",
                      this.config.bankNames
                    )}
                </div>

                <div class="Profile">
                    ${this.renderProfilePictureSection(
                      "PassBookPicture",
                      this.config.profilePictureLabel
                    )}
                </div>

                <div class="Add">
                    <img src=${pluss} alt="">
                    <a href="#" class="add-secondary-bank">Add Secondary Bank Details</a>
                </div>
            </form>
        </div>
        ${this.renderButtons()}
    </div>
    `;
  }

  renderInputField(id, label, placeholder) {
    return `
      <div class="bank-form-group">
        <label for="${id}">${label}</label>
        <input type="text" id="${id}" placeholder="${placeholder}">
      </div>
    `;
  }

  renderBankDropdown(id, label, bankNames) {
    const options = bankNames
      .map((bank) => `<option value="${bank}">${bank}</option>`)
      .join("");
    return `
      <div class="bank-form-group">
        <label for="${id}">${label}</label>
        <select id="${id}">
          <option value="" disabled selected>Select Bank</option>
          ${options}
        </select>
      </div>
    `;
  }

  renderProfilePictureSection(id, label) {
    return `
      <div class="profile-row">
        <img id="PassBookPicturePreview" class="profile-pic" src=${Bank_Profile} alt="bankpass" style="height: 95px;">
        <div class="pic">
          <label for="${id}">${label}</label>
          <p style="color: #969292;">Maximum size : 2 MB | Minimum Resolution : 1000px, Format : JPG, PNG</p>
          <input type="file" id="${id}" accept="image/jpeg, image/png">
        </div>
      </div>
    `;
  }

  renderButtons() {
    return `
      <div class="form-buttons">
        <button type="button" class="cancel-btn">Cancel</button>
        <button type="button" class="back-btn">Back</button>
        <button type="button" id="next-btn-b" class="next-btn">Next</button>
      </div>
    `;
  }

  addEventListeners(nextPageCallback) {
    const BookPictureInput = document.getElementById("PassBookPicture");
    const BookPicturePreview = document.getElementById(
      "PassBookPicturePreview"
    );

    BookPictureInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        if (file.size > 2 * 1024 * 1024) {
          alert("File size exceeds 2MB.");
          BookPictureInput.value = "";
          BookPicturePreview.src = "";
          return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
          BookPicturePreview.src = event.target.result;
        };
        reader.readAsDataURL(file);

        this.uploadedBankPicture = file;
      }
    });

    const nextBtn = document.getElementById("next-btn-b");
    nextBtn.addEventListener("click", async (event) => {
      event.preventDefault();
      try {
        const formData = this.collectBankFormData();
        const result = await addBankDetails(formData);
        if (result.success) {
          nextPageCallback();
        } else {
          console.error("Error response from server:", result.error);
        }
      } catch (error) {
        console.error("Error during form submission:", error);
      }
    });
  }

  collectBankFormData() {
    const formData = new FormData();
    formData.append(
      "accountHolderName",
      document.getElementById("accountHolderName").value
    );
    formData.append(
      "accountNumber",
      document.getElementById("accountNumber").value
    );
    formData.append(
      "confirmAccountNumber",
      document.getElementById("confirmAccountNumber").value
    );
    formData.append("bankName", document.getElementById("bankName").value);

    const PassBookPicture = document.getElementById("PassBookPicture").files[0];
    if (PassBookPicture) {
      formData.append("PassBookPicture", PassBookPicture);
    }

    return formData;
  }
}


// PersonalDetails.js
class PersonalDetail {
  constructor() {
    this.uploadedProfilePictureUrl = "";
  }

  render() {
    return `
      <div class="container-1">
        <form id="personal-details-form" class="personal-details-form">
          <div class="section-title">
            <h2>Personal Details</h2>
          </div>
          ${this.renderPersonalDetails()}
          ${this.renderAddressDetails()}
          ${this.renderButtons()}
        </form>
      </div>
      <br><br>
    `;
  }

  renderPersonalDetails() {
    return `
      <div class="detail-form-row">
        <div class="detail-form-group">
          <label for="driverType">Driver Type</label>
          <select id="driverType">
            <option value="" disabled selected hidden>Select Owner / Driver / Both</option>
            <option value="owner">Owner</option>
            <option value="driver">Driver</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div class="detail-form-group">
          <label for="serviceType">Service Type</label>
          <select id="serviceType">
            <option value="" disabled selected hidden>Select Fleet / Attachment</option>
            <option value="fleet">Fleet</option>
            <option value="attachment">Attachment</option>
          </select>
        </div>
        <div class="detail-form-group">
          <label for="driverID">Driver ID</label>
          <input type="text" id="driverID" placeholder="Enter ID">
        </div>
      </div>
      ${this.renderProfilePicture()}
      <div class="detail-form-row">
        <div class="detail-form-group">
          <label for="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="Enter Name">
        </div>
        <div class="detail-form-group">
          <label for="phoneNumber">Phone Number</label>
          <input type="text" id="phoneNumber" placeholder="Enter Number">
        </div>
        <div class="detail-form-group">
          <label for="gender">Gender</label>
          <select id="gender">
            <option value="" disabled selected hidden>Choose Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div class="detail-form-group">
          <label for="dob">Date of Birth</label>
          <input type="date" id="dob" placeholder="DD/MM/YYYY">
        </div>
      </div>
    `;
  }

  renderProfilePicture() {
    return `
      <div class="Profile">
        <div class="profile-row">
          <img id="profilePicturePreview" class="profile-pic" src="${Driver_Profile}" alt="Profile Picture" style="height: 95px;">
          <div class="pic">
            <label for="profilePicture">Profile Picture</label>
            <p style="color: #969292; max-width: 100%;">Maximum size: 2 MB | Minimum Resolution: 1000px, Format: JPG, PNG</p>
            <input type="file" id="profilePicture" accept="image/jpeg, image/png">
          </div>
        </div>
      </div>
    `;
  }

  renderAddressDetails() {
    return `
      <div class="section-title">
        <h3>Address Details</h3>
      </div>
      <div class="detail-form-row">
        <div class="detail-form-group">
          <label for="addressLine1">Address Line 1</label>
          <input type="text" id="addressLine1" placeholder="Enter Address">
        </div>
        <div class="detail-form-group">
          <label for="addressLine2">Address Line 2</label>
          <input type="text" id="addressLine2" placeholder="Enter Address">
        </div>
        <div class="detail-form-group">
          <label for="city">City</label>
          <input type="text" id="city" placeholder="Enter City">
        </div>
        <div class="detail-form-group">
          <label for="state">State</label>
          <select id="state">
            <option value="" disabled selected hidden>Select State</option>
            <option value="TamilNadu">Tamil Nadu</option>
            <option value="Kerala">Kerala</option>
            <option value="Karnataka">Karnataka</option>
          </select>
        </div>
      </div>
      <div class="detail-form-row">
        <div class="detail-form-group">
          <label for="country">Country</label>
          <select id="country">
            <option value="" disabled selected hidden>Select Country</option>
            <option value="India">India</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Japan">Japan</option>
          </select>
        </div>
        <div class="detail-form-group">
          <label for="pinCode">Pin Code</label>
          <input type="text" id="pinCode" placeholder="Enter Pin Code">
        </div>
      </div>
    `;
  }

  renderButtons() {
    return `
      <div class="detail-form-buttons">
        <button type="button" class="cancel-btn">Cancel</button>
        <button type="button" id="next-btn" class="next-btn">Next</button>
      </div>`;
  }

  addEventListeners(nextPageCallback) {
    const profilePictureInput = document.getElementById("profilePicture");

    profilePictureInput.addEventListener("change", (e) => {
      this.handleProfilePictureChange(e);
    });

    const nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener("click", async (event) => {
      await this.handleNextButtonClick(event, nextPageCallback);
    });
  }

  handleProfilePictureChange(event) {
    const file = event.target.files[0];
    const profilePicturePreview = document.getElementById(
      "profilePicturePreview"
    );

    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size exceeds 2MB.");
        event.target.value = "";
        profilePicturePreview.src = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        profilePicturePreview.src = e.target.result;
        this.uploadedProfilePictureUrl = e.target.result; // Store the URL for later use
      };
      reader.readAsDataURL(file);
    }
  }

  async handleNextButtonClick(event, nextPageCallback) {
    event.preventDefault();

    try {
      const formData = this.collectFormData();
      const result = await addPersonalDetails(formData); // API calls

      if (result.success) {
        nextPageCallback();
      } else {
        console.error("Error response from server:", result.error);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  }

  collectFormData() {
    const formData = new FormData();

    formData.append("driverType", document.getElementById("driverType").value);
    formData.append(
      "serviceType",
      document.getElementById("serviceType").value
    );
    formData.append("driverID", document.getElementById("driverID").value);
    formData.append("fullName", document.getElementById("fullName").value);
    formData.append(
      "phoneNumber",
      document.getElementById("phoneNumber").value
    );
    formData.append("gender", document.getElementById("gender").value);
    formData.append("dob", document.getElementById("dob").value);
    formData.append(
      "addressLine1",
      document.getElementById("addressLine1").value
    );
    formData.append(
      "addressLine2",
      document.getElementById("addressLine2").value
    );
    formData.append("city", document.getElementById("city").value);
    formData.append("state", document.getElementById("state").value);
    formData.append("country", document.getElementById("country").value);
    formData.append("pinCode", document.getElementById("pinCode").value);

    const profilePicture = document.getElementById("profilePicture").files[0];
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    return formData;
  }
}

class VehicleDetails {
  constructor() {
    this.uploadedVehiclePictureUrl = "";
  }

  render() {
    return `
      <div class="container-1">
        <h2>Vehicle Details</h2>
        <form>
          ${this.renderVehicleForm()}
          ${this.renderProfilePicture()}
        </form>
      </div>
      ${this.renderButtons()}
      <br><br>
    `;
  }

  renderVehicleForm() {
    return `
      <div class="veh-form-row">
        ${this.renderDrivingExperience()}
        ${this.renderRideType()}
      </div>
      <div class="veh-form-row">
        ${this.renderVehicleRegistration()}
        ${this.renderVehicleType()}
        ${this.renderVehicleBrand()}
        ${this.renderVehicleModel()}
      </div>
      <div class="veh-form-row">
        ${this.renderVehicleColor()}
        ${this.renderFuelType()}
        ${this.renderManufactureYear()}
        ${this.renderSeatCapacity()}
      </div>
      <div class="veh-form-row">
        ${this.renderMileageRange()}
      </div>
    `;
  }

  renderDrivingExperience() {
    return `
      <div class="veh-form-group">
        <label for="drivingExperience">Driving Experience</label>
        <input type="text" id="drivingExperience" name="drivingExperience" placeholder="Enter Years of Experience">
      </div>
    `;
  }

  renderRideType() {
    return `
      <div class="veh-form-group">
        <label for="rideType">Ride Type</label>
        <select id="rideType" name="rideType">
          <option value="" disabled selected>Select Regular / Office / Both</option>
          <option value="Regular">Regular</option>
          <option value="Office">Office</option>
          <option value="Both">Both</option>
        </select>
      </div>
    `;
  }

  renderVehicleRegistration() {
    return `
      <div class="veh-form-group">
        <label for="vehicleRegNo">Vehicle Registration No</label>
        <input type="text" id="vehicleRegNo" name="vehicleRegNo" placeholder="Enter Registration No">
      </div>
    `;
  }

  renderVehicleType() {
    return `
      <div class="veh-form-group">
        <label for="vehicleType">Vehicle Type</label>
        <select id="vehicleType" name="vehicleType">
          <option value="" disabled selected>Select Vehicle Type</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Truck">Truck</option>
        </select>
      </div>
    `;
  }

  renderVehicleBrand() {
    return `
      <div class="veh-form-group">
        <label for="vehicleBrand">Vehicle Brand</label>
        <select id="vehicleBrand" name="vehicleBrand">
          <option value="" disabled selected>Select Vehicle Brand</option>
          <option value="Toyota">Toyota</option>
          <option value="Ford">Ford</option>
        </select>
      </div>
    `;
  }

  renderVehicleModel() {
    return `
      <div class="veh-form-group">
        <label for="vehicleModel">Vehicle Model</label>
        <select id="vehicleModel" name="vehicleModel">
          <option value="" disabled selected>Select Vehicle Model</option>
          <option value="Corolla">Corolla</option>
          <option value="F-150">F-150</option>
        </select>
      </div>
    `;
  }

  renderVehicleColor() {
    return `
      <div class="veh-form-group">
        <label for="vehicleColor">Vehicle Color</label>
        <input type="text" id="vehicleColor" name="vehicleColor" placeholder="Enter Vehicle Color">
      </div>
    `;
  }

  renderFuelType() {
    return `
      <div class="veh-form-group">
        <label for="fuelType">Fuel Type</label>
        <select id="fuelType" name="fuelType">
          <option value="" disabled selected>Select Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>
      </div>
    `;
  }

  renderManufactureYear() {
    return `
      <div class="veh-form-group">
        <label for="manufactureYear">Manufacture Year</label>
        <select id="manufactureYear" name="manufactureYear">
          <option value="" disabled selected>Select Manufacture Year</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    `;
  }

  renderSeatCapacity() {
    return `
      <div class="veh-form-group">
        <label for="seatCapacity">Seat Capacity</label>
        <select id="seatCapacity" name="seatCapacity">
          <option value="" disabled selected>Select Seat Capacity</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    `;
  }

  renderMileageRange() {
    return `
      <div class="veh-form-group">
        <label for="mileageRange">Mileage Range</label>
        <select id="mileageRange" name="mileageRange">
          <option value="" disabled selected>Select Mileage Range</option>
          <option value="10-15">10-15 kmpl</option>
          <option value="15-20">15-20 kmpl</option>
        </select>
      </div>
    `;
  }

  renderProfilePicture() {
    return `
      <div class="Profile">
        <div class="profile-row">
          <img id="vehiclePicturePreview" class="profile-pic" src=${vehicle_image} alt="Vehicle Image" style="height: 95px;">
          <div class="pic">
            <label for="vehiclePicture">Profile Picture</label>
            <p style="color: #969292;">Maximum size : 2 MB. Minimum Resolution : 1000px, Format : JPG, PNG</p>
            <input type="file" id="vehiclePicture" accept="image/jpeg, image/png">
          </div>
        </div>
      </div>
    `;
  }

  renderButtons() {
    return `
      <div class="form-buttons">
        <button type="button" class="cancel-btn">Cancel</button>
        <button type="button" class="back-btn">Back</button>
        <button type="button" id="next-btn-v" class="next-btn">Next</button>
      </div>
    `;
  }

  addEventListeners(nextPageCallback) {
    const vehiclePictureInput = document.getElementById("vehiclePicture");

    vehiclePictureInput.addEventListener("change", (e) =>
      this.handleProfilePictureChange(e)
    );

    const nextBtn = document.getElementById("next-btn-v");
    nextBtn.addEventListener("click", async (event) => {
      await this.handleNextButtonClick(event, nextPageCallback);
    });
  }
  handleProfilePictureChange(event) {
    const file = event.target.files[0];
    const vehiclePicturePreview = document.getElementById(
      "vehiclePicturePreview"
    );

    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size exceeds 2MB.");
        event.target.value = "";
        vehiclePicturePreview.src = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        vehiclePicturePreview.src = event.target.result;
      };
      reader.readAsDataURL(file);
      this.uploadedVehiclePictureUrl = file;
    }
  }
  async handleNextButtonClick(event, nextPageCallback) {
    event.preventDefault();

    try {
      const formData = this.collectVehicleFormData();
      const result = await addVehicleDetails(formData); // API call

      if (result.success) {
        nextPageCallback();
      } else {
        console.error("Error response from server:", result.error);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  }

  collectVehicleFormData() {
    const formData = new FormData();
    formData.append(
      "drivingExperience",
      document.getElementById("drivingExperience").value
    );
    formData.append("rideType", document.getElementById("rideType").value);
    formData.append(
      "vehicleRegNo",
      document.getElementById("vehicleRegNo").value
    );
    formData.append(
      "vehicleType",
      document.getElementById("vehicleType").value
    );
    formData.append(
      "vehicleBrand",
      document.getElementById("vehicleBrand").value
    );
    formData.append(
      "vehicleModel",
      document.getElementById("vehicleModel").value
    );
    formData.append(
      "vehicleColor",
      document.getElementById("vehicleColor").value
    );
    formData.append("fuelType", document.getElementById("fuelType").value);
    formData.append(
      "manufactureYear",
      document.getElementById("manufactureYear").value
    );
    formData.append(
      "seatCapacity",
      document.getElementById("seatCapacity").value
    );
    formData.append(
      "mileageRange",
      document.getElementById("mileageRange").value
    );

    const vehiclePicture = document.getElementById("vehiclePicture").files[0];
    // if (vehiclePicture) {
    formData.append("vehiclePicture", vehiclePicture); // Only append if file exists
    // }

    return formData;
  }
}

class ClientDetails {
  render() {
    return `
    <div class="container-1">
        <div class="form-title">Client Details</div>
            
            <div class="client-form-row">
                <div class="client-form-group">
                    <label for="clientName">Client Name</label>
                    <input type="text" id="clientName" placeholder="Enter client Name">
                </div>
                <div class="client-form-group">
                    <label for="siteName">Site Name</label>
                    <input type="text" id="siteName" placeholder="Enter Site">
                    <!-- Tags for selected locations -->
                    <div class="tags" id="tags-container"></div>
                </div>

                <div class="client-form-group">
                    <label for="location">Location</label>
                    <select id="location">
                        <option value="">Select Location</option>
                        <option value="Taramani">Taramani</option>
                        <option value="Tambaram">Tambaram</option>
                        <option value="Velachery">Velachery</option>
                    </select>
                </div>

                <div class="client-form-group">
                    <label for="tripType">Trip Type</label>
                    <select id="tripType">
                        <option value="">Select Trip Type</option>
                        <option value="kilometer">Kilometer</option>
                        <option value="hourly">Hourly</option>
                    </select>
                </div>
                <div class="client-form-group">
                    <label>Fare Details</label>
                    <div  class="fare-buttons">
                        <button type="button" class="check-fare"><img src=${Fair_info} style="height: 12px;width: auto;padding-right: 3px;" alt="">Check Fare</button>
                        <button type="button" class="edit-fare"><img src=${Rupee} style="height: 11px;width: auto; padding-right: 2px;" alt=""> Edit Fare</button>
                    </div>
                </div>
            </div>

            <div class="Add">
                <img src=${pluss} alt="">
                <a href="#" class="add-secondary-bank">Add Secondary Bank Details</a>
            </div>
    </div>
        ${this.btn_render()}
    `;
  }

  addEventListeners(nextPageCallback) {
    const siteNameInput = document.getElementById("siteName");
    if (siteNameInput) {
      siteNameInput.addEventListener("keypress", (event) =>
        this.handleKeyPress(event)
      );
    }

    const nextBtn = document.getElementById("next-btn-c");
    if (nextBtn) {
      nextBtn.addEventListener("click", async (event) => {
        event.preventDefault();
        try {
          const formData = this.collectClientFormData();
          const result = await addClientDetails(formData);

          if (result.success) {
            nextPageCallback();
          } else {
            console.error("Error response from server:", result.error);
          }
        } catch (error) {
          console.error("Error during form submission:", error);
        }
      });
    }
  }

  handleKeyPress(event) {
    const input = document.getElementById("siteName");
    const tagsContainer = document.getElementById("tags-container");

    if (event.key === "Enter" && input.value.trim() !== "") {
      event.preventDefault();
      const tagDiv = document.createElement("div");
      tagDiv.className = "tag";

      const tagText = document.createElement("span");
      tagText.textContent = input.value.trim();

      const removeButton = document.createElement("button");
      removeButton.innerHTML = "&times;";
      removeButton.addEventListener("click", function () {
        tagsContainer.removeChild(tagDiv);
      });
      tagDiv.appendChild(tagText);
      tagDiv.appendChild(removeButton);

      tagsContainer.appendChild(tagDiv);
      input.value = "";
    }
  }

  collectClientFormData() {
    const formData = new FormData();
    formData.append("clientName", document.getElementById("clientName").value);

    const tagsContainer = document.getElementById("tags-container");
    const tags = [];
    tagsContainer.querySelectorAll(".tag span").forEach((tag) => {
      tags.push(tag.textContent);
    });

    const siteName = tags.join(",");

    formData.append("siteName", siteName);
    formData.append("location", document.getElementById("location").value);
    formData.append("tripType", document.getElementById("tripType").value);

    return formData;
  }

  btn_render() {
    return `
      <div class="form-buttons">
        <button type="button" class="cancel-btn">Cancel</button>
        <button type="button" class="back-btn">Back</button>
        <button type="button" id="next-btn-c" class="next-btn">Next</button>
        </div>
    `;
  }
}

// Document.js
class Document {
  render() {
    return `
    <div class="container-1">
        <h2>Driver Documents</h2>
        <div class="doc-form-row">
            <div class="doc-form-group">
                <label for="aadhar-number">Aadhar Card Number</label>
                <input type="text" id="aadhar-number" placeholder="Enter Aadhar Card No">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
            <div class="doc-form-group">
                <!-- <div class="checkmark"></div> -->
                <label for="pan-number">PAN Card Number</label>
                <input type="text" id="pan-number" placeholder="Enter PAN Card No">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
        </div>

        <!-- Driver Badge -->
        <div class="doc-form-row">
            <div class="doc-form-group">
                <label for="badge-id">Badge ID Number</label>
                <input type="text" id="badge-id" placeholder="Enter Badge ID No">
            </div>
            <div class="doc-form-group">
                <label for="start-date-badge">Start Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="doc-form-group">
                <label for="expiry-date-badge">Expiry Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
        </div>

        <!-- Driver License -->
        <div class="doc-form-row">
            <div class="doc-form-group">
                <label for="license-number">License Number</label>
                <input type="text" id="license-number" placeholder="Enter License Number">
            </div>
            <div class="doc-form-group">
                <label for="start-date-license">Start Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="doc-form-group">
                <label for="expiry-date-license">Expiry Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
        </div>

        <!-- PVC Document -->
        <div class="doc-form-row">
            <div class="doc-form-group">
                <label for="pvc-number">Police Verification Certificate</label>
                <input type="text" id="pvc-number" placeholder="Enter PVC Number">
            </div>
            <div class="doc-form-group">
                <label for="start-date-pvc">Start Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="doc-form-group">
                <label for="expiry-date-pvc">Expiry Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
        </div>

        <!-- Vehicle Documents Section -->
        <h2>Vehicle Documents</h2>

        <!-- Insurance -->
        <div class="doc-form-row">
            <div class="doc-form-group">
                <label for="insurance-id">Insurance Name/ID</label>
                <input type="text" id="insurance-id" placeholder="Enter Insurance Name/ID No">
            </div>
            <div class="doc-form-group">
                <label for="start-date-insurance">Start Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="doc-form-group">
                <label for="expiry-date-insurance">Expiry Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY" <input type="text" id="dob"
                    placeholder="DD/MM/YYYY">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
        </div>

        <!-- RC Book -->
        <div class="doc-form-row">
            <div class="doc-form-group">
                <label for="rc-book">RC Book</label>
                <input type="text" id="rc-book" placeholder="Enter License Number">
            </div>
            <div class="doc-form-group">
                <label for="start-date-rc">Start Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="doc-form-group">
                <label for="expiry-date-rc">Expiry Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
        </div>

        <!-- Fitness Certificate -->
        <div class="doc-form-row">
            <div class="doc-form-group">
                <label for="fitness-certificate">Fitness Certificate</label>
                <input type="text" id="fitness-certificate" placeholder="Enter Fitness Certificate Number">
            </div>
            <div class="doc-form-group">
                <label for="start-date-fitness">Start Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="doc-form-group">
                <label for="expiry-date-fitness">Expiry Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
        </div>

        <!-- Vehicle Verification -->
        <h2>Vehicle Verification</h2>

        <!-- Registration Number -->
        <div class="doc-form-row">
            <div class="doc-form-group">
                <label for="registration-no">Registration Number</label>
                <input type="text" id="registration-no" placeholder="Enter Registration No">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
            <div class="doc-form-group">
                <label for="engine-number">Engine Number</label>
                <input type="text" id="engine-number" placeholder="Enter Engine Number">
            </div>
            <div class="upload-container">
                <label for="fileUpload" class="upload-label">Upload Document</label>
                <div class="upload-wrapper">
                  <div class="file-status">
                    <span class="file-name">No file chosen</span>
                    <span class="status-icon"></span>
                  </div>
                  <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
                  <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
                </div>
            </div>
        </div>

        <!-- Chassis Number -->
        <div class="doc-form-row">
            <div class="doc-form-group">
                <label for="chassis-number">Chassis Number</label>
                <input type="text" id="chassis-number" placeholder="Enter Chassis Number">
            </div>
            <div class="upload-container">
        <label for="fileUpload" class="upload-label">Upload Document</label>
        <div class="upload-wrapper">
            <div class="file-status">
                <span class="file-name">No file chosen</span>
                <span class="status-icon"></span>
            </div>
            <input type="file" id="fileUpload" class="file-input" onchange="handleFileUpload()">
            <button type="button" class="browser-btn" onclick="document.getElementById('fileUpload').click()">Browse</button>
        </div>
    </div>
        </div>

    </div>
    
    <div class="form-buttons">
        ${this.btn_render()}
    </div>
    <br><br>
        `;
  }

  btn_render() {
    return ` 
            <button type="button" class="cancel-btn">Cancel</button>
      <button type="button" class="back-btn">Back</button>
      <button type="button" id="next-btn-s" class="sub-btn">SUBMIT</button>
            `;
  }

  collectDocFormData() {
    const formData = new FormData();

    // Driver document fields
    formData.append(
      "aadharNumber",
      document.getElementById("aadhar-number").value
    );
    formData.append(
      "aadharDocument",
      document.getElementById("aadhar-file").files[0]
    );
    formData.append("panNumber", document.getElementById("pan-number").value);
    formData.append(
      "panDocument",
      document.getElementById("pan-file").files[0]
    );
    formData.append("badgeIDNumber", document.getElementById("badge-id").value);
    formData.append(
      "badgeStartDate",
      document.getElementById("start-date-badge").value
    );
    formData.append(
      "badgeExpiryDate",
      document.getElementById("expiry-date-badge").value
    );
    formData.append(
      "badgeIDDocument",
      document.getElementById("badge-file").files[0]
    );
    formData.append(
      "licenseNumber",
      document.getElementById("license-number").value
    );
    formData.append(
      "licenseStartDate",
      document.getElementById("start-date-license").value
    );
    formData.append(
      "licenseExpiryDate",
      document.getElementById("expiry-date-license").value
    );
    formData.append(
      "licenseDocument",
      document.getElementById("license-file").files[0]
    );
    formData.append("pvcNumber", document.getElementById("pvc-number").value);
    formData.append(
      "pvcStartDate",
      document.getElementById("start-date-pvc").value
    );
    formData.append(
      "pvcExpiryDate",
      document.getElementById("expiry-date-pvc").value
    );
    formData.append(
      "pvcDocument",
      document.getElementById("pvc-file").files[0]
    );

    // Vehicle document fields
    formData.append(
      "insurance_name_id",
      document.getElementById("insurance-id").value
    );
    formData.append(
      "insurance_start_date",
      document.getElementById("start-date-insurance").value
    );
    formData.append(
      "insurance_expiry_date",
      document.getElementById("expiry-date-insurance").value
    );
    formData.append(
      "insurance_document",
      document.getElementById("insurance-file").files[0]
    );
    formData.append("rc_book_no", document.getElementById("rc-book").value);
    formData.append(
      "rc_book_start_date",
      document.getElementById("start-date-rc").value
    );
    formData.append(
      "rc_book_expiry_date",
      document.getElementById("expiry-date-rc").value
    );
    formData.append(
      "rc_book_document",
      document.getElementById("rc-book-file").files[0]
    );
    formData.append(
      "fitness_certificate",
      document.getElementById("fitness-certificate").value
    );
    formData.append(
      "fitness_certificate_start_date",
      document.getElementById("start-date-fitness").value
    );
    formData.append(
      "fitness_certificate_expiry_date",
      document.getElementById("expiry-date-fitness").value
    );
    formData.append(
      "fitness_certificate_document",
      document.getElementById("fitness-file").files[0]
    );
    formData.append(
      "vehicle_registration_number",
      document.getElementById("registration-no").value
    );
    formData.append(
      "vehicle_registration_document",
      document.getElementById("registration-file").files[0]
    );
    formData.append(
      "engine_number",
      document.getElementById("engine-number").value
    );
    formData.append(
      "engine_number_document",
      document.getElementById("engine-file").files[0]
    );
    formData.append(
      "chasis_number",
      document.getElementById("chassis-number").value
    );
    formData.append(
      "chasis_number_document",
      document.getElementById("chassis-file").files[0]
    );

    return formData;
  }
  handleFileUpload() {
    const fileInput = document.getElementById("fileUpload");
    const fileNameDisplay = document.querySelector(".file-name");
    const statusIcon = document.querySelector(".status-icon");

    if (fileInput.files.length > 0) {
      const fileName = fileInput.files[0].name;
      fileNameDisplay.textContent = fileName;
      statusIcon.classList.add("success"); // Show green tick
    } else {
      fileNameDisplay.textContent = "No file chosen";
      statusIcon.classList.remove("success"); // Hide green tick
    }
  }
}

// Export both classes
export { PersonalDetail, Document, VehicleDetails, BankDetails, ClientDetails };
