document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const studentCode = document.getElementById("student-code").value.trim();
    const nationalId = document.getElementById("national-id").value.trim();
    const errorMessage = document.getElementById("error-message");
    const resultContainer = document.getElementById("result-container");

    if (studentCode === "200075" && nationalId === "29909241400813") {
        // إظهار النتيجة
        resultContainer.style.display = "block";
        errorMessage.textContent = "";
    } else {
        // إخفاء النتيجة لو كانت ظاهرة سابقًا
        resultContainer.style.display = "none";
        errorMessage.textContent = "البيانات التي أدخلتها غير صحيحة. يرجى المحاولة مرة أخرى.";
    }
});
