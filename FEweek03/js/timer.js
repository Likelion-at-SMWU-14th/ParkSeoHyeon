function showToast(message) {
    const toast = document.createElement("div");

    toast.classList.add("toast");
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    },1000) ;


    setTimeout(() => {
        toast.classList.remove("show");
    },3000);
}

showToast("환영합니다");