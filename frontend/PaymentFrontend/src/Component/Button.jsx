import { useState } from "react"
import apiService from "../Services/api-service"


const PaymentIntegration = () =>{
    const [amount, setAmount] = useState('')
    const handlePayment = () =>{
        console.log(amount)
        if(amount=='' || amount==null){
            alert("Amount is required")
            return;
        }
        //create order

        apiService.payment(amount)
        .then((resp) => {
            //Invokde when success
            console.log(resp)

            if(resp.data.status == "created"){
                console.log("in success")
                //Open Payment form
                let options = {
                    key:"rzp_test_gBeOq3i9Vj8QvR",
                    amount:resp.data.amount,
                    currency:"INR",
                    name : "Payment Integration",
                    image: "https://w7.pngwing.com/pngs/93/992/png-transparent-razorpay-logo-tech-companies.png",
                    order_id: resp.data.id,
                    handler: function(res)
                    {
                        console.log(res.razorpay_payment_id)
                        console.log(res.razorpay_order_id)
                        console.log(res.razorpay_signature)
                        console.log("Payment Successful")
                        alert("Congrates !! Payment successful")
                    },
                    "prefill": {
                        "name": " ",
                        "email": " ",
                        "contact": " "
                    },
                    "notes": {
                        "address": "Payment Integration",
                    },
                    "theme": {
                        "color": "#3399cc",
                    }
                };
                let razorpay = new Razorpay(options);

                
                razorpay.on('payment.failed', function (response){
                    console.log("Error generated")

                    connsole.log(response.error.code);
                    connsole.log(response.error.description);
                    connsole.log(response.error.source);
                    connsole.log(response.error.step);
                    connsole.log(response.error.reason);
                    connsole.log(response.error.metadata.order_id);
                    connsole.log(response.error.metadata.payment_id);
                    alert("OOPS Payment Failed !!")
            });
            razorpay.open();
            }
            else{
                console.log("else block")
            }            

       })
        .catch((error) =>{
            //Invoke when error
            console.log(error)
        })
    }
    return(
        <>
        <h3 className="my-3">Donate Us</h3>
        <input id="payment_id" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} className="form-control my-2" placeholder="Enter Amount" />
        <button className="btn btn-success" onClick={handlePayment}>Donate us</button>
        </>
    )
}

export default PaymentIntegration;