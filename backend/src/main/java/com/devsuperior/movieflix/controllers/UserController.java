package com.devsuperior.movieflix.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.movieflix.dtos.UserDTO;

@RestController
@RequestMapping(value = "/users")
public class UserController {

//	@Autowired
//	private UserService service;

	@GetMapping(value = "/profile")
	public ResponseEntity<UserDTO> getUserProfile() {
//		UserDTO dto = userService.findById(id);
//		return ResponseEntity.ok(dto);
		return null;
	}

}
