package com.infinitixglobal.search.controller;

import com.infinitixglobal.search.model.SearchRequest;
import com.infinitixglobal.search.model.SearchResponse;
import com.infinitixglobal.search.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/search")
@CrossOrigin(origins = "*")
public class SearchController {

    private final SearchService searchService;

    @Autowired
    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @PostMapping
    public ResponseEntity<SearchResponse> search(@RequestBody SearchRequest request) {
        SearchResponse response = searchService.performSearch(request);
        return ResponseEntity.ok(response);
    }
}