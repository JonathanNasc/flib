module.exports = {
    "up": `CREATE TABLE form (
        id BIGINT NOT NULL AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(400) NOT NULL,
        creator_id BIGINT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (creator_id) REFERENCES user(id)
    )`,
    "down": "DROP TABLE form"
}