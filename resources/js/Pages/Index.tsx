import ApplicationLogo from "@/Components/ApplicationLogo"
import { Head, Link } from "@inertiajs/react"

const Index = () => {
   return (
    <>
    <Head title="The Abido Shaker" />
    <div className="h-screen py-5 bg-green-900" >
        <div className="max-w-7xl mx-auto h-full">
           
            <div className="flex items-center p-3 h-full">
                <div className="lg:basis-2/4">
                    <p className="text-4xl font-black text-white">
                        MC Miti Comedy
                    </p>

                    <p className="text-6xl font-black mb-6 text-white">
                        The Abido Shaker!!
                    </p>

                    <p className="mb-10 text-gray-400">
                        "Laughter heals all wounds, and that's one thing that everybody shares. No matter what you're going through, it makes you forget about your problems. I think the world should keep laughing."
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
                        <Link href="/tickets" className="py-3 px-10 bg-white rounded shadow-sm text-black">Get Your Ticket</Link>
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
