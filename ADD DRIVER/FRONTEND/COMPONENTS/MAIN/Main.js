import { RenderHeader } from "../HEADER/Header.js";
import { Status } from "../STATUS/Status.js";
import {
  BankDetails,
  PersonalDetail,
  VehicleDetails,
  Document,
  ClientDetails,
} from "../DETAILS/details.js";

const app = document.getElementById("app");
const pages = [
  PersonalDetail,
  VehicleDetails,
  BankDetails,
  ClientDetails,
  Document,
];
let currentPageIndex = 0;
const statusElement = new Status();

function renderPage() {
  app.innerHTML = "";
  console.log("Rendering Page...");

  const pageContainer = document.createElement("div");

  const headerElement = new RenderHeader();
  pageContainer.innerHTML += headerElement.render();

  statusElement.setCurrentStep(currentPageIndex + 1);
  pageContainer.innerHTML += statusElement.render();

  const PageComponent = pages[currentPageIndex];
  const pageInstance = new PageComponent();
  pageContainer.innerHTML += pageInstance.render();

  app.appendChild(pageContainer);

  pageInstance.addEventListeners(nextPage);
}

function nextPage() {
  currentPageIndex++;
  if (currentPageIndex < pages.length) {
    renderPage();
  } else {
    alert("You have completed all pages!");
  }
}

renderPage();
