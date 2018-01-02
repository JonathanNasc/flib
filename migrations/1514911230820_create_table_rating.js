module.exports = {
    "up": `CREATE TABLE rating (
        id BIGINT NOT NULL AUTO_INCREMENT,
        field_id BIGINT NOT NULL,
        rated_user_id BIGINT NOT NULL,
        value VARCHAR(400) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (field_id) REFERENCES field(id),
        FOREIGN KEY (rated_user_id) REFERENCES user(id)
    )`,
    "down": "DROP TABLE rating"
}