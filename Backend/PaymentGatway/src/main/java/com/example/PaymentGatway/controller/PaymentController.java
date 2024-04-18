package com.example.PaymentGatway.controller;

import java.util.Map;

import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;

@CrossOrigin("*")
@RequestMapping("/api")
@RestController
public class PaymentController {
	
	//Creating order for payment 
	@PostMapping("/payment")
	@ResponseBody
	public String createOrder(@RequestBody Map<String, Object> data) throws Exception{
		System.out.println(data);
		int amt = Integer.parseInt(data.get("amount").toString());
		
		var client = new RazorpayClient("rzp_test_gBeOq3i9Vj8QvR","AClSazt5aXdgvdyo1C61CRGw");
		
		JSONObject orderRequest = new JSONObject();
		orderRequest.put("amount",amt*100);
		orderRequest.put("currency","INR");
		orderRequest.put("receipt", "txn_1213");
		
		
		//Creating new order
		Order order =  client.orders.create(orderRequest);
		
		System.out.println(order);
		return order.toString();
	}

}
