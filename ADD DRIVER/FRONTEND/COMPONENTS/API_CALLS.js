const sendFormData = async (url, formData) => {
  try {
    
    console.log("Received form data:", formData);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    const response = await fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        
      },
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

exports.addClientDetails = (formData) =>
  sendFormData("http://localhost:4001/api/addClientDetails", formData);
exports.addPersonalDetails = (formData) =>
  sendFormData("http://localhost:4001/api/addPersonalDetails", formData);
exports.addVehicleDetails = (formData) =>
  sendFormData("http://localhost:4001/api/addVehicleDetails", formData);
exports.addBankDetails = (formData) =>
  sendFormData("http://localhost:4001/api/addBankDetails", formData);

