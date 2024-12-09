import { Head } from "@inertiajs/react";

const Table = () => {
    return (
        <>
        <Head title="Warri Again?" />
        <div>
            <div className="max-w-7xl mx-auto py-5">
                <div className="lg:h-[600px] mb-5 p-3">
                    <img src="/images/table.png" alt="" className="h-full w-full" />
                </div>
            </div>

            <div className="p-5 bg-green-500">
                <div className="container mx-auto">
                    <div className="grid grid-cols-10 gap-2">
                        {
                            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1, 1].map((item, index) => {
                                return (
                                    <div className="rounded-full bg-white p-2 flex items-center justify-center font-bold" key={index}>
                                        {index}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Table;