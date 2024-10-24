import Profile from '../../ASSETS/IMAGES/ellipse-12@2x.png';
import Notification from '../../ASSETS/IMAGES/path-35@2x.png';
import Message from '../../ASSETS/IMAGES/path-36@2x.png';
import Calendar from '../../ASSETS/IMAGES/path-14055@2x.png';

export class RenderHeader {
    constructor() {
        this.HeaderTitle = 'Driver Management';
        this.HeaderSubTitle = 'Add New Driver';
        this.date = 'Dec 01 2022';
        this.time = '10:00 AM';
        this.UserName = 'Ezio Auditore';
        this.UserStatus = 'Admin';
    }

    render() {
        return `  
            <div class="container-2">
                <div class="left">
                    <p style="color: #969292;">${this.HeaderTitle} / <b style="color: #000000;">${this.HeaderSubTitle}</b></p>
                </div>
                <div class="right">
                    <p style="color: #969292;padding-right: 8px;">${this.date} | ${this.time}</p>
                    <div class="icons">
                        <img src="${Calendar}" alt="" style="width: 17px;height: 16px;">
                        <p class="path"></p>
                        <img src="${Message}" alt="" style="width: 17px;height: 15.9px;">
                        <p class="path"></p>
                        <img src="${Notification}" alt="" style="width: 14px;height: 16px;">
                    </div>
                    <div class="col">
                        <p style="font-size: 16px;"><b>${this.UserName}</b></p>
                        <p style="font-size: 12px;color: #969292;">${this.UserStatus}</p>
                    </div>
                    <img src="${Profile}" alt="" style="height: 55px; padding: 5px;">
                </div>
            </div>
        `;
    }
}


