const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Game, Record } = require('../models');

const resolvers = {
  Query: {
    game: async (name) => {
      return await Game.find();
    },

    game: async (parent, { _id }) => {
      return await Game.findById(_id.name);
    },

    record: async (parent, { game, name }) => {
      const params = {};

      if (game) {
        params.game = game;
      }
      if (name) {
        params.name = {
          $regex: name,
        };
      }
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "games.records",
          populate: "records",
        });

        user.games.sort((a, b) => b.recordDate - a.recordDate);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    updateUser: async (parent, args, context) => {
        if (context.user) {
          return await User.findByIdAndUpdate(context.user._id, args, { new: true });
        }
        throw new AuthenticationError('Not logged in');
    },

    addRecord: async (parent, { game }, context) => {
        if (context.user) {
          const record = new Record({ game });
  
          await User.findByIdAndUpdate(context.user._id, { $push: { records: record } });
  
          return record;
        }
  
        throw new AuthenticationError('Not logged in');

    }
    
  }
};


module.exports = resolvers;