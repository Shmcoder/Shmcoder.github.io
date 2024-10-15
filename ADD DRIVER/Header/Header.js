export function Header() {
    const container2 = document.createElement('div');
    container2.classList.add('container-2');
    
    const leftDiv = document.createElement('div');
    leftDiv.classList.add('left');
    leftDiv.innerHTML = '<p style="color: #969292;">Driver Management / <b style="color: #000000;">Add New Driver</b></p>';
    
    const rightDiv = document.createElement('div');
    rightDiv.classList.add('right');
    rightDiv.innerHTML = `
        <p style="color: #969292;padding-right: 8px;">Dec 01 2022 | 10:00 AM</p>
        <div class="icons">
            <img src="ASSETS/IMAGES/path-14055@2x.png" alt="" style="width: 17px;height: 16px;">
            <p class="path"></p>
            <img src="ASSETS/IMAGES/path-36@2x.png" alt="" style="width: 17px;height: 15.9px;">
            <p class="path"></p>
            <img src="ASSETS/IMAGES/path-35@2x.png" alt="" style="width: 14px;height: 16px;">
        </div>
        <div class="col">
            <p style="font-size: 16px;"><b>Ezio Auditore</b></p>
            <p style="font-size: 12px;color: #969292;">Admin</p>
        </div>
        <img src="ASSETS/IMAGES/ellipse-12@2x.png" alt="" style="height: 55px; padding: 5px;">`;

    container2.appendChild(leftDiv);
    container2.appendChild(rightDiv);
    return container2;
}
