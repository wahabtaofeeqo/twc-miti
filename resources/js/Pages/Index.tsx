import ApplicationLogo from "@/Components/ApplicationLogo"
import { Head, Link } from "@inertiajs/react"

const Index = () => {
   return (
    <>
    <Head title="The Chronicle of Ushbebe" />
    <div className="h-screen bg-yellow-700 cover">
        <div className="max-w-7xl mx-auto h-full py-5 overlay">
           
            <div className="flex items-center p-3 h-full">
                <div className="lg:basis-2/4">
                    {/* <p className="text-4xl font-black text-white">
                        MC Miti Comedy
                    </p> */}

                    <p className="text-6xl font-black mb-6 text-white">
                        The Chronicle of Ushbebe
                    </p>

                    <p className="mb-10 text-gray-400">
                        "The human race has only one really effective weapon and that is laughter."
                    </p>

                    <div className="mb-10 flex gap-3">
                        <a href="">
                            <i className="fab fa-facebook text-sky-300"></i>
                        </a>
                        <a href="">
                            <i className="fab fa-instagram text-pink-500"></i>
                        </a>
                        <a href="">
                            <i className="fab fa-youtube text-red-500"></i>
                        </a>
                    </div>

                    <div>
                        <Link href="/tickets" className="py-3 px-10 bg-red-500 rounded shadow-sm text-white">Get Your Ticket</Link>
                    </div>
                </div>
                <div className="hidden lg:flex basis-2/4 items-center justify-center">
                    <div className="rounded-full bg-white flex items-center justify-center main" style={{width: "500px", height: "500px"}}>
                        {/* <img src="/images/bg.png" alt="BG" width="300px" height="300px" /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
   )
}

export default Index;
