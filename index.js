document.addEventListener("DOMContentLoaded", function () {
  const cardForm = document.getElementById("cardForm");
  const modal = document.getElementById("modal");
  const certificateContent = document.getElementById("certificateContent");
  const closeModal = document.querySelector(".close");

  // Hide the modal initially
  modal.style.display = "none";

  cardForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // 🚨 Get input values
    const studentNameInput = document.getElementById("studentName");
    const personalMessageInput = document.getElementById("personalMessage");
    const courseNameInput = document.getElementById("courseName");

    const studentName = studentNameInput.value;
    const personalMessage = personalMessageInput.value;
    const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

    if (studentName.trim() === "" || personalMessage.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    // 🚨 Generate certificate content dynamically
    certificateContent.innerHTML = `
      <h1>Certificate of Achievement</h1>
      <p>The is to certify that</p>
      <h2>${studentName}</h2>
      <p>Has almost completed the</p>
       <h2>${courseName}</h2>
       <p>With legendary perseverance and world-class bad-assery for never giving up</p>
       <img id="image" src="logo.png">
       <h2>${personalMessage}</h2>
    `;

    const imageEl = document.getElementById("image");
    imageEl.style.width = "70%";
    //  Display the modal
    modal.style.display = "block";

    // Clear the form inputs
    studentNameInput.value = "";
    personalMessageInput.value = "";
    if (courseNameInput) courseNameInput.value = "";
  });

  closeModal.style.cursor = "pointer";
  //  🚨 Close the modal when the close button is clicked
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
