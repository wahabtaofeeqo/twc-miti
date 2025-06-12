import ApplicationLogo from "@/Components/ApplicationLogo"
import { Head, Link } from "@inertiajs/react"

const Index = () => {
   return (
    <>
        <Head title="Comedy Show" />
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden p-8 text-center">
                {/* Image */}
                <div className="mb-8">
                    <img 
                        src="/images/mouth/cover.jpg" 
                        alt="Welcome Illustration"
                        className="w-full animate-fade-in"
                    />
                </div>

                {/* Button */}
                <Link 
                    href="/tickets" // Change to your desired route
                    className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Get Ticket
                </Link>
            </div>

            <style>{`
                .animate-fade-in {
                    animation: fadeIn 1s ease-in-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    </>
   )
}

export default Index;
