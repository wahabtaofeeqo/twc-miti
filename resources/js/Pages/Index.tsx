import ApplicationLogo from "@/Components/ApplicationLogo"
import { Head, Link } from "@inertiajs/react"

const Index = () => {
   return (
    <>
    <Head title="Warri Again?" />
    <div className="h-screen bg-green-700 cover">
        <div className="max-w-7xl mx-auto h-full py-5 overlay">
           
            <div className="flex items-center p-3 h-full">
                <div className="lg:basis-2/4 mx-auto text-center">
                    {/* <p className="text-4xl font-black text-white">
                        MC Miti Comedy
                    </p> */}

                    <p className="text-6xl font-black mb-6 text-white">
                        Warri Again?
                    </p>

                    <p className="mb-10 text-gray-400">
                        "The human race has only one really effective weapon and that is laughter."
                    </p>

                    <div>
                        <Link href="/tickets" className="py-3 px-10 bg-white rounded shadow-sm">Get Your Ticket</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
   )
}

export default Index;
