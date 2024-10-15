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
        <a href="doc.html"><img class="back" src="Assets/IMAGES/group-28608@2x.png" alt=""></a>
        <div class="progress">
            <div style="border-color: #e6f2ff;" class="step active">
                <div style="border-color: #e6f2ff;color: #e6f2ff;" class="step-number"><img
                        src="Assets/IMAGES/path-45313@2x.png" alt="" style="height: 14px;"></div>
                <div class="step-label">Personal Details</div>
            </div>
            <div class="Path-45302"></div>
            <div class="step active">
                <div style="border-color: #e6f2ff;color: #e6f2ff;" class="step-number"><img
                        src="Assets/IMAGES/path-45313@2x.png" alt="" style="height: 14px;"></div>
                <div class="step-label">Vehicle Details</div>
            </div>
            <div class="Path-45302"></div>
            <div class="step active">
                <div style="border-color: #e6f2ff;color: #e6f2ff;" class="step-number"><img
                        src="Assets/IMAGES/path-45313@2x.png" alt="" style="height: 14px;"></div>
                <div class="step-label">Document Details</div>
            </div>
            <div class="Path-45302"></div>
            <div class="step active">
                <div style="border-color: #e6f2ff;color: #e6f2ff;" class="step-number">4</div>
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
        <div class="bank-details-section">
            <div class="section-title">
                <h2>Primary Bank Details</h2>
            </div>
            <form>
                <div class="form-row">
                    <div class="form-group">
                        <label for="accountHolderName">Account Holders Name</label>
                        <input type="text" id="accountHolderName" placeholder="Enter Account Holders Name">
                    </div>
                    <div class="form-group">
                        <label for="accountNumber">Account Number</label>
                        <input type="text" id="accountNumber" placeholder="Enter Account No">
                    </div>
                    <div class="form-group">
                        <label for="confirmAccountNumber">Confirm Account Number</label>
                        <input type="text" id="confirmAccountNumber" placeholder="Enter Account No">
                    </div>
                    <div class="form-group">
                        <label for="bankName">Bank Name</label>
                        <select id="bankName">
                            <option value="" disabled selected>Select Bank</option>
                            <option value="bank1">Bank 1</option>
                            <option value="bank2">Bank 2</option>
                        </select>
                    </div>
                </div>

                <div class="Profile">
                    <div class="form-row">
                        <img class="profile-pic" src="Assets/IMAGES/group-28722@2x.png" alt="" style="height: 95px;">
                        <div class="pic">
                            <label for="profilePicture">Profile Picture</label>
                            <p style="color: #969292;">Maximum size : 2 MBI Minimum Resolution : 1000px, Format :
                                JPG, PNG
                            </p>
                            <button type="submit" class="Browser-btn">Browse</button>
                        </div>

                    </div>
                </div>

                <div class="Add">
                    <img src="Assets/IMAGES/path-38511@2x.png" alt="">
                    <a href="#" class="add-secondary-bank">Add Secondary Bank
                        Details</a>
                </div>
            </form>
        </div>
    
        `;

  return container;
}

function Footer() {
  const footer = document.createElement("div");
  footer.classList.add("form-buttons");
  footer.innerHTML = `
    <button type="button" class="cancel-btn">Cancel</button>
        <a href="doc.html"><button type="button" class="back-btn">Back</button></a>
        <a href="client.html"><button onclick="" type="submit" class="next-btn">Next</button></a>
    `;
  return footer;
}

App();
