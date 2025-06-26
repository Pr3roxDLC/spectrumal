package me.pr3.spectrumal.model.user;

import java.util.UUID;

public class User {
    UUID id;
    String name;

    public User() {
        // Default constructor for serialization/deserialization
    }

    public User(UUID id, String name) {
        this.id = id;
        this.name = name;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
