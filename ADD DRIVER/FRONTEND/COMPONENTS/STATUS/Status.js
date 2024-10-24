import Backimg from '../../ASSETS/IMAGES/group-28608@2x.png';
import Tick from '../../ASSETS/IMAGES/path-45313@2x.png';

export class Status {
    constructor() {
        this.currentStep = 1; 
    }

    setCurrentStep(step) {
        this.currentStep = step;
        this.render();
    }

    render() {
        return `
        <div class="status">
            <img class="back" src=${Backimg} alt="">
            <div class="progress">
                <div class="step ${this.currentStep >= 1 ? 'active' : ''}">
                    <div class="step-number" style="border-color: ${this.currentStep >= 1 ? '#e6f2ff' : 'grey'}; color: ${this.currentStep >= 1 ? '#e6f2ff' : 'grey'};">
                        ${this.currentStep > 1 ? `<img src=${Tick} alt="" style="height: 14px;">` : '1'}
                    </div>
                    <div class="step-label">Personal Details</div>
                </div>
                <div class="Path-45302"></div>
                <div class="step ${this.currentStep >= 2 ? 'active' : ''}">
                    <div class="step-number" style="border-color: ${this.currentStep >= 2 ? '#e6f2ff' : 'grey'}; color: ${this.currentStep >= 2 ? '#e6f2ff' : 'grey'};">
                        ${this.currentStep > 2 ? `<img src=${Tick} alt="" style="height: 14px;">` : '2'}
                    </div>
                    <div class="step-label">Vehicle Details</div>
                </div>
                <div class="Path-45302"></div>
                <div class="step ${this.currentStep >= 3 ? 'active' : ''}">
                    <div class="step-number" style="border-color: ${this.currentStep >= 3 ? '#e6f2ff' : 'grey'}; color: ${this.currentStep >= 3 ? '#e6f2ff' : 'grey'};">
                        ${this.currentStep > 3 ? `<img src=${Tick} alt="" style="height: 14px;">` : '3'}
                    </div>
                    <div class="step-label">Bank Details</div>
                </div>
                <div class="Path-45302"></div>
                <div class="step ${this.currentStep >= 4 ? 'active' : ''}">
                    <div class="step-number" style="border-color: ${this.currentStep >= 4 ? '#e6f2ff' : 'grey'}; color: ${this.currentStep >= 4 ? '#e6f2ff' : 'grey'};">
                        ${this.currentStep > 4 ? `<img src=${Tick} alt="" style="height: 14px;">` : '4'}
                    </div>
                    <div class="step-label">Client Details</div>
                </div>
                <div class="Path-45302"></div>
                <div class="step ${this.currentStep >= 5 ? 'active' : ''}">
                    <div class="step-number" style="border-color: ${this.currentStep >= 5 ? '#e6f2ff' : 'grey'}; color: ${this.currentStep >= 5 ? '#e6f2ff' : 'grey'};">
                        ${this.currentStep > 5 ? `<img src=${Tick} alt="" style="height: 14px;">` : '5'}
                    </div>
                    <div class="step-label">Document Details</div>
                </div>
            </div>
        </div>
        `;
    }
}

// Export the Status class
