// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'


//  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//  const logger = createLogger({
//   timestamp: true,
//   predicate: true,
//   level: 'log',
//   duration: true
// });

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk, logger),
//   // other store enhancers if any
// );
//  //import logger from 'redux-logger'

// // const logger = function(store) {
// //   return function(next) {
// //     return function (action) {
// //       console.log(action);
// //       next (action)
// //     }
// //   }
// // }

// const createId = () => Math.random();

//  const initialState = {
//    books: [],
//    readers: []
//  };

// const books = (state = [], action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case 'ADD_BOOK':
//       return [...state, { id: createId(), title: payload }];
        

//     case 'UPDATE_BOOK':
//       return state.map((item) => {
//         if (item.id === payload.id) {
//           return { ...item, title: payload.newName };
//         }
//         return item;
//       })
//     case 'REMOVE_BOOK':
//       return state.filter(book => book.id !== payload)
//       default:
//       return state;
      
// }
// };

// const readers = (state = [], action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case 'ADD_READER':
//       return [...state, { id: createId(), title: payload }];

//     case 'UPDATE_READER':
//       return state.map((item) => {
//         if (item.id === payload.id) {
//             return { ...item, title: payload.newReaderName };
//         }

//         return item;
// });
//     case 'REMOVE_READER':
//       return state.filter(reader => reader.id !== payload);
     
//     default:
//       return state;
//   }
//   // console.log(action);
//   // return state;
// }

// const reducer = combineReducers({
//   books: books,
//   readers: readers,
//   });




// const store = createStore(reducer, initialState, enhancer );
// // const store = createStore(reducer, initialState, composeEnhancers( applyMiddleware(thunk, logger)) );



// const addBook = (bookName) => ({ type: 'ADD_BOOK', payload: bookName });
// const updateBook = (id, newName) => ({ type: 'UPDATE_BOOK', payload: { id, newName } });
// const removeBook = (id) => ({ type: 'REMOVE_BOOK', payload: id });

// const addReader = (readerName) => ({ type: 'ADD_READER', payload: readerName });
// const updateReader = (id, newReaderName) => ({ type: 'UPDATE_READER', payload: { id, newReaderName } });
// const removeReader = (id) => ({ type: 'REMOVE_READER', payload: id });

// store.subscribe(() => {
//   console.log('From subscribe', { ...store.getState() });
// });


// console.log('.............initial state');

// store.dispatch(addBook('Book 1'));
// store.dispatch(addBook('Book 2'));
// store.dispatch(addReader('Reader 3'));
// store.dispatch(addReader('Reader 3'));
// console.log('......................update')
// store.dispatch(updateBook(store.getState().books[0].id, 'Updated Book Title'));
// store.dispatch(updateReader(store.getState().books[0].id, 'Updated Book Title'));



// console.log('.............remove');
// store.dispatch(removeBook(store.getState().books[0].id));
// store.dispatch(removeBook(store.getState().books[0].id));
// store.dispatch(removeReader(store.getState().readers[0].id));
// store.dispatch(removeReader(store.getState().readers[0].id));


// console.log('.....................add reader')