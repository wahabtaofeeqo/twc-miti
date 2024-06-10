import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import moment from 'moment';
import PageLink from '@/Components/PageLink';

export default function Dashboard({ auth, models, stats = [] }) {

    const getDate = (model: any) => {
        return moment(model.created_at).format('MMMM Do YYYY');
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    
                    <div className='lg:flex gap-3'>

                       {
                        stats?.map((item: any, index) => {
                            return (
                                <div key={index} className='text-gray-900 mx-4 h-44 lg:mx-0 bg-white p-3 basis-1/5 shadow-sm rounded mb-4'>
                                    <h1 className='font-bold mb-4'>{item.name}</h1>
                                    <div className='flex gap-3 items-center'>
                                        <i className="fas fa-ticket fa-3x text-sky-500"></i>
                                        <p className='text-2xl'>{item.total}</p>
                                    </div>
                                </div>
                            )
                        })
                       }
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm mx-4 lg:mx-0 rounded mb-6">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">#</th>
                                        <th scope="col" className="px-6 py-3">Name</th>
                                        <th scope="col" className="px-6 py-3">Email</th>
                                        <th scope="col" className="px-6 py-3">Phone</th>
                                        <th scope="col" className="px-6 py-3">Type</th>
                                        <th scope="col" className="px-6 py-3">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        models.data.map((model: any, index: number) => {
                                            return (
                                                <tr className="bg-white border-b" key={index}>
                                                    <td className="px-6 py-4"> {index + 1} </td>
                                                    <td className="px-6 py-4 font-bold"> {model.booker.name} </td>
                                                    <td className="px-6 py-4"> {model.booker.email} </td>
                                                    <td className="px-6 py-4"> {model.booker.phone || 'N/A'} </td>
                                                    <td className="px-6 py-4"> {model.category?.name || 'NA'} </td>
                                                    <td className="px-6 py-4"> {getDate(model) || 'N/A'} </td>
                                                </tr>
                                            )
                                        })
                                    }

                                    {
                                        models.data.length == 0 && (<tr>
                                            <td className='text-center pt-5' colSpan={8}>No Records Found</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className='px-6 py-3'>
                            <PageLink links={models.links}></PageLink>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
