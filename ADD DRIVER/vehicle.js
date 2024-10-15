import { Header } from "./Header/Header.js";

function App() {
  const appContainer = document.getElementById("app");
  appContainer.appendChild(Header());
  appContainer.appendChild(StepProgress());
  appContainer.appendChild(Container());
  appContainer.appendChild(Footer());
}

function StepProgress() {
  const statusDiv = document.createElement("div");
  statusDiv.classList.add("status");
  statusDiv.innerHTML = `
        <a href="detail.html"><img class="back" src="ASSETS/IMAGES/group-28608@2x.png" alt=""></a>
        <div class="progress">
            <div class="step active">
                <div style="border-color: #e6f2ff;color: #e6f2ff;" class="step-number"><img
                        src="ASSETS/IMAGES/path-45313@2x.png" alt="" style="height: 14px;"></div>
                <div class="step-label">Personal Details</div>
            </div>
            <div class="Path-45302"></div>
            <div class="step active">
                <div style="border-color: #e6f2ff;color: #e6f2ff;" class="step-number">2</div>
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

function Container() {
  const container = document.createElement("div");
  container.classList.add("container-1");

  container.innerHTML = `
        <h2>Vehicle Details</h2>

        <form action="" method="POST" enctype="multipart/form-data">
            <div class="form-row">
                <div class="form-group">
                    <label for="drivingExperience">Driving Experience</label>
                    <input type="text" id="drivingExperience" name="drivingExperience"
                        placeholder="Enter Years of Experience">
                </div>
                <div class="form-group">
                    <label for="rideType">Ride Type</label>
                    <select id="rideType" name="rideType">
                        <option value="" disabled selected>Select Regular / Office / Both</option>
                        <option value="Regular">Regular</option>
                        <option value="Office">Office</option>
                        <option value="Both">Both</option>
                    </select>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="vehicleRegNo">Vehicle Registration No</label>
                    <input type="text" id="vehicleRegNo" name="vehicleRegNo" placeholder="Enter Registration No">
                </div>
                <div class="form-group">
                    <label for="vehicleType">Vehicle Type</label>
                    <select id="vehicleType" name="vehicleType">
                        <option value="" disabled selected>Select Vehicle Type</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Truck">Truck</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="vehicleBrand">Vehicle Brand</label>
                    <select id="vehicleBrand" name="vehicleBrand">
                        <option value="" disabled selected>Select Vehicle Brand</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Ford">Ford</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="vehicleModel">Vehicle Model</label>
                    <select id="vehicleModel" name="vehicleModel">
                        <option value="" disabled selected>Select Vehicle Model</option>
                        <option value="Corolla">Corolla</option>
                        <option value="F-150">F-150</option>
                    </select>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="vehicleColor">Vehicle Color</label>
                    <input type="text" id="vehicleColor" name="vehicleColor" placeholder="Enter Vehicle Color">
                </div>
                <div class="form-group">
                    <label for="fuelType">Fuel Type</label>
                    <select id="fuelType" name="fuelType">
                        <option value="" disabled selected>Select Fuel Type</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Electric">Electric</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="manufactureYear">Manufacture Year</label>
                    <select id="manufactureYear" name="manufactureYear">
                        <option value="" disabled selected>Select Manufacture Year</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="seatCapacity">Seat Capacity</label>
                    <select id="seatCapacity" name="seatCapacity">
                        <option value="" disabled selected>Select Seat Capacity</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="mileageRange">Mileage Range</label>
                    <select id="mileageRange" name="mileageRange">
                        <option value="" disabled selected>Select Mileage Range</option>
                        <option value="10-15">10-15 kmpl</option>
                        <option value="15-20">15-20 kmpl</option>
                    </select>
                </div>

            </div>

            <div class="Profile">
                <div class="form-row">
                    <img class="profile-pic" src="ASSETS/IMAGES/group-28721@2x.png" alt="" style="height: 95px;">
                    <div class="pic">
                        <label for="profilePicture">Profile Picture</label>
                        <p style="color: #969292;">Maximum size : 2 MBI Minimum Resolution : 1000px, Format :
                            JPG, PNG
                        </p>
                        <button type="submit" class="Browser-btn">Browse</button>
                    </div>

                </div>
            </div>


        </form>
        `;

  return container;
}

function Footer() {
  const footer = document.createElement("div");
  footer.classList.add("form-buttons");
  footer.innerHTML = `
       <button type="button" class="cancel-btn">Cancel</button>
        <a href="detail.html"><button type="button" class="back-btn">Back</button></a>
        <a href="doc.html"><button onclick="" type="submit" class="next-btn">Next</button></a>
    `;
  return footer;
}

App();
