let customers = [];

function addCustomer() {

    let name = document.getElementById("customerName").value;
    let service = document.getElementById("customerService").value;
    let price = document.getElementById("customerPrice").value;

    let customer = {
        name: name,
        service: service,
        price: price
    };

    customers.push(customer);

    displayCustomers();

}

function displayCustomers() {

    let customerList = document.getElementById("customerList");

    customerList.innerHTML = "";

    for (let i = 0; i < customers.length; i++) {

        customerList.innerHTML +=
            "<div>" +
            "<h3>" + customers[i].name + "</h3>" +
            "<p>Service: " + customers[i].service + "</p>" +
            "<p>Price: $" + customers[i].price + "</p>" +
            "</div>";

    }

}
