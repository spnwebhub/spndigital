const setNotificationSuccess = () => {
    const notificationElement = document.getElementById("success_notification");
    notificationElement.classList.remove("invisible");

    setTimeout(() => {
        notificationElement.classList.add("invisible")
    }, "10000");
}


const setNotificationError = () => {
    const notificationElement = document.getElementById("error_notification");
    notificationElement.classList.remove("invisible");

    setTimeout(() => {
        notificationElement.classList.add("invisible")
    }, "5000");
}

export { setNotificationSuccess, setNotificationError };