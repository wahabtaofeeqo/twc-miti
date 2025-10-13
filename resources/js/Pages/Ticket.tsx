import CheckoutForm from "@/Components/CheckoutForm";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import DangerButton from "@/Components/DangerButton";

const Ticket = ({categories = [], bookings = []}) => {
    
    const [tickets, setTickets] = useState<any>([]);
    const [isCheckout, setCheckout] = useState(false);
    const [invitees, setInvitees] = useState<any>([]);
    const [errorMessage, setMessage] = useState('');

    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        quantity: 1,
        category_id: '',
        tickets: [],
        amount: 0,
        coupon: '',
        invitees: []
    });

    const incrementTicket = (id: number) => {
        let allTickets: any = [...tickets];
        let index = allTickets.findIndex(item => item.model.id == id);
        let ticket = tickets[index];

        // Check if a Ticket type is currently selected
        let current = allTickets.find(item => item.total > 0);
        if(current && current.model.id != ticket.model.id) {
            toast.warn(`You can only book a single Ticket Type at a Time`);
        }
        else {
            ticket.total = ticket.total + 1;
            allTickets[index] = ticket;
    
            //
            setTickets(allTickets);
            setData('tickets', allTickets);
        }
    }

    const decrementTicket = (id: number) => {

        let allTickets: any = [...tickets];
        let index = allTickets.findIndex(item => item.model.id == id);
        let ticket = tickets[index];

        if(ticket.total > 0) {
            ticket.total = ticket.total - 1;
            allTickets[index] = ticket;

            //
            setTickets(allTickets);
            setData('tickets', allTickets);
        }
    }

    const getTicket = (category: any) => {
        let allTickets: any = [...tickets];
        let ticket = allTickets.find(item => item.model.id == category.id);
        if(!ticket) { // Add Ticket
            ticket = {
                total: 0, // Initial
                model: category
            }

            allTickets.push(ticket);
            setTickets(allTickets);
        }

        return ticket;
    }

    const onChange = (event: any) => {
        setData(event.target.name, event.target.value);
    }

    const onContinue = () => {
        if(getTicketCount() == 0) {
            toast.warn('You need to select a Ticket to book');
        }
        else setCheckout(true);
    }

    const addInvitee = () => {

        let totalTicket = getTicketCount();
        if(totalTicket - 1 <= invitees.length) {
            toast.error('You need to select Ticket for the Invitees');
            return;
        }

        let all: any = [...invitees];
        all.push({ name: '', email: ''})

        setInvitees(all);
        setData('invitees', all)
    }

    const updateInvitee = (index, item) => {
        let all: any = [...invitees];
        all[index] = item;
        setInvitees(all);
        setData('invitees', all)
    }

    const getTotal = () => {
        let total = 0;
        tickets.forEach(item => {
            total += item.total * item.model.amount;
        });

        return total;
    }

    const getTicketCount = () => {
        let totalTicket = 0;
        tickets.forEach(item => totalTicket += item.total);
        return totalTicket ?? 0;
    }

    const validateEmail = (mail) => {
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        return pattern.test(mail);
    }

    const submit = (e: any) => {
        e.preventDefault();

        let isValid = true;
        for (let i = 0; i < invitees.length; i++) {
            let item = invitees[i];
            isValid = (item.name && validateEmail(item.email));
            if(!isValid) break;
        }

        if(!isValid) {
            toast.error('Kindly provide your invitees details!');
            return;
        }

        post(`/bookings`, {
            onSuccess: () => {
                reset();
            },
            onError: (error) => {
                setMessage(error?.message)
            }
        })
    }
    
    useEffect(() => {
        if(tickets.length) {
            setData({
                ...data,
                amount: getTotal(),
                quantity: getTicketCount()
            });
        }
    }, [tickets]);

    return (
        <>

        <Head title={`FunFiesta`} />
        <ToastContainer limit={1} />

        <div className="min-h-screen bg-gradient-to-b from-sky-900 to-blue-700">
            <div className='max-w-7xl mx-auto'>
                <nav className="px-3 mb-10 py-5 inline-flex">
                    <Link href="/" className="flex items-center font-bold text-3xl text-pink-500">
                       Home
                    </Link>
                </nav>

                {
                    isCheckout ?
                    (
                        <div className="h-full flex items-center justify-center p-6 max-w-3xl mx-auto">
                            <form onSubmit={submit} className="w-full">
                                <CheckoutForm data={data} onChange={onChange} onAdd={addInvitee}
                                    onUpdated={updateInvitee} invitees={invitees}></CheckoutForm>

                                {
                                    errorMessage ? <p className="text-red-500">{errorMessage}</p> : ''
                                }
                                <div className='py-4 text-end flex gap-3 justify-end'>
                                    <button type='button' disabled={processing} className='bg-gray-100 p-2 px-3 rounded' onClick={() => setCheckout(false)}>Cancel</button>
                                    <button disabled={processing} className='bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 rounded w-48'>Pay now</button>
                                </div>
                            </form>

                        </div>
                    )
                    :
                    (
                        <div className="p-3">
                            <div className=" text-white px-6 py-12">
                                <div className="text-center mb-10">
                                    <motion.h1
                                        initial={{ opacity: 0, y: -30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="text-5xl font-extrabold tracking-wide text-white"
                                    >
                                        Your Tickets
                                    </motion.h1>
                                    <p className="text-blue-200 mt-2">Choose your preferred ticket type below</p>
                                </div>
                        
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                    {categories.map((category: any) => (
                                        <motion.div
                                        key={category.id}
                                        whileHover={{ scale: 1.03 }}
                                        className="flex flex-col"
                                        >
                                        <div className="p-3 rounded-md bg-white/10 backdrop-blur-md border-white/20 text-white shadow-lg">
                                            <div>
                                                <img
                                                    src={category.image}
                                                    alt={category.name}
                                                    className="w-full h-52 object-cover rounded-t-lg"
                                                />
                                                <h4 className="text-2xl font-semibold mt-3">
                                                    {category.name}
                                                </h4>
                                            </div>

                                            <div>
                                                <p className="text-sm text-blue-200 mb-3">{category.description}</p>
                                                <p className="text-lg font-bold">₦{category.amount.toLocaleString()}</p>
                                                <div className="flex items-center justify-between mt-4">
                                                    {
                                                        category.is_sold 
                                                        ? <span className="p-2 py-1 rounded-lg text-sm inline-block bg-red-500">Sold out</span>
                                                        : 
                                                        <div className="flex items-center space-x-3">
                                                            <button className="w-7 h-7 bg-white rounded-md text-black"
                                                                onClick={() => decrementTicket(category.id)}
                                                            >
                                                                −
                                                            </button>

                                                            <span className="text-xl font-semibold">
                                                            {getTicket(category)?.total ?? 0}
                                                            </span>

                                                            <button className="w-7 h-7 bg-white rounded-md text-black"
                                                                onClick={() => incrementTicket(category.id)}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    }

                                                    <p className="text-sm text-blue-200">
                                                        Subtotal: ₦ {getTicket(category)?.total * category.amount}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        </motion.div>
                                    ))}
                                </div>
                        
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="mt-12 text-center"
                                    >
                                    <h3 className="text-2xl font-bold mb-4">
                                        Total: ₦ {getTotal()}
                                    </h3>
                                    <DangerButton onClick={onContinue}
                                        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8"
                                    >
                                        Proceed to Checkout
                                    </DangerButton>
                                </motion.div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
        </>
    )
}

export default Ticket;
