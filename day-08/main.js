
function searchFood(item, cb1) {
    console.log("Searching start for ", item, " ..........................");
    setTimeout(function timer1() {
        let data = `List of ${item}`;
        cb1(item, data)
    }, 300)
}

function orderFood(item, cb2) {
    console.log("Select ", item);
    setTimeout(function timer2() {
        let id = Math.floor(Math.random() * 999999);
        cb2(id)

    }, 400)
}

function payment(item, orderId, cb3) {
    console.log(`Payment starting for ${item} with id no: ${orderId}`);
    setTimeout(() => {
        let status = !true;
        cb3(status);
    }, 600);

}
searchFood("Burger",
    function funct1(item, data) {
        console.log(data)
        orderFood(item, function funct2(orderId) {
            console.log("Order crated successfully with id: ", orderId);
            payment(item, orderId, function funct3(status) {

            });
        })
    }

);