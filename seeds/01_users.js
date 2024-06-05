exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    { id: 1, email: 'user1@example.com', password: 'hashed_password1' },
    { id: 2, email: 'user2@example.com', password: 'hashed_password2' },
    // Add more users as needed
  ]);
};
