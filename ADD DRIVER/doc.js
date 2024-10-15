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
        <a href="vehicle.html"><img class="back" src="ASSETS/IMAGES/group-28608@2x.png" alt=""></a>
        <div class="progress">
            <div class="step active">
                <div style="border-color: #e6f2ff;color: #e6f2ff;" class="step-number"><img
                        src="ASSETS/IMAGES/path-45313@2x.png" alt="" style="height: 14px;"></div>
                <div class="step-label">Personal Details</div>
            </div>
            <div class="Path-45302"></div>
            <div class="step active">
               <div style="border-color: #e6f2ff;color: #e6f2ff;" class="step-number"><img
                        src="ASSETS/IMAGES/path-45313@2x.png" alt="" style="height: 14px;"></div>
                <div class="step-label">Vehicle Details</div>
            </div>
            <div class="Path-45302"></div>
            <div class="step active">
                <div style="border-color: #e6f2ff;color: #e6f2ff;" class="step-number">3</div>
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
        <h2>Driver Documents</h2>

        <!-- Aadhar Card -->
        <div class="form-row">
            <div class="form-group">
                <label for="aadhar-number">Aadhar Card Number</label>
                <input type="text" id="aadhar-number" placeholder="Enter Aadhar Card No">
            </div>
            <div class="form-group">
                <label>Upload Document</label>
                <div class="file-upload">
                    <div class="checkmark"></div>
                    <span>Driver Badge.jpg</span>
                    <button>Browse</button>
                </div>
            </div>
            <div class="form-group">
                <!-- <div class="checkmark"></div> -->
                <label for="pan-number">PAN Card Number</label>
                <input type="text" id="pan-number" placeholder="Enter PAN Card No">
            </div>
            <div class="form-group">
                <label>Upload Document</label>
                <div class="file-upload">
                    <div class="checkmark"></div>
                    <span>PANCard.jpg</span>
                    <button>Browse</button>
                </div>
            </div>
        </div>

        <!-- Driver Badge -->
        <div class="form-row">
            <div class="form-group">
                <label for="badge-id">Badge ID Number</label>
                <input type="text" id="badge-id" placeholder="Enter Badge ID No">
            </div>
            <div class="form-group">
                <label for="start-date-badge">Start Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="form-group">
                <label for="expiry-date-badge">Expiry Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="form-group">
                <label>Upload Document</label>
                <div class="file-upload">
                    <div class="checkmark"></div>
                    <span>Driver Badge.jpg</span>
                    <button>Browse</button>
                </div>
            </div>
        </div>

        <!-- Driver License -->
        <div class="form-row">
            <div class="form-group">
                <label for="license-number">License Number</label>
                <input type="text" id="license-number" placeholder="Enter License Number">
            </div>
            <div class="form-group">
                <label for="start-date-license">Start Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="form-group">
                <label for="expiry-date-license">Expiry Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="form-group">
                <label>Upload Document</label>
                <div class="file-upload">
                    <span class="span">Select Browse</span>
                    <button>Browse</button>
                </div>
            </div>
        </div>

        <!-- PVC Document -->
        <div class="form-row">
            <div class="form-group">
                <label for="pvc-number">Police Verification Certificate</label>
                <input type="text" id="pvc-number" placeholder="Enter PVC Number">
            </div>
            <div class="form-group">
                <label for="start-date-pvc">Start Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="form-group">
                <label for="expiry-date-pvc">Expiry Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="form-group">
                <label>Upload Document</label>
                <div class="file-upload">
                    <span class="span">Select Browse</span>
                    <button>Browse</button>
                </div>
            </div>
        </div>

        <!-- Vehicle Documents Section -->
        <h2>Vehicle Documents</h2>

        <!-- Insurance -->
        <div class="form-row">
            <div class="form-group">
                <label for="insurance-id">Insurance Name/ID</label>
                <input type="text" id="insurance-id" placeholder="Enter Insurance Name/ID No">
            </div>
            <div class="form-group">
                <label for="start-date-insurance">Start Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="form-group">
                <label for="expiry-date-insurance">Expiry Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY" <input type="text" id="dob"
                    placeholder="DD/MM/YYYY">
            </div>
            <div class="form-group">
                <label>Upload Document</label>
                <div class="file-upload">
                    <span class="span">Select Browse</span>
                    <button>Browse</button>
                </div>
            </div>
        </div>

        <!-- RC Book -->
        <div class="form-row">
            <div class="form-group">
                <label for="rc-book">RC Book</label>
                <input type="text" id="rc-book" placeholder="Enter License Number">
            </div>
            <div class="form-group">
                <label for="start-date-rc">Start Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="form-group">
                <label for="expiry-date-rc">Expiry Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="form-group">
                <label>Upload Document</label>
                <div class="file-upload">
                    <span class="span">Select Browse</span>
                    <button>Browse</button>
                </div>
            </div>
        </div>

        <!-- Fitness Certificate -->
        <div class="form-row">
            <div class="form-group">
                <label for="fitness-certificate">Fitness Certificate</label>
                <input type="text" id="fitness-certificate" placeholder="Enter Fitness Certificate Number">
            </div>
            <div class="form-group">
                <label for="start-date-fitness">Start Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="form-group">
                <label for="expiry-date-fitness">Expiry Date</label>
                <input type="text" id="dob" placeholder="DD/MM/YYYY">
            </div>
            <div class="form-group">
                <label>Upload Document</label>
                <div class="file-upload">
                    <span class="span">Select Browse</span>
                    <button>Browse</button>
                </div>
            </div>
        </div>

        <!-- Vehicle Verification -->
        <h2>Vehicle Verification</h2>

        <!-- Registration Number -->
        <div class="form-row">
            <div class="form-group">
                <label for="registration-no">Registration Number</label>
                <input type="text" id="registration-no" placeholder="Enter Registration No">
            </div>
            <div class="form-group">
                <label>Upload Document</label>
                <div class="file-upload">
                    <span class="span">Select Browse</span>
                    <button>Browse</button>
                </div>
            </div>
            <div class="form-group">
                <label for="engine-number">Engine Number</label>
                <input type="text" id="engine-number" placeholder="Enter Engine Number">
            </div>
            <div class="form-group">
                <label>Upload Document</label>
                <div class="file-upload">
                    <span class="span">Select Browse</span>
                    <button>Browse</button>
                </div>
            </div>
        </div>

        <!-- Chassis Number -->
        <div class="form-row">
            <div class="form-group">
                <label for="chassis-number">Chassis Number</label>
                <input type="text" id="chassis-number" placeholder="Enter Chassis Number">
            </div>
            <div class="form-group">
                <label>Upload Document</label>
                <div class="file-upload">
                    <span class="span">Select Browse</span>
                    <button>Browse</button>
                </div>
            </div>
        </div>
    </div>


        `;

  return container;
}

function Footer() {
  const footer = document.createElement("div");
  footer.classList.add("form-buttons");
  footer.innerHTML = `
  <button type="button" class="cancel-btn">Cancel</button>
        <a href="vehicle.html"><button type="button" class="back-btn">Back</button></a>
        <a href="Bank.html"><button onclick="" type="submit" class="next-btn">Next</button></a>
    `;
  return footer;
}

App();
