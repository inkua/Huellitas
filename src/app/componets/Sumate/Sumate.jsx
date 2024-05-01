import styles from './SumateComponent.module.css';
import Image from 'next/image'; // Import Image component from Next.js
import girlDog from '../../../../public/svg/GirlDog.svg';
function Sumate() {
    return (
        <div className={styles.volunteerContainer}>
        <div className={styles.messageContainer}>
            <p>TU TAMBIÉN PUEDES AYUDAR</p>
        </div>
        <div className={styles.imageContainer}>
            <Image src={girlDog} alt="Image" width={200} height={200} />
        </div>
        <div className={styles.nameInput}>
            <input type="text" placeholder="Escribe tu nombre completo" />
        </div>

        <div className={styles.contactInfo}>
            <input type="text" placeholder="Danos un número para contactarte" />
            <input type="text" placeholder="Dejanos tu mail" />
        </div>

        <button className={styles.volunteerButton}>QUIERO SER VOLUNTARIO</button>
        </div>
    )
}

export default Sumate
