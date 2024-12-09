import ApplicationLogo from "@/Components/ApplicationLogo"
import { Head, Link } from "@inertiajs/react"

const Index = () => {
   return (
    <>
    <Head title="Home" />
    <div className="h-screen bg-green-700 cover">
        <div className="max-w-7xl mx-auto h-full py-5 overlay">
           
            <div className="flex items-center p-3 h-full">
                <div className="lg:basis-2/4 mx-auto text-center">
                    {/* <p className="text-4xl font-black text-white">
                        MC Miti Comedy
                    </p> */}

                    <p className="text-8xl font-black mb-6 text-white">
                        Warri Again?
                    </p>

                    <p className="mb-10 text-gray-400">
                        "The human race has only one really effective weapon and that is laughter."
                    </p>

                    <div className="mb-10 flex gap-3 items-center justify-center">
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
                        <Link href="/tickets" className="py-3 px-10 bg-white rounded shadow-sm me-3">Get Your Ticket</Link>
                        <Link href="/table" className="py-3 px-10 bg-pink-500 text-white rounded shadow-sm">View Table</Link>
                    </div>
                </div>
                {/* <div className="hidden lg:flex basis-2/4 items-center justify-center">
                    <div className="rounded-full bg-white flex items-center justify-center main" style={{width: "500px", height: "500px"}}>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
   </>
   )
}

export default Index;
