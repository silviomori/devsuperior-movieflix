package com.devsuperior.movieflix.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.movieflix.dtos.ReviewDTO;
import com.devsuperior.movieflix.entities.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

	@Query("SELECT new com.devsuperior.movieflix.dtos.ReviewDTO(r.id, r.text, r.movie.id, u.id, u.name, u.email)"
			+ " FROM Review r"
			+ " INNER JOIN User u ON u.id = r.user.id"
			+ " WHERE r.movie.id = :movieId")
	List<ReviewDTO> findByMovie(Long movieId);

}
