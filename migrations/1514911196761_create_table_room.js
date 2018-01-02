module.exports = {
    "up": `CREATE TABLE room (
        id BIGINT NOT NULL AUTO_INCREMENT,
        creator_id BIGINT NOT NULL,
        title VARCHAR(100) NOT NULL,
        description VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (creator_id) REFERENCES user(id)
    )`,
    "down": "DROP TABLE room"
}