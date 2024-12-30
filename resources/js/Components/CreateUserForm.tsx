import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import SelectInput from './SelectInput';

export default function CreateUserForm({onCreated}) {

    const { data, setData, post, put, processing, errors, reset } = useForm({
        firstname: '',
        lastname: '',
        category: '',
        email: '',
        phone: '',
        quantity: 1
    });

    const onHandleChange = (event: any) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e: any) => {
        e.preventDefault();

        const option = {
            onSuccess: () => {
                reset();
                onCreated(true)
            }
        }

        post(route('users.create'), option)
        // if(!user) post('create-user', option)
        // else put(`/users/${user.id}`, option);
    };

    useEffect(() => {
        // if(user) setData(user)
    }, []);

    return (
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="firstname" value="First Name" />

                    <TextInput
                        id="firstname"
                        name="firstname"
                        value={data.firstname}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.firstname} className="mt-2" />
                </div>

                <div className='mt-4'>
                    <InputLabel htmlFor="lastname" value="Last Name" />

                    <TextInput
                        id="lastname"
                        name="lastname"
                        value={data.lastname}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        onChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.lastname} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="phone" value="Phone" />

                    <TextInput
                        id="phone"
                        type="text"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="phone"
                        onChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.phone} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="quantity" value="Quantity" />

                    <TextInput
                        id="quantity"
                        type="number"
                        name="quantity"
                        value={data.quantity}
                        className="mt-1 block w-full"
                        onChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.quantity} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="category" value="Category" />

                    <SelectInput
                        id="category"
                        name="category"
                        value={data.category}
                        className="mt-1 block w-full"
                        onChange={onHandleChange}
                        options={['VIP', 'Regular', 'Gold', 'Platinum']}
                        required
                    />

                    <InputError message={errors.category} className="mt-2" />
                </div>


                <div className="flex items-center justify-end mt-6">
                    <PrimaryButton className="ml-4 bg-sky-500 px-5" disabled={processing}>Create</PrimaryButton>
                </div>
            </form>
    );
}
