import { Head } from "@inertiajs/react";

const Table = ({tables}) => {
  
    return (
        <>
        <Head title="Tables" />
        <div>
            <div className="max-w-7xl mx-auto py-5">
                <div className="lg:h-[600px] mb-5 p-3">
                    <img src="/images/table.png" alt="" className="h-full w-full" />
                </div>
            </div>

            <div className="p-5 bg-green-100">
                <div className="container mx-auto">
                    <div className="my-5">
                        {
                            Object.keys(tables).map(group => {
                                return (
                                    <div key={group} className="mb-5 bg-gray-500 p-3 py-5 rounded">
                                        <h4 className="mb-4 font-bold text-xl text-green-500">{group}</h4>
                                        <div className="grid grid-cols-6 lg:grid-cols-10 gap-2">
                                        {
                                            tables[group].map((model) => {
                                                return (
                                                    <div className={(model.booked ? 'bg-red-500 text-white' : 'bg-white') + " rounded-full p-2 flex items-center justify-center font-bold"} key={model.id}>
                                                        {model.label}
                                                    </div>
                                                )
                                            })
                                        }
                                        </div>
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