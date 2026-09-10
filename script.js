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

    let customerList = document.getElementById("customerList");

    customerList.innerHTML +=
        "<div>" +
        "<h3>" + name + "</h3>" +
        "<p>Service: " + service + "</p>" +
        "<p>Price: $" + price + "</p>" +
        "</div>";

}
