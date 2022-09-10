import { useEffect } from "react";
import { useState } from "react";
import img1 from '../assets/image/loaderScreen1.gif'
import img2 from '../assets/image/loaderScreen2.gif'
import img3 from '../assets/image/loaderScreen3.gif'
import img4 from '../assets/image/loaderScreen4.gif'
import img5 from '../assets/image/loaderScreen5.gif'

const Loader = () => {
    const [number, setNumber] = useState(1)

    const images = {
        '1': img1,
        '2': img2,
        '3': img3,
        '4': img4,
        '5': img5
    }

    useEffect(() => {
        let number2 = Math.floor(Math.random() * 5 + 1)
        setNumber(number2)
    }, [])

    return (
        <div className="img-loader">
            <img  src={images[number]} alt="" />
        </div>
    );
};

export default Loader;