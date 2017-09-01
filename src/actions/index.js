
//named export https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281

// selectBook is an ActionCreator
export function selectBook(book) {
  // KEY: must return an action object with two properties:
    // 1. type property: always uppercase
    // 2. payload property (describes the conditions of the action being triggered)

  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}