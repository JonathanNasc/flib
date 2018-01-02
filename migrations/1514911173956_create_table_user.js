module.exports = {
    "up": `CREATE TABLE user (
        id BIGINT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        login_type VARCHAR(15) NOT NULL,
        img_url VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL,
        PRIMARY KEY (id)
    )`,
    "down": "DROP TABLE user"
}