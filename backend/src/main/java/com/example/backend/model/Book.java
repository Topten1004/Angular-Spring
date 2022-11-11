package com.example.backend.model;


import javax.persistence.*;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String title;

    private String description;

    private String posterImgPath;

    private String author;

    @Column(nullable = true)
    private boolean favorite;

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription(String description) {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPosterImgPath() {
        return this.posterImgPath;
    }

    public void setPosterImgPath(String posterImgPath) {
        this.posterImgPath = posterImgPath;
    }

    public  String getAuthor() {
        return this.author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public boolean getFavorite() {
        return this.favorite;
    }

    public void setFavorite(boolean favorite) {
        this.favorite = favorite;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", author='" +  author + '\'' +
                ", posterImgPath='" + posterImgPath + '\'' +
                ", favorite=" + favorite + '\'' +
                '}';
    }
}

