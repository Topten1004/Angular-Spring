package com.example.backend.controller;

import com.example.backend.model.Book;
import com.example.backend.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class BookController {

    @Autowired
    BookRepository bookRepository;

    // check the server is working correctly API

    @RequestMapping(value ="/books", method = RequestMethod.GET)
    @ResponseBody
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @RequestMapping(value = "/books", method = RequestMethod.POST)
    @ResponseBody
    public Book addBook(@RequestBody Book book) {
        System.out.print(book);
        return bookRepository.save(book);
    }

    @RequestMapping(value="/findbook", method = RequestMethod.GET)
    @ResponseBody
    public Book findBook(@RequestParam("bookId") int bookId)
    {
        return bookRepository.findById(bookId);
    }

    @RequestMapping(value= "/updatebook", method = RequestMethod.PUT)
    @ResponseBody
    public Book updateBook(@RequestBody Book book)
    {
        return bookRepository.save(book);
    }

    @RequestMapping(value="/deletebook", method = RequestMethod.DELETE)
    @ResponseBody
    public int deleteBook(@RequestParam("bookId") int bookId)
    {
        return bookRepository.deleteById(bookId);
    }
}
