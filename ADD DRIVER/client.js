import { Header } from "./Header/Header.js";

function Client() {
  const appContainer = document.getElementById("client");

  appContainer.appendChild(Header());
  appContainer.appendChild(StepProgress());
  appContainer.appendChild(form_client());
  appContainer.appendChild(form_btn());
}

function StepProgress() {
  const statusDiv = document.createElement("div");
  statusDiv.classList.add("status");

  statusDiv.innerHTML = `
        <a href="vehicle.html"><img class="back" src="Assets/IMAGES/group-28608@2x.png" alt=""></a>
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
                <div style="border-color: #e6f2ff;color: #e6f2ff;" class="step-number"><img
                        src="Assets/IMAGES/path-45313@2x.png" alt="" style="height: 14px;"></div>
                <div class="step-label">Bank Details</div>
            </div>
            <div class="Path-45302"></div>
            <div class="step active">
                <div style="border-color: #e6f2ff;color: #e6f2ff;" class="step-number">5</div>
                <div class="step-label">Client Details</div>
            </div>
        </div>

    `;

  return statusDiv;
}

function form_client() {
  const container1 = document.createElement("div");
  container1.classList.add("container-1");

  container1.innerHTML = `
    <div class="form-title">Client Details</div>
        <form>
            <!-- First row of inputs: Client Name, Site Name, Location, Trip Type -->
            <div class="form-row">
                <div class="form-group">
                    <label for="client-name">Client Name</label>
                    <select id="client-name">
                        <option value="1">New Pandian Travels</option>
                        <option value="2">ABC Travels</option>
                        <option value="3">XYZ Transport</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="site-name">Site Name</label>
                    <input type="text" id="site-name" placeholder="Enter Site">
                    <!-- Tags for selected locations -->
                    <div class="tags">
                        <div class="tag">
                            <span>Taramani</span>
                            <button type="button">&times;</button>
                        </div>
                        <div class="tag">
                            <span>Tambaram</span>
                            <button type="button">&times;</button>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="location">Location</label>
                    <select id="location">
                        <option value="">Select Location</option>
                        <option value="Taramani">Taramani</option>
                        <option value="Tambaram">Tambaram</option>
                        <option value="Velachery">Velachery</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="trip-type">Trip Type</label>
                    <select id="trip-type">
                        <option value="kilometer">Kilometer</option>
                        <option value="hourly">Hourly</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="fair-Details">Fare Details</label>
                    <div class="fare-buttons">
                        <button type="button" class="check-fare"><img src="Assets/IMAGES/path-44933@2x.png"
                                style="height: 12px;width: auto;padding-right: 3px;" alt="">Check Fare</button>
                        <button type="button" class="edit-fare"><img src="Assets/IMAGES/path-44930@2x.png"
                                style="height: 11px;width: auto; padding-right: 2px;" alt=""> Edit Fare</button>
                    </div>
                </div>


            </div>


            <div class="Add">
                <img src="Assets/IMAGES/path-38511@2x.png" alt="">
                <a href="#" class="add-secondary-bank">Add Secondary Bank
                    Details</a>
            </div>
            <!-- Fare buttons -->

        </form>
    </div>
    
    `;

  return container1;
}

function form_btn() {
  const frm = document.createElement("div");
  frm.classList.add("form-button");

  frm.innerHTML = `
        <div class="buttons">
            <button type="button" class="cancel-btn">Cancel</button>
            <a href="Bank.html"><button type="button" class="back-btn">Back</button></a>
            <button type="submit" class="sub-btn">Submit</button>
        </div>
        `;

  return frm;
}

Client();
