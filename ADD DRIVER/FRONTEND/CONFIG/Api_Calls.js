import URLs from "./Proxy_Urls.js";

const sendFormData = async (url, formData) => {
  try {
    console.log("Received form data:", formData);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    const response = await fetch(url, {
      method: "POST",
      body: formData,
      // headers: {
      //   'Content-Type': 'application/json',
      // },
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
      return { success: true, message: result };
    } else {
      console.error("Error response from the server:", result);
      throw new Error(result.error || "Unknown error occurred");
    }
  } catch (error) {
    console.error("Error sending data:", error);
    throw new Error("Failed to submit form");
  }
};

// Export functions to send specific form data
exports.addClientDetails = (formData) =>
  sendFormData(`${URLs.API_FETCH_URL}/addClientDetails`, formData);
exports.addPersonalDetails = (formData) =>
  sendFormData(`${URLs.API_FETCH_URL}/addPersonalDetails`, formData);
exports.addVehicleDetails = (formData) =>
  sendFormData(`${URLs.API_FETCH_URL}/addVehicleDetails`, formData);
exports.addBankDetails = (formData) =>
  sendFormData(`${URLs.API_FETCH_URL}/addBankDetails`, formData);
exports.addDocumentDetails = (formData) =>
  sendFormData(`${URLs.API_FETCH_URL}/addDocumentDetails`, formData);
