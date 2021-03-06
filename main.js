var Schema = require('graph.ql')

var schema = Schema(`
  scalar Date

  type Character {
    name: String!
    homeworld: Planet
    films: [Film]
  }

  type Film {
    title: String!
    producers: [String]
    characters: [Character]
    release_date: Date
  }

  type Planet {
    name: String!
    population: Int
  }

  type Query {
    find_film (id: Int): Film
    find_character (id: Int): Character
  }
`,{
  Date: {
    serialize: function(val){
      return new Date(v);
    }
  },
  Character: {

  },
  Film: {

  },
  Planet: {

  },
  Query: {
    find_film(query, args){
      return {
        title: 'A New Hope'
      }
    },
    find_character (query, args){
      console.log(query, args)
    }
  } 
})

schema(`
  query find ($film: Int) {
    find_film(id: $film) {
      title
    }
  }
`, {
  film: 1
}).then(function(res){
  console.log(res)
})

// schema = ([[query]], [[variables]])
//   .then(function(res){
//     console.log(res)
//   })