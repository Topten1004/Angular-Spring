package com.example.backend.service;

import com.example.backend.model.Book;
import com.example.backend.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class BookService {

    @Autowired
    BookRepository bookRepository;

    // get all the books
    public List<Book> getAllBooks() {
        List<Book> books = bookRepository.findAll();
        return books;
    }

    public Book getBookById(int id) {
        return bookRepository.findById(id);
    }

    public void saveBook(Book book) {
        try {
            bookRepository.save(book);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void deleteBook(int id) {
        try {
            bookRepository.deleteById(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
