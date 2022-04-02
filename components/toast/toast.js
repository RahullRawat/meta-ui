const btnToast = document.querySelector(".btn-toast");
const toast = document.querySelector(".toast");
const toastClose = document.querySelector(".toast-close");

const showToast = () => {
	toast.classList.add("show-toast");
	setTimeout(() => {
		toast.classList.remove("show-toast");
	}, 2000);
};

const hideToast = () => {
	toast.classList.remove("show-toast");
};

toastClose.addEventListener("click", hideToast);
btnToast.addEventListener("click", showToast);
