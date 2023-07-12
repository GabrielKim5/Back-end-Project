'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Pikachu',
          lastName: 'Luke Skywalker',
          email: 'pikachu@example.com',
          username: 'pikachu',
          password: 'pikachu',
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Charizard',
          lastName: 'Darth Vader',
          email: 'charizard@example.com',
          username: 'charizard',
          password: 'charizard',
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Bulbasaur',
          lastName: 'Gandalf',
          email: 'bulbasaur@example.com',
          username: 'bulbasaur',
          password: 'bulbasaur',
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Squirtle',
          lastName: 'Aragorn',
          email: 'squirtle@example.com',
          username: 'squirtle',
          password: 'squirtle',
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Jigglypuff',
          lastName: 'Legolas',
          email: 'jigglypuff@example.com',
          username: 'jigglypuff',
          password: 'jigglypuff',
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Mewtwo',
          lastName: 'Frodo Baggins',
          email: 'mewtwo@example.com',
          username: 'mewtwo',
          password: 'mewtwo',
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Snorlax',
          lastName: 'Gollum',
          email: 'snorlax@example.com',
          username: 'snorlax',
          password: 'snorlax',
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Eevee',
          lastName: 'Spider-Man',
          email: 'eevee@example.com',
          username: 'eevee',
          password: 'eevee',
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Machamp',
          lastName: 'Iron Man',
          email: 'machamp@example.com',
          username: 'machamp',
          password: 'machamp',
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Gyarados',
          lastName: 'Black Widow',
          email: 'gyarados@example.com',
          username: 'gyarados',
          password: 'gyarados',
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Dragonite',
          lastName: 'Captain America',
          email: 'dragonite@example.com',
          username: 'dragonite',
          password: 'dragonite',
          image:
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};