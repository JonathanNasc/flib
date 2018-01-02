module.exports = {
    "up": `CREATE TABLE room_user (
        id BIGINT NOT NULL AUTO_INCREMENT,
        room_id BIGINT NOT NULL,
        user_id BIGINT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (room_id) REFERENCES room(id),
        FOREIGN KEY (user_id) REFERENCES user(id)
    )`,
    "down": "DROP TABLE room_user"
}