import ApplicationLogo from "@/Components/ApplicationLogo"
import { Head, Link } from "@inertiajs/react"

const Index = () => {
   return (
    <>
    <Head title="Warri Again?" />
    <div className="h-screen bg-sky-700 cover">
        <div className="max-w-7xl mx-auto h-full py-5 overlay">
           
            <div className="flex items-center p-3 h-full">
                <div className="lg:basis-2/4 mx-auto text-center">
                    {/* <p className="text-4xl font-black text-white">
                        MC Miti Comedy
                    </p> */}

                    <h1 className="text-8xl font-[900] mb-6 text-white">
                        Fun Fiesta
                    </h1>

                    <p className="mb-20 text-white font-bold">Carnival Extravaganza</p>

                    <div className="mb-10 flex gap-3 justify-center hidden">
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
                        <Link href="/tickets" className="py-3 px-10 bg-pink-700 text-white rounded-2xl shadow-sm">Get Your Ticket</Link>
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
