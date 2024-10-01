import { useEffect, useState } from "react";

export default function Home() {

    const [sellers, setSellers] = useState([]);

    const [sellerId, setSellerId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState(0);
    const [address, setAddress] = useState('');
    const [businessName, setBusinessName] = useState('');

    useEffect(() => {
        fetchData();
    }, [])

    const handleEdit = async (props) => {
        setSellerId(props.sellerId);
        setName(props.name);
        setEmail(props.email);
        setUsername(props.username);
        setMobileNumber(props.mobileNumber);
        setAddress(props.address);
        setBusinessName(props.businessName);
    };

    const handleUpdate = async () => {
        const response = await fetch(`http://localhost:5000/api/sellers/${sellerId}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
                username: username,
                mobileNumber: mobileNumber,
                address: address,
                businessName: businessName,
            })
        })

        if (response.ok) {
            fetchData();
        } else {
            const error = await response.json();
            console.error('Error Fetching sellers:', error);
        }
    }

    const handleDelete = async (props) => {

        const reply = window.confirm(`Do you want to remove ${props.sellerId} as a seller?`);
        if (reply) {
            const response = await fetch(`http://localhost:5000/api/sellers/${props.sellerId}`, {
                method: "DELETE"
            });

            if (response.ok) {
                const data = await response.json(); // Parse the JSON response
                alert()
            } else {
                const error = await response.json();
                console.error('Error Fetching sellers:', error);
            }
        }
    }

    const fetchData = async () => {
        const response = await fetch('http://localhost:5000/api/sellers', {
            method: "GET",
        });

        if (response.ok) {
            const data = await response.json(); // Parse the JSON response
            setSellers(data);
        } else {
            const error = await response.json();
            console.error('Error Fetching sellers:', error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/sellers', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, username, password, mobileNumber, address, businessName }),
        })

        if (response.ok) {
            const data = await response.json(); // Parse the JSON response
            console.log('Seller created:', data);
            alert(data.sellerId)
        } else {
            const error = await response.json();
            console.error('Error creating seller:', error);
        }

        fetchData();
    }

    return (
        <div className="flex flex-col p-9 gap-3">
            <div>

                <h1>Seller Form! </h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-fit  border border-black">
                    <label className="flex gap-3">
                        Seller ID:
                        <input type="text" value={sellerId} readOnly={true} className="border border-black  focus:outline-none p-1 text-sm rounded-md" />
                    </label>
                    <label className="flex gap-3">
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(() => e.target.value)} className="border border-black  focus:outline-none p-1 text-sm rounded-md" />
                    </label>
                    <label className="flex gap-3">
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(() => e.target.value)} className="border border-black focus:outline-none p-1 text-sm rounded-md" />
                    </label>
                    <label className="flex gap-3">
                        Username:
                        <input type="text" value={username} onChange={(e) => setUsername(() => e.target.value)} className="border border-black focus:outline-none p-1 text-sm rounded-md" />
                    </label>
                    <label className="flex gap-3">
                        Password:
                        <input type="text" value={password} onChange={(e) => setPassword(() => e.target.value)} className="border border-black focus:outline-none p-1 text-sm rounded-md" />
                    </label>
                    <label className="flex gap-3">
                        Mobile Number:
                        <input type="number" value={mobileNumber} onChange={(e) => setMobileNumber(() => e.target.value)} className="border border-black focus:outline-none p-1 text-sm rounded-md" />
                    </label>
                    <label className="flex gap-3">
                        Address:
                        <input type="text" value={address} onChange={(e) => setAddress(() => e.target.value)} className="border border-black focus:outline-none p-1 text-sm rounded-md" />
                    </label>
                    <label className="flex gap-3">
                        Business Name:
                        <input type="text" value={businessName} onChange={(e) => setBusinessName(() => e.target.value)} className="border border-black focus:outline-none p-1 text-sm rounded-md" />
                    </label>
                    <button type="submit" className="border border-black">
                        Submit
                    </button>
                    <button onClick={handleUpdate} type="button" className="border border-black">
                        Update
                    </button>
                </form>

            </div>
            <table className=" w-3/4">
                <thead>
                    <tr className="">
                        <th className="border border-gray-400">Seller ID</th>
                        <th className="border border-gray-400">Name</th>
                        <th className="border border-gray-400">Email</th>
                        <th className="border border-gray-400">Username</th>
                        <th className="border border-gray-400">Mobile Number</th>
                        <th className="border border-gray-400">Address</th>
                        <th className="border border-gray-400">Business Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {sellers.length > 0 ? (
                        sellers.map((seller) => (
                            <tr key={seller.sellerId} className="">
                                <td className="border p-2 text-center">{seller.sellerId}</td>
                                <td className="border p-2 text-center">{seller.name}</td>
                                <td className="border p-2 text-center">{seller.email}</td>
                                <td className="border p-2 text-center">{seller.username}</td>
                                <td className="border p-2 text-center">{seller.mobileNumber}</td>
                                <td className="border p-2 text-center">{seller.address}</td>
                                <td className="border p-2 text-center">{seller.businessName}</td>
                                <td className="flex gap-3 justify-center">
                                    <button onClick={() => handleEdit(seller)} className="border border-black hover:bg-gray-300 p-1 rounded-md transition duration-500">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelete(seller.sellerId)} className="bg-red-400 p-1 hover:bg-red-500 rounded-md transition duration-500">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No Sellers Available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
};
