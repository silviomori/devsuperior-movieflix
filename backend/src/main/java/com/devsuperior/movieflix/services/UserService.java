package com.devsuperior.movieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dtos.UserDTO;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.UserRepository;

@Service
public class UserService implements UserDetailsService {

	@Autowired
	private UserRepository repository;
	
	@Autowired
	private AuthService authService;

	@Transactional(readOnly = true)
	public UserDTO getUser(Long id) {
		User user = repository.findById(id).orElse(null);
		return new UserDTO(user);
	}

	@Transactional(readOnly = true)
	public UserDTO getUserProfile() {
		return new UserDTO(authService.authenticated());
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserDetails user = repository.findByEmail(username);
		if (user == null) {
			throw new UsernameNotFoundException("Username not found: "+username);
		}
		return user;
	}

}
