package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dtos.GenreDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.repositories.GenreRepository;

@Service
public class GenreService {

	@Autowired
	private GenreRepository genreRepository;

	@Transactional(readOnly = true)
	public List<GenreDTO> findAll() {
		List<Genre> genres = genreRepository.findAll();
		return genres.stream()
				.map(genre -> new GenreDTO(genre))
				.collect(Collectors.toList());
	}

}
