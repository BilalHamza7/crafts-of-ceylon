import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Homepage() {
    return (
        <>
            <div className="from-orange-400 from-40% to-orange-600 bg-gradient-to-br flex items-center min-h-screen">
                <Navbar />

                <div className="flex flex-col gap-7 justify-center items-start ml-12 ">
                    <p className="text-6xl font-fredoka">Explore The Craftsmanship of <br /> Sri Lanka's Finest Artisans.</p>
                    <p className="text-xl font-inter">Experience the Fusion of Tradition and Innovation, Unearth Exceptional <br /> Handcrafted Creations.</p>
                    <Link to="/customerSignIn">
                        <button className="p-3 rounded-lg bg-orange-300 hover:bg-orange-500 transition duration-300 text-lg font-poppins font-medium ">
                            Get Started!
                        </button>
                    </Link>
                </div>
                <div className="h-96 w-96 mr-28">
                    <img src="/basket.2b14f9e584e43ed0eba9.png" className="w-full h-full" loading="lazy" alt="Basket" />
                </div>
            </div>



            <div className="p-12 bg-gradient-to-bl from-orange-600 to-orange-400 flex flex-col justify-between gap-16 items-center leading-7">
                <p className="text-6xl font-fredoka font-medium">Our Top Sellers</p>

                <div className="flex items-center gap-10 bg-orange-300 rounded-lg p-4">
                    <img src="/elephantCarving.png" className="w-96" loading="lazy" alt="elephant carving" />
                    <p className="font-poppins h-fit w-[600px] font-medium">
                        <span className="font-inter text-3xl font-bold">Elephant Carving</span><br /><br />
                        Elephant wood carvings are a popular Sri Lankan handicraft, made from local hardwoods and used in religious and decorative settings. They depict elephants in various poses and are decorated with intricate patterns, often painted in vibrant colors. Traditional techniques have been passed down through generations and can take months or years to complete. Highly sought after by collectors and art lovers, Sri Lankan Elephant wood carvings are also commonly used as gifts and decorations in the country.
                        <br />
                        <span>
                            <button className="bg-orange-400 py-2 px-4 mt-3 font-inter text-sm font-bold rounded-md hover:bg-orange-500 transition duration-300">
                                Buy Now!
                            </button>
                        </span>
                    </p>
                </div>
                <div className="flex items-center gap-10 bg-orange-300 rounded-lg p-4">
                    <img src="/drum.png" className="w-96" loading="lazy" alt="elephant carving" />
                    <p className="font-poppins h-fit w-[600px] font-medium">
                        <span className="font-inter text-3xl font-bold">Leather Humpties</span><br /><br />
                        Handcrafted by skilled Sri Lankan artisans using high-quality leather,Ceylon Leather Humpties are durable and comfortable. Their sophisticated design adds elegance to any living space, providing a luxurious seating experience that's perfect for relaxation. Combining quality, durability, and elegance, these exquisite leather humpties are a
                        must-have addition to your home decor collection. Elevate your living space's ambiance with the Sri Lankan Leather
                        Humpties.
                        <br />
                        <span>
                            <button className="bg-orange-400 py-2 px-4 mt-3 font-inter text-sm font-bold rounded-md hover:bg-orange-500 transition duration-300">
                                Buy Now!
                            </button>
                        </span>
                    </p>
                </div>
                <div className="flex items-center gap-10 bg-orange-300 rounded-lg p-4">
                    <img src="/mask.png" className="w-96" loading="lazy" alt="elephant carving" />
                    <p className="font-poppins h-fit w-[600px] font-medium">
                        <span className="font-inter text-3xl font-bold">Traditional Wooden Mask</span><br /><br />
                        Experience the rich cultural heritage of Sri Lanka with our stunning collection of handcrafted wooden traditional masks. Made by skilled artisans using traditional techniques, these masks are not only functional but also beautiful works of art. Each mask tells a unique story and is a representation of Sri Lanka's cultural heritage.
                        Our collection includes a wide range of designs to suit any taste. These masks are made from high-quality wood, ensuring they are durable and long-lasting. Add a touch of Sri Lankan culture to your home or gift a special someone with a unique piece of traditional art today.
                        <br />
                        <span>
                            <button className="bg-orange-400 py-2 px-4 mt-3 font-inter text-sm font-bold rounded-md hover:bg-orange-500 transition duration-300">
                                Buy Now!
                            </button>
                        </span>
                    </p>
                </div>
            </div>

            <Footer />
        </>
    )
};
