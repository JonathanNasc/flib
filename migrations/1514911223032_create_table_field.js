module.exports = {
    "up": `CREATE TABLE field (
        id BIGINT NOT NULL AUTO_INCREMENT,
        label VARCHAR(255) NOT NULL,
        form_id BIGINT NOT NULL,
        type VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (form_id) REFERENCES form(id)
    )`,
    "down": "DROP TABLE field"
}