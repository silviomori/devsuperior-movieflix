package com.devsuperior.movieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.UserRepository;
import com.devsuperior.movieflix.services.exceptions.ForbiddenException;
import com.devsuperior.movieflix.services.exceptions.UnauthorizedException;

@Service
public class AuthService {

	@Autowired
	private UserRepository userRepository;

	@Transactional(readOnly = true)
	public User authenticated() {
		String username = SecurityContextHolder.getContext().getAuthentication().getName();
		if ("anonymousUser".equals(username)) {
			throw new UnauthorizedException("User is not authenticated.");
		}

		try {
			return userRepository.findByEmail(username);
		} catch (Exception e) {
			throw new UnauthorizedException("Invalid user.");
		}
	}

	@Transactional(readOnly = true)
	public User validateMember() {
		User user = authenticated();
		if (!user.hasRole("ROLE_MEMBER")) {
			throw new ForbiddenException("User is not a member.");
		}
		return user;
	}

}
