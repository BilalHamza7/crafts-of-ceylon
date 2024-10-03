import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function About() {
    return (
        <>
            <div className="from-orange-400 from-40% to-orange-600 bg-gradient-to-br flex flex-col items-center min-h-screen">
                <Navbar />
                <div className="relative w-full h-64 mt-16">
                    <img src="/aboutBackground.png" alt="About Background" className="w-full h-full" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 ">
                        <p className=" text-white text-4xl font-bold font-inter">
                            About Us
                        </p>
                        <p className=" text-white text-xl font-poppins ">
                            Let us tell you about ourselves and what we bring to the community.
                        </p>
                    </div>
                </div>


                <div className="py-12 flex flex-col justify-between gap-14 items-center leading-relaxed">
                    <div className="flex items-center gap-10 bg-orange-300 rounded-lg p-4">
                        <img src="/about1.png" className="w-96 rounded-xl" loading="lazy" alt="elephant carving" />
                        <p className="font-poppins h-fit w-[600px] font-medium">
                            <span className="font-inter text-3xl font-bold">What We Do</span><br /><br />
                            "At Crafts of Ceylon, we are on a mission to bridge the gap between artisans and admirers of Sri Lankan craftsmanship. We provide a dedicated platform where skilled artisans can showcase and sell their handmade treasures to a global audience. We connect customers with the rich and authentic heritage of Sri Lankan handicrafts, offering an immersive shopping experience filled with culture, tradition, and artistry."
                        </p>
                    </div>
                    <div className="flex items-center gap-10 bg-orange-300 rounded-lg p-4">
                        <img src="/about2.png" className="w-96 rounded-xl" loading="lazy" alt="elephant carving" />
                        <p className="font-poppins h-fit w-[600px] font-medium">
                            <span className="font-inter text-3xl font-bold">Our Vision</span><br /><br />
                            "Our vision is to become the ultimate destination for Sri Lankan craftsmanship. We aim to be the go-to platform that empowers local artisans, contributes to their economic well-being, and enriches the lives of customers by offering a curated selection of genuine Sri Lankan handicrafts."
                        </p>
                    </div>
                    <div className="flex items-center gap-10 bg-orange-300 rounded-lg p-4">
                        <img src="/about3.png" className="w-96 rounded-xl" loading="lazy" alt="elephant carving" />
                        <p className="font-poppins h-fit w-[600px] font-medium">
                            <span className="font-inter text-3xl font-bold">Cultural Impact</span><br /><br />
                            "At Crafts of Ceylon, we take pride in our role in preserving and promoting Sri Lankan culture. By providing this platform for artisans, we ensure that the skills and artistry passed down through generations continue to thrive. Our commitment to cultural impact extends to enriching the lives of customers and enhancing the cultural experience of all those who appreciate the beauty of Sri Lankan heritage."
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
};
