module.exports = {
    "up": `CREATE TABLE room_user (
        id BIGINT NOT NULL AUTO_INCREMENT,
        room_id BIGINT NOT NULL,
        user_id BIGINT NOT NULL,
        completed BOOLEAN DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        FOREIGN KEY (room_id) REFERENCES room(id),
        FOREIGN KEY (user_id) REFERENCES user(id)
    )`,
    "down": "DROP TABLE room_user"
}