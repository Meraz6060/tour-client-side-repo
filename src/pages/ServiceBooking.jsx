
import { useLoaderData } from 'react-router';
import UseAuth from '../hooks/UseAuth';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const ServiceBooking = () => {
    const naviGate =useNavigate();
    const tourDetails = useLoaderData();
    const {title, id, _id, image, price, location, nearPlacesToTravel, termsAndConditions,  description, tourDuration,  tourPlanShortTitle, includes}= tourDetails;
    console.log(title);
    const {user} = UseAuth();

    const handleBookService = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name, 
            email, 
            image,
            location,
            date, 
            tourDuration,
            service: title,
            service_id: _id, 
            price: price
        }

        console.log(booking);

        fetch('https://tour-guid-server-ripo-g4avs4osb-meraz6060.vercel.app/booking', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Booking has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  }); 
                naviGate('/'); 
            }
        })

    }

    return (
        <div className='pt-32 my-6 h-screen items-center justify-center min-h-[calc(100vh-600px)]'>
            <h2 className='text-center text-3xl'>Tour Title: <span className='font-extrabold text-black'> { title}</span>  </h2>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tour Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tour Price: </span>
                        </label>
                        <input type="text" defaultValue={'$'+ price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-secondery btn-block" type="submit" value="Book Confirm" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default ServiceBooking;