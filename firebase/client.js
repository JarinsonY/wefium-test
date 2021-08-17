import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBk7krJ_GG6dGSHQxjlF-yEjTqCxqAG1Lc",
    authDomain: "wefium-test.firebaseapp.com",
    projectId: "wefium-test",
    storageBucket: "wefium-test.appspot.com",
    messagingSenderId: "167789085876",
    appId: "1:167789085876:web:4f5e6ae535d8d5196203e1",
    measurementId: "G-FTQHSD65FT"
  }

/* Condicionar a firebase para que se inicialize solo 1 vez */
firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export const addUser = ({ firstName, lastName, age, email }) => {
    return db.collection('users').add({
        firstName,
        lastName,
        age,
        email,
        addedAt: firebase.firestore.Timestamp.fromDate(new Date())
    })
}

export const fetchLastedUsers = () => {
    return db.collection('users')
        .orderBy("addedAt", "desc")
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => {
                const data = doc.data()
                const id = doc.id
                return {
                    id,
                    ...data
                }
            })
        })
}