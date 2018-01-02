module.exports = {
    "up": `CREATE TABLE form (
        id BIGINT NOT NULL AUTO_INCREMENT,
        title BIGINT NOT NULL,
        description BIGINT NOT NULL,
        type VARCHAR(100) NOT NULL,
        creator_id BIGINT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (creator_id) REFERENCES user(id)
    )`,
    "down": "DROP TABLE form"
}