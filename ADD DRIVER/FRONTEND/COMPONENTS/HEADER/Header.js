import Profile from "../../ASSETS/IMAGES/ellipse-12@2x.png";
import Notification from "../../ASSETS/IMAGES/path-35@2x.png";
import Message from "../../ASSETS/IMAGES/path-36@2x.png";
import Calendar from "../../ASSETS/IMAGES/path-14055@2x.png";
export class RenderHeader {
  constructor() {
    this.HeaderTitle = "Driver Management";
    this.HeaderSubTitle = "Add New Driver";
    this.UserName = "Ezio Auditore";
    this.UserStatus = "Admin";

    this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
      this.renderLive();
    }, 60000); // 60000 ms = 1 minute
  }

  updateDateTime() {
    const now = new Date();
    this.date = now.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
    this.time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  render() {
    return `  
      <div class="container-2">
        <div class="left">
          <p style="color: #969292;">${this.HeaderTitle} / <b style="color: #000000;">${this.HeaderSubTitle}</b></p>
        </div>
        <div class="right">
          <p style="color: #969292;padding-right: 8px;" id="date-time">${this.date} | ${this.time}</p>
          <div class="icons">
            <img id="calender" src="${Calendar}" alt="" style="width: 17px;height: 16px;">
            <p class="path"></p>
            <img id="message" src="${Message}" alt="" style="width: 17px;height: 15.9px; cursor: pointer;">
            <p class="path"></p>
            <img id="Notify" src="${Notification}" alt="" style="width: 14px;height: 16px; cursor: pointer;">
          </div>
          <div class="col">
            <p style="font-size: 16px;"><b>${this.UserName}</b></p>
            <p style="font-size: 12px;color: #969292;">${this.UserStatus}</p>
          </div>
          <img src="${Profile}" alt="" style="height: 55px; padding: 5px;">
        </div>
        
        <!-- Message Window -->
        <div class="popup" id="messagePopup" style="display: none;">
          <p>Messages: No new messages.</p>
        </div>
        
        <!-- Notification Window -->
        <div class="popup" id="notifyPopup" style="display: none;">
          <p>Notifications: No new notifications.</p>
        </div>
      </div>
    `;
  }


  setupEventListeners() {
    const messageIcon = document.getElementById("message");
    const notifyIcon = document.getElementById("notify");
    const messagePopup = document.getElementById("messagePopup");
    const notifyPopup = document.getElementById("notifyPopup");

    // Toggle visibility of the message window
    messageIcon.addEventListener("click", () => {
      messagePopup.style.display = messagePopup.style.display === "none" ? "block" : "none";
      notifyPopup.style.display = "none"; // Close the notification popup if open
    });

    // Toggle visibility of the notification window
    notifyIcon.addEventListener("click", () => {
      notifyPopup.style.display = notifyPopup.style.display === "none" ? "block" : "none";
      messagePopup.style.display = "none"; // Close the message popup if open
    });
  }


  // Re-render live date and time
  renderLive() {
    const dateTimeElement = document.getElementById("date-time");
    if (dateTimeElement) {
      dateTimeElement.textContent = `${this.date} | ${this.time}`;
    }
  }
}
