import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import CardUser from '../components/CardUser'
import FormUser from '../components/FormUser'
import { addUser, fetchLastedUsers } from '../firebase/client'
import styles from '../styles/Main.module.css'

export default function Home() {

  const [users, setUsers] = useState([])

  const [formData, setFormData] = useState({ firstName: '', lastName: '', age: '', email: '' })

  const handleChange = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value
    }))
  }

  const resetForm = () => {
    formData.firstName = ''
    formData.lastName = ''
    formData.age = 0
    formData.email = ''
  }

  const handleSubmit = e => {
    e.preventDefault()
    addUser({
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      age: parseInt(formData.age),
      email: formData.email.trim()
    })
      .then(() => {
        resetForm()
        fetchLastedUsers().then(setUsers)
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    fetchLastedUsers().then(setUsers)
  }, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>WeFium Test</title>
        <meta name="description" content="WeFium Test by Jarinson Palacios" />
        <link rel="icon" href="/JP.png" />
      </Head>

      <main className={styles.main}>

        <FormUser onSubmit={handleSubmit} onChange={handleChange} initialValues={formData} />

        <div className={styles.sectionUsers}>
          <div className={styles.test}>
            <h2 className={styles.titleUser}>Users</h2>
          </div>
          <div className={styles.listCard}>
            {users.length === 0
              ? <p className={styles.textNotUsers}><strong>No users found...!<br />:(</strong></p>
              : users.map(({ id, firstName, lastName, age, email }) => (
                <CardUser
                  key={id}
                  id={id}
                  firstName={firstName}
                  lastName={lastName}
                  age={age}
                  email={email}
                />
              ))}
          </div>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/JarinsonY"
          target="_blank"
          rel="noopener noreferrer"
        >
          Develop by Jarinson Palacios
          <span className={styles.logo}>
            <Image src="/JP.png" alt="JP Logo" width={20} height={20} />
          </span>
        </a>
      </footer>
    </div>
  )
}
