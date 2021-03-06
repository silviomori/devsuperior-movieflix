package com.devsuperior.movieflix.dtos;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.devsuperior.movieflix.entities.Review;

public class ReviewDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	@NotBlank(message = "Review cannot be an empty text.")
	private String text;
	private Long movieId;
	private UserDTO user;

	public ReviewDTO() {
	}

	public ReviewDTO(Long id, String text, Long movieId, UserDTO user) {
		this.id = id;
		this.text = text;
		this.movieId = movieId;
		this.user = user;
	}

	public ReviewDTO(Long id, String text, Long movieId, Long userId, String userName, String userEmail) {
		this(id, text, movieId, new UserDTO(userId, userName, userEmail));
	}

	public ReviewDTO(Review review) {
		this(review.getId(), review.getText(), review.getMovie().getId(), new UserDTO(review.getUser()));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

}
