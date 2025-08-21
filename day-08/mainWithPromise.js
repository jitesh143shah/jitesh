
function searchFood(item) {
    return new Promise(
        function funct1(res, rej) {
            console.log("Searching start for ", item, " ..........................");
            setTimeout(function timer1() {
                let data = `List of ${item}`;
                res({ item, data })

            }, 300);
        }
    )
}

function orderFood(item) {
    return new Promise(function funct2(res, rej) {
        console.log("Select ", item);
        setTimeout(function timer2() {
            let id = Math.floor(Math.random() * 999999);
            res({ id, item });

        }, 400);
    })
}

function payment(item, orderId, cb3) {
    return new Promise(function funct3(res, rej) {
        console.log(`Payment starting for ${item} with id no: ${orderId}`);
        setTimeout(() => {
            let status = true;
            res({ status });
        }, 600);
    })

}
searchFood("Burger").then(function custumer1(detail) {
    console.log(detail.data);
    return orderFood(detail.item);


}).then(function custumer2(detail2) {
    console.log("Order crated successfully with id: ", detail2.id);
    return payment(detail2.item, detail2.id);
}).then(function custumer13(detail3) {
    console.log("Payment successful with status", detail3.status)

})