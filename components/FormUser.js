import styles from '../styles/Main.module.css'

export default function FormUser(props) {

    const { onChange, initialValues } = props


    return (
        <>
            <form onSubmit={props.onSubmit} className={styles.form}>
                <div className={styles.form__group}>
                    <label htmlFor="firstName" className={styles.form__label}>First Name</label>
                    <input onChange={(e) => onChange('firstName', e.target.value)} type="text" pattern="[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+" title="Numbers are not accepted in this field." id="firstName" className={styles.form__input} value={initialValues.firstName} placeholder="Input name here" required />
                </div>
                <div>
                    <label htmlFor="lastName" className={styles.form__label}>Last Name</label>
                    <input onChange={(e) => onChange('lastName', e.target.value)} type="text" pattern="[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+" title="Numbers are not accepted in this field." id="lastName" className={styles.form__input} value={initialValues.lastName} placeholder="Input lastname here" required />
                </div>
                <div>
                    <label htmlFor="age" className={styles.form__label}>Age</label>
                    <input onChange={(e) => onChange('age', e.target.value)} type="number" min={1} id="age" className={styles.form__input} value={initialValues.age} placeholder="Input age here" required />
                </div>
                <div>
                    <label htmlFor="email" className={styles.form__label}>Email</label>
                    <input onChange={(e) => onChange('email', e.target.value)} type="email" id="email" className={styles.form__input} value={initialValues.email} placeholder="Input email here" required />
                </div>
                <button className={styles.form__btn}>Add</button>
            </form>
        </>
    )
}