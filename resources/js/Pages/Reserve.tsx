const Reserve = () => {
    return (
        <>
            <div className="h-screen bg-amber-400">
                <div className="max-w-7xl mx-auto flex items-center justify-center h-full">
                    <div className="p-3 py-10">
                        <div className="text-center">
                            <h4 className="text-5xl mb-4 font-black text-center">Contact Us</h4>
                            <p className="text-slate-500">For Table reservations, Call</p>

                            <h4 className="text-2xl font-bold mb-4 text-slate-500">
                                <i className="fas fa-phone me-2"></i>
                                Phone: 
                            </h4>
                            <div className="mb-4">
                                <a href="tel:+2347049121222" className="text-blue-700 underline font-bold">+234 704-912-1222</a>
                            </div>
                            <p className="text-slate-500 mb-4 text-xl font-bold">Or</p>
                            <div className="mb-4">
                                <a href="tel:+2349093704907" className="text-blue-700 underline font-bold">+234 909-370-4907</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reserve;