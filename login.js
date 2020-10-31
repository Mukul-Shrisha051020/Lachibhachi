function student() {
    lachi_bhachi = Student;
}

function teacher() {
    lachi_bhachi = Teacher;
}

function save_user() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("User", user_name);

    if (lachi_bhachi = Student) {
        window.location = "student.html";
    }
    if (lachi_bhachi = Teacher) {
        window.location = "teacher.html";
    }
}