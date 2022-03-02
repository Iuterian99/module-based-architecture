const PG = require("../../lib/postgresOOP");

class Users extends PG {
  getUsers() {
    return this.fetchAll(`
            SELECT
                *
            FROM
                users
        `);
  }

  UpdateUsers(user_age, user_name, user_id) {
    return this.fetchAll(`
    UPDATE 
        users
    SET
        user_age = 
        (CASE
            WHEN $1 > 0 THEN $1 ELSE users.user_age
        END), 
        user_name = 
        (CASE
            WHEN LENGTH($2) > 0 THEN $2 ELSE users.user_name
        END)
    WHERE 
          user_id = $3 
    RETURNING *
        `);
  }

  getUsersById(id) {
    return this.fetch(
      `
            SELECT
                *
            FROM
                users
            WHERE
                user_id = $1
        `,
      id
    );
  }
}

module.exports = new Users();
