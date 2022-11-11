package com.example.backend.repository;

import com.example.backend.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Integer> {

    List<Book> findAll();

    Book findById(int id);

    int deleteById(int id);
}
