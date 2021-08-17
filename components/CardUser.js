import styles from '../styles/Main.module.css'
import User from './Icons/User'

export default function CardUser(props) {

    return (
        <div className={styles.card} key={props.id}>
            <User />
            <p className={styles.firstName}>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>{props.age} years</p>
            <p>{props.email}</p>
        </div>
    )
}