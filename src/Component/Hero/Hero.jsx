import { useEffect, useState } from 'react';
import img1 from '../../assets/realstate1.jpg'
import img2 from '../../assets/realstate2.jpg'
import img3 from '../../assets/realstate3.jpg'
import Login from '../../Page/Login/Login';
const Hero = () => {
    const images = [img1, img2, img3];
    const [currentImg, setCurrentImg] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImg(prevImg => prevImg === images.length - 1 ? 0 : prevImg + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length])
    return (
        <div>
            <div
                className="hero min-h-screen h-10"
                style={{
                    backgroundImage: `url('${images[currentImg]}')`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="flex gap-35 lg:gap-70 justify-between text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Welcome to a new era of real estate. At the intersection of design and comfort, we curate a premier collection of residences tailored to your lifestyle. Whether you are seeking a minimalist urban loft or a sprawling estate, our mission is to connect you with spaces that inspire. Discover your next chapter with a partner who understands that a home is more than just a property—it’s a sanctuary.
                        </p>
                        <button className="btn bg-red-950">Find Your Home</button>
                    </div>
                    <Login></Login>
                </div>
            </div>
        </div>
    );
};

export default Hero;