let customers = [
    {
        name: "John",
        service: "CCTV Installation",
        price: 150
    },

    {
        name: "David",
        service: "Solar Inverter",
        price: 500
    },

    {
        name: "Michael",
        service: "Web Development",
        price: 300
    }
];

function showCustomers() {

    let customerList = document.getElementById("customerList");

    for (let i = 0; i < customers.length; i++) {

        customerList.innerHTML +=
            "<p>" +
            "Customer: " + customers[i].name +
            "<br>Service: " + customers[i].service +
            "<br>Price: $" + customers[i].price +
            "</p>";

    }

}
