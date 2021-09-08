package com.devsuperior.movieflix.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.movieflix.dtos.MovieByGenreDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

	@Query("SELECT new com.devsuperior.movieflix.dtos.MovieByGenreDTO(m.id,"
			+ " m.title, m.subTitle, m.year, m.imgUrl) FROM Movie m WHERE"
			+ " (:genre IS NULL OR m.genre = :genre)")
	Page<MovieByGenreDTO> find(Genre genre, Pageable pageable);

}
