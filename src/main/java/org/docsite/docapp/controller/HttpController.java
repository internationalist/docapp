package org.docsite.docapp.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HttpController {

	@RequestMapping("/info")
	public String index() {
		return "Greetings from Spring Boot!";
	}

}
