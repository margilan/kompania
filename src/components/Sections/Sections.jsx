import styles from './Sections.module.css'
import img from './Ellips.png'
import opaxo from './opexo.svg'
import insta  from './insta.svg'
import telegram from './telegram.svg'
import feecbook from './fecbook.svg'
import git  from './github.svg'

export default function Sections() {
  return (
    <>
    <div className={styles.all}>
        <div className="texts">
            <div className = 'one-text'>
                <h1 className={styles.h1}>Kompaniya ma'lumotlari</h1>
            </div>
            <div className='thre-text'>
                <h3 className={styles.text}>Kompaniya haqidagi ma’lumotlarni kiriting</h3>
            </div>
            <div className={styles.images}>
                <img src={img} />
                <button className={styles.btn}>Yuklash</button>
            </div>
        </div>
        <div className="inputs">
            <div className="one-input">
                <h1 className={styles.haj1}>Kompaniya nomi *</h1>
                <input className={styles.input} type="text" placeholder='Kompaniya nomi ...' />
            </div>
            <div className="two-input">
                <h1 className={styles.ja11}> Email *</h1>
                <input className={styles.input} type="email" placeholder='Emailingizni kiriting ...' />
            </div>
            <div className="three-input">
                <h1 className={styles.ja11}> Telefon raqami*</h1>
                <input className={styles.input} type="number" placeholder='UZ +998' />
            </div>
        </div>
        <div className="links">
            <p className={styles.link}>Linklar *</p>
            <div className={styles.lik}>
                <div className="one-link">
                    <button className={styles.onelik}>
                        <img src={opaxo} alt="rasm bor" />
                    </button>
                </div>
                <div className="two-link">
                <button className={styles.onelik}>
                        <img src={insta} alt="rasm bor" />
                    </button>
                </div>
                <div className="three-link">
                <button className={styles.onelik}>
                        <img src={telegram} alt="rasm bor" />
                    </button>
                </div>
                <div className="four-link">
                <button className={styles.onelik}>
                        <img src={feecbook} alt="rasm bor" />
                    </button>
                </div>
                <div className="five-link">
                <button className={styles.onelik}>
                        <img src={git} alt="rasm bor" />
                    </button>
                </div>
            </div>
        </div>
        <div className={styles.davlat}>
            <div className="one">
                <h2 className={styles.onetext}>Davlat *</h2>
                <input className={styles.in} type="text" placeholder='Davlat'/>
            </div>
            <div className="two">
            <h2 className={styles.onetext}>Shahar *</h2>
                <input className={styles.in} type="text" placeholder='Shahar'/>
            </div>
        </div>
        <div className={styles.info}>
            <div className="on-info">
            <h1 className={styles.ja11}> Yashash joyi *  </h1>
                <input className={styles.input} type="text" placeholder='Yashash joyi ...' />
            </div>
            <div className="one-info">
            <h1 className={styles.ja11}> Hodimlar soni *  </h1>
                <input className={styles.input} type="text" placeholder='Hodimlar soni ...' />
            </div>
            <div className="desc">
                <p className={styles.izoh}>Izoh *</p>
                <input className={styles.desc} type="text" placeholder='Kompaniya haqida izoh qoldiring...' />
            </div>
            <div className={styles.twobutton}>
                <div className="onebutton">
                    <button className={styles.ortga}>Ortga</button>
                </div>
                <div className={styles.twoobutton}>
                    <button className={styles.keyingi}>Keyingi</button>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
