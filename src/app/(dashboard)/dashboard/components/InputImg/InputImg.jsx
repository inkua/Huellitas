'use client'

import Image from 'next/image';
import styles from './InputImg.module.css';

function InputImg({data}) {
    
    const {selectedImage, setSelectedImage} = data;

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <section className={styles.layout}>
            {selectedImage && 
                <div className={styles.boxWrapper}>
                    <div className={styles.wrapper}>
                            <Image
                                src={selectedImage}
                                alt="Selected Image"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'right' }}
                            />
                    </div>
                </div>
            }
            <div className={styles.inputBox}>
                <input
                    className="block mb-2 text-sm font-medium text-[#6b6b6b]"
                    required
                    type="file"
                    name="image"
                    id="image"
                    onChange={handleImageChange}
                />
            </div>
        </section>
    );
}

export default InputImg;
