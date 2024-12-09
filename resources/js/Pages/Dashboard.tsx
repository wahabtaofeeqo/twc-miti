import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import moment from 'moment';
import PageLink from '@/Components/PageLink';
import { useState } from 'react';
import Modal from '@/Components/Modal';
import CreateUserForm from '@/Components/CreateUserForm';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import SelectInput from '@/Components/SelectInput';

export default function Dashboard({ auth, models, stats = [], tables = [] }) {

    const [isOpen, setOpen] = useState(false);
    const [seats, setSeats] = useState<any>([]);
    const [isTableModal, setToggleTableModal] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        ids: [],
        email: '',
        category: ''
    });

    const getDate = (model: any) => {
        return moment(model.created_at).format('MMMM Do YYYY');
    }

    const toggleSeat = (model: any) => {
        let all: any = [...seats];
        let index = seats.findIndex(item => item == model.id);
        if(index != -1) all.splice(index, 1);
        else all.push(model.id);

        setSeats(all);
        setData('ids', all)
    }

    const isSelected = (model: any) => {
        return seats.includes(model.id);
    }

    const getTotalTickets = (model) => {
        let total = model.quantity || 0;
        if(model.booker.is_buyer) {
            model.booker.tickets.forEach(item => total += item.total);
        }
        else total = 1;

        return total;
    }
    
    const onChange = (event: any) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e: any) => {
        e.preventDefault();
        const option = {
            onSuccess: () => {
                reset();
                setToggleTableModal(false)
            }
        }

        post(route('tables.create'), option)
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}>
            <Head title="Dashboard" />

            <Modal show={isOpen} onClose={() => setOpen(false)}>
                <div className='p-4'>
                    <h1 className='font-bold text-xl'>Create Booking</h1>
                    <p className='mb-6 text-slate-500 text-sm'>
                        Create User Profile and Booking to send QR to.
                    </p>
                    <CreateUserForm onCreated={() => setOpen(false)}></CreateUserForm>
                </div>
            </Modal>

            <Modal show={isTableModal} onClose={() => setToggleTableModal(false)}>
                <div className='p-4'>
                    <h1 className='font-bold text-xl mb-4'>Table for Guests</h1>
                    <form onSubmit={submit}>

                        <div className='bg-gray-400 p-3 rounded'>
                            <div className="grid grid-cols-5 lg:grid-cols-8 gap-2">
                                {
                                    tables[data.category]?.map((model, index) => {
                                        return (
                                            <div className={(model.booked || isSelected(model) ? 'bg-red-500 text-white' : 'bg-white') + " rounded-full p-2 flex items-center justify-center font-bold"} 
                                                key={model.id} onClick={() => toggleSeat(model)}>
                                                {model.label}
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {
                                !tables[data.category]?.length ? <p>Sold out</p> : <div></div> 
                            }
                        </div>
                        

                        <div className="mt-4">
                            <InputLabel htmlFor="category" value="Category" />

                            <SelectInput
                                id="category"
                                name="category"
                                value={data.category}
                                className="mt-1 block w-full"
                                onChange={onChange}
                                options={['Gold', 'Silver', 'Premium', 'Platinum']}
                                required
                            />

                            <InputError message={errors.category} className="mt-2" />
                        </div>

                        <div className='mt-4'>
                            <InputLabel htmlFor="firstname" value="Booked By" />
                            <TextInput
                                id="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                onChange={onChange}
                                required
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-end mt-6">
                            <button disabled={processing} className='py-2 px-10 bg-green-500 rounded text-white'>Book</button>
                        </div>
                    </form>
                </div>
            </Modal>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    
                    <div className='lg:flex gap-3 flex-wrap'>

                       {
                        stats?.map((item: any, index) => {
                            return (
                                <div key={index} className='text-gray-900 mx-4 h-44 lg:mx-0 bg-white p-3 basis-1/5 flex-1 shadow-sm rounded'>
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

                    <div className="bg-white overflow-hidden shadow-sm mx-4 lg:mx-0 rounded my-6">
                       <div className='flex justify-between items-center p-3'>
                            <button className='bg-green-400 text-white py-2 px-5 rounded' onClick={() => setToggleTableModal(!isTableModal)}>Book Table</button>
                            <div className=''>
                                <a href="/dashboard/export-qr" className="bg-sky-900 rounded ms-6 px-3 py-2 text-white me-3">Export Data</a>
                                <button className='bg-red-500 text-white py-2 px-5 rounded' onClick={() => setOpen(!isOpen)}>Add User</button>
                            </div>
                       </div>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">#</th>
                                        <th scope="col" className="px-6 py-3">Name</th>
                                        <th scope="col" className="px-6 py-3">Email</th>
                                        {/* <th scope="col" className="px-6 py-3">Phone</th> */}
                                        <th scope="col" className="px-6 py-3">Type</th>
                                        <th scope="col" className="px-6 py-3">Buyer</th>
                                        <th scope="col" className="px-6 py-3">Total</th>
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
                                                    <td className="px-6 py-4"> {model.category?.name || 'NA'} </td>
                                                    <td className="px-6 py-4"> {model.booker.is_buyer ? 'YES' : 'NO'} </td>
                                                    <td className="px-6 py-4"> {getTotalTickets(model)} 
                                                    </td>
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
