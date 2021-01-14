const gameReducer = (state = {squares: [], players: [], ventureCards: [], sharkCards: [], loading: false}, action) => {
  switch (action.type) {
    case "LOAD_GAMESQUARES":
      return {
        ...state,
        squares: [],
        loading: true
      }
    case "ADD_GAMESQUARES":
      return {
        ...state,
        squares: action.squares,
        loading: false
      }
    case 'LOAD_GAME':
      return {
        ...state,
      }
    case 'CREATE_GAME':
      return {
        ...state,
        gameId: action.game.id
      }
    case 'LOAD_PLAYERS':
      return {
        ...state,
        players: [...state.players]
      }
    case 'ADD_PLAYERS':
      return {
        ...state,
        players: [action.game.players.playerOne, action.game.players.playerTwo, action.game.players.playerThree, action.game.players.playerFour],
        gameId: action.game.gameId
      }
    case 'LOAD_VENTURE':
    case 'ADD_VENTURE':
      return {
        ...state,
        ventureCards: action.ventureCards
      }
    case 'LOAD_SHARK':
    case 'ADD_SHARK':
      return {
        ...state,
        sharkCards: action.sharkCards
      }
    case 'SAVING_GAME':

    // eslint-disable-next-line
    default:
      return state
  }
}

export default gameReducer