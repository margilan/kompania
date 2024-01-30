import styles from './Header.module.css'
import logo from './Logo.svg'
export default function Header() {
  return (
      <>
      <div className= {styles.all}>
        <div className={styles.logo}>
          <img className={styles.img} src = {logo} />
        </div>
        <div className={styles.uls}>
          <ul className={styles.ul}>
            <li className={styles.li}>Vakansiyalar</li>
            <li className={styles.li}>Kandidatlar</li>
            <li className={styles.li}>Kompaniyalar</li>
            <li className={styles.li}>Xizmatlar</li>
            <li className={styles.li}>Ta’lim</li>
          </ul>
        </div>
        <div className="sel">
          <select className={styles.select}>
            <option className={styles.one} value="1">O'zbek</option>
            <option className={styles.two}  value="2">Rus</option>
            <option className={styles.three}  value="3">Ingliz</option>
          </select>
          <button className={styles.button}>Boshlash</button>
        </div>
      </div>
      </>
 )
}
