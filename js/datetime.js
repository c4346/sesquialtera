function updateDate() {

    const currentDate = new Date();

    const formatDate = currentDate.toLocaleString();

    document.getElementById("date").textContent = formatDate;

}



setInterval(updateDate, 1000);


updateDate();