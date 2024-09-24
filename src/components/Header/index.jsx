import styles from './Header.module.css'

function Header(){
    return(
        <header className={styles.header}>
            <h1>Calculador de IMC</h1>
        </header>
    )
}

export default Header;