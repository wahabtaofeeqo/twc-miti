import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import { motion } from "framer-motion";

const CheckoutForm = ({data, onChange, onAdd, onUpdated, invitees = []}) => {

    return (
        <>
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
            <div className="p-3 rounded-lg bg-white/10 backdrop-blur-lg border-white/20 text-white shadow-2xl">
                <div className="border-b border-white/20">
                    <h4 className="text-3xl font-bold text-center text-white">
                        Checkout Information
                    </h4>
                    <p className="text-center text-blue-200 mt-2">
                        Please complete your details to secure your ticket
                    </p>
                </div>
    
                <div className="p-8">
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <InputLabel htmlFor="firstname" className="text-white">First Name</InputLabel>
                                <TextInput
                                id="firstname"
                                name="firstname"
                                required
                                value={data.firstname}
                                onChange={onChange}
                                placeholder="Enter your first name"
                                className="bg-white/20 text-white placeholder-blue-200 border-white/30 focus:ring-2 focus:ring-pink-500 w-full"
                                />
                            </div>
        
                            <div>
                                <InputLabel htmlFor="lastname" className="text-white">Last Name</InputLabel>
                                <TextInput
                                id="lastname"
                                name="lastname"
                                required
                                value={data.lastname}
                                onChange={onChange}
                                placeholder="Enter your last name"
                                className="bg-white/20 text-white placeholder-blue-200 border-white/30 focus:ring-2 focus:ring-pink-500 w-full"
                                />
                            </div>
                        </div>
        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <InputLabel htmlFor="email" className="text-white">Email</InputLabel>
                                <TextInput
                                id="email"
                                type="email"
                                name="email"
                                required
                                value={data.email}
                                onChange={onChange}
                                placeholder="Enter your email address"
                                className="bg-white/20 text-white placeholder-blue-200 border-white/30 focus:ring-2 focus:ring-pink-500 w-full"
                                />
                            </div>
        
                            <div>
                                <InputLabel htmlFor="phone" className="text-white">Phone Number</InputLabel>
                                <TextInput
                                id="phone"
                                name="phone"
                                required
                                value={data.phone}
                                onChange={onChange}
                                placeholder="Enter your phone number"
                                className="bg-white/20 text-white placeholder-blue-200 border-white/30 focus:ring-2 focus:ring-pink-500 w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        </>
    )
}

export default CheckoutForm;
