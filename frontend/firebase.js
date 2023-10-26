// import { initializeApp } from 'firebase/app'
// import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: 'AIzaSyDXsuWO5UNZMuuDgnDefoIR3s5U-LuFFDE',
//   authDomain: 'my-book-shelf-7777.firebaseapp.com',
//   projectId: 'my-book-shelf-7777',
//   storageBucket: 'my-book-shelf-7777.appspot.com',
//   messagingSenderId: '47822684463',
//   appId: '1:47822684463:web:5f0efffb5a4f19fb4fe1da',
//   measurementId: 'G-LXQW3Q4Q56',
// }

// init firevase app
// initializeApp(firebaseConfig)

// init services
// const db = getFirestore()

// collection ref
// const booksCollection = collection(db, 'books')

// get collection data
// getDocs(booksCollection)
//   .then((snapshot) => {
//     // console.log(snapshot.docs)
//     let books = []
//     snapshot.docs.forEach((doc) => {
//       books.push({ ...doc.data(), id: doc.id })
//     })
//     console.log('books', books)
//   })
//   .catch((err) => {
//     console.log(err.message)
//   })

// Data for the new book document
// const newBookData = {
//   author: 'Steve Krug',
//   eBook: true,
//   id: 'FlcqlHRW63a1IHdP3Y0d',
//   isAudio: true,
//   isHardCopy: true,
//   providedYear: 2000,
//   ratings: 4.5,
//   status: 'In-Shelf',
//   title: 'Don’t Make Me Think ',
// }

// Add a new document to the "books" collection
// Check if a document with similar data exists

// const booksQuery = query(
//   booksCollection,
//   where('title', '==', newBookData.title),
//   where('author', '==', newBookData.author),
// )

// getDocs(booksQuery)
//   .then((querySnapshot) => {
//     if (querySnapshot.empty) {
//       // No matching documents found, add the new document
//       addDoc(booksCollection, newBookData)
//         .then((docRef) => {
//           console.log('Document written with ID: ', docRef.id)
//         })
//         .catch((error) => {
//           console.error('Error adding document: ', error)
//         })
//     } else {
//       // A document with similar data already exists
//       console.log('Bu kitob oldindan mavjud.')
//     }
//   })
//   .catch((error) => {
//     console.error('Error querying documents: ', error)
//   })
