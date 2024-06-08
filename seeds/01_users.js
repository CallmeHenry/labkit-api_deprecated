exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    { id: 1, email: 'user1@example.com', password: 'hashed_password1', firstName: "first1", lastName: "last1", },
    { id: 2, email: 'user2@example.com', password: 'hashed_password2', firstName: "first2", lastName: "last2" },
    // Add more users as needed
  ]);
};
