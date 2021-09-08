package com.devsuperior.movieflix.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.movieflix.dtos.MovieDTO;
import com.devsuperior.movieflix.services.MovieService;

@RestController
@RequestMapping(value = "/movies")
public class MovieController {

	@Autowired
	private MovieService movieService;

	@GetMapping
	public ResponseEntity<Page<MovieDTO>> findAll(
			@PageableDefault(sort = "title", direction = Direction.ASC) Pageable pageable,
			@RequestParam(name = "genreId", defaultValue = "0") Long genreId) {
		return ResponseEntity.ok(movieService.find(genreId, pageable));
	}

}
