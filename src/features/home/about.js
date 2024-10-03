export default function About() {
    return (
        <>
            <div className="from-orange-400 from-40% to-orange-600 bg-gradient-to-br flex flex-col min-h-screen relative">
                <div className="relative w-full h-72">
                    <img src="/aboutBackground.png" alt="About Background" className="w-full h-full object-cover" />

                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <p className=" text-white text-4xl font-bold ">
                            Welcome
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};
