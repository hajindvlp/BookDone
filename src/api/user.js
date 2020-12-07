const newUser = (firebase, user) => {
  const docRef = firebase.firestore.collection('users').doc(user.uid);

  docRef.get().then(doc => {
    if(!doc.exists) {
      docRef.set({
        name: user.displayName,
        books: [],
      });
    }
  });
}

export { newUser };