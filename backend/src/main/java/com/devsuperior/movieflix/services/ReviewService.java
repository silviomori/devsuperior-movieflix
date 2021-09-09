package com.devsuperior.movieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dtos.ReviewDTO;
import com.devsuperior.movieflix.dtos.UserDTO;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository reviewRepository;

	@Autowired
	private MovieRepository movieRepository;

	@Autowired
	private AuthService authService;

	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		Review review = new Review();
		review.setUser(authService.validateMember());
		review.setMovie(movieRepository.getOne(dto.getMovieId()));
		review.setText(dto.getText());
		review = reviewRepository.saveAndFlush(review);

		dto.setId(review.getId());
		dto.setUser(new UserDTO(review.getUser()));
		return dto;
	}

}
