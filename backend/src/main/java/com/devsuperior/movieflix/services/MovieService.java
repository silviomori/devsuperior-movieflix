package com.devsuperior.movieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dtos.MovieDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.repositories.GenreRepository;
import com.devsuperior.movieflix.repositories.MovieRepository;

@Service
public class MovieService {

	@Autowired
	private MovieRepository movieRepository;

	@Autowired
	private GenreRepository genreRepository;

	@Transactional(readOnly = true)
	public Page<MovieDTO> find(Long genreId, Pageable pageable) {
		Genre genre = genreId == 0 ? null : genreRepository.getOne(genreId);
		return movieRepository.find(genre, pageable).map(movie -> new MovieDTO(movie));
	}

}
