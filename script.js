document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    // الحصول على القيم من الحقول
    const studentCode = document.getElementById("student-code").value.trim();
    const nationalId = document.getElementById("national-id").value.trim();

    const errorMessage = document.getElementById("error-message");

    // التحقق من كود الطالب والرقم القومي
    if (studentCode === "200075" && nationalId === "29909241400813") {
        window.location.href = "d.html"; // الانتقال للنتيجة
    } else {
        errorMessage.textContent = "البيانات التي أدخلتها غير صحيحة. يرجى المحاولة مرة أخرى.";
    }
});
