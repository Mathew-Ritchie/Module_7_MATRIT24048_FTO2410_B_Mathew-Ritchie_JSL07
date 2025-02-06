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
    const personalMessageInput = document.getElementById("personalMessage"); //use getElementById to target the input by its id
    const courseNameInput = document.getElementById("courseName"); //use getElementById to target the input by its id

    const studentName = studentNameInput.value;
    const personalMessage = personalMessageInput.value;
    const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

    if (studentName.trim() === "" || personalMessage.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    // 🚨 Generate certificate content dynamically
    // All elements note directly related to the user input have been added using template literal.
    // innerHTML is used for this and should be safe for these none input items.
    certificateContent.innerHTML = `
      <h1>Certificate of Achievement</h1>
        <p id="student">The is to certify that</p>
        <p id="course">Has almost completed the</p>
        <p> With legendary perseverance and world-class bad-assery for never giving up</p>
        <img id="image" src="logo.png">
    `;
    // Adding certificate elelment for the student name, using textContent for displaying input name in the html. much safer than innerHTML.
    // then inserting the name elelment right after targeted <p> which is directly before the name.
    const certNameEl = document.createElement("h2");
    certNameEl.textContent = `${studentName}`;
    const certNameParentEl = document.getElementById("student");
    certNameParentEl.parentNode.insertBefore(certNameEl, certNameParentEl.nextSibling);

    //Same for Course
    const certCourseEl = document.createElement("h2");
    certCourseEl.textContent = `${courseName}`;
    const certCourseParentEl = document.getElementById("course");
    certCourseParentEl.parentNode.insertBefore(certCourseEl, certCourseParentEl.nextSibling);
    // Same for Personal Message
    const certPersonalMsgEl = document.createElement("h2");
    certPersonalMsgEl.textContent = `${courseName}`;
    const certPersonalMsgParentEl = document.getElementById("image");
    certPersonalMsgParentEl.parentNode.insertBefore(
      certPersonalMsgEl,
      certPersonalMsgParentEl.nextSibling
    );

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
