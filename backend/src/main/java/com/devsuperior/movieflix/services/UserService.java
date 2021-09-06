package com.devsuperior.movieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dtos.UserDTO;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;

	@Transactional(readOnly = true)
	public UserDTO getUser(Long id) {
		User user = repository.findById(id).orElse(null);
		return new UserDTO(user);
	}

}
