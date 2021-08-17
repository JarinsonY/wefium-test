import { firestore } from "../../firebase/admin"

export default (req, res) => {
    firestore
        .collection("users")
        .orderBy("addedAt", "desc")
        .get()
        .then(snap => {
            const users = snap.docs.map(user => {
                return user.data()
            })
            res.status(200).json({ data: users })
        })
}