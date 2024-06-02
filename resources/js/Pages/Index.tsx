import ApplicationLogo from "@/Components/ApplicationLogo"
import { Link } from "@inertiajs/react"

const Index = () => {
   return (
    <>
        <div className="h-screen py-5 bg-green-900" >
            <div className="max-w-7xl mx-auto h-full">
                {/* <nav className="flex items-center justify-between mb-8">
                    <Link href="route('login')"
                        className="rounded-md px-3 flex items-center gap-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white">
                        <ApplicationLogo className="block h-9 w-auto fill-current text-center" />
                        <span className="font-bold text-2xl">MC Miti</span>
                    </Link>
                </nav> */}

                <div className="flex items-center p-3 h-full">
                    <div className="lg:basis-2/4">
                        {/* <h4 className="font-bold text-xl mb-6 text-light">Mici on the Mic</h4> */}

                        <p className="text-4xl font-black text-white">
                            MC Miti
                        </p>

                        <p className="text-6xl font-black mb-6 text-white">
                            The Abido Shaker!!!
                        </p>

                        <p className="mb-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat perferendis voluptatum fugiat impedit assumenda minima molestiae dolorem labore, rerum maiores tempore neque ducimus doloremque laboriosam fuga veritatis sunt cum!
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
                            <Link href="/tickets" className="py-2 px-10 bg-white rounded shadow-sm text-black">Get Your Ticket</Link>
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
