import ApplicationLogo from "@/Components/ApplicationLogo"
import { Head, Link } from "@inertiajs/react"

const Index = () => {
   return (
    <>
    <Head title="Warri Again Comedy" />
    <div className="h-screen bg-green-700 cover">
        <div className="max-w-7xl mx-auto h-full py-5 overlay">
           
            <div className="flex items-center p-3 h-full">
                <div className="lg:basis-2/4 mx-auto text-center">
                    <p className="text-8xl font-black mb-6 text-white">
                        Warri Again?
                    </p>

                    <p className="mb-10 text-gray-400">
                        "The human race has only one really effective weapon and that is laughter."
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link href="/tickets" className="py-2 px-10 bg-white rounded shadow-sm">Get Your Ticket</Link>
                        <Link href="/table" className="py-2 text-white px-10 bg-pink-500 rounded shadow-sm">View Table</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
   )
}

export default Index;
