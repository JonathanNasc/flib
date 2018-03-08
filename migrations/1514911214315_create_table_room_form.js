module.exports = {
    "up": `CREATE TABLE room_form (
        id BIGINT NOT NULL AUTO_INCREMENT,
        room_id BIGINT NOT NULL,
        form_id BIGINT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        FOREIGN KEY (room_id) REFERENCES room(id),
        FOREIGN KEY (form_id) REFERENCES form(id)
    )`,
    "down": "DROP TABLE room_form"
}