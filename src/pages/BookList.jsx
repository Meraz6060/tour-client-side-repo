import React, { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';
const BookList = () => {
    const {user} =UseAuth();
    const [booking, setBooking] =useState([]);
    const url = `https://tour-guid-server-ripo-g4avs4osb-meraz6060.vercel.app/booking?email=${user.email}`;

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setBooking(data))

    }, [url]);

    const userBookings = booking.filter((book) => book.email === user.email);

    const handleDelet = id => {
        const proceed = confirm('Are your sure you want to delete');
        if(proceed){
            fetch(`https://tour-guid-server-ripo-g4avs4osb-meraz6060.vercel.app/booking/${id}`,{
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0) {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Your Booking has been Deleted",
                            showConfirmButton: false,
                            timer: 1500
                          }); 
                        const remaining = booking.filter((book) => book._id !==id);
                        setBooking(remaining);
                    }
                })
        }
    }


    const handleConfirm = id => {
            fetch(`https://tour-guid-server-ripo-g4avs4osb-meraz6060.vercel.app/booking/${id}`,{
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify({status:'confirm'})
            })
                .then(res => res.json())
                .then(data => {
                    if(data.modifiedCount > 0) {
                        const remaining = booking.filter((book) => book._id !==id);
                        const updated = booking.find((book) => book._id ===id);
                        updated.status ='confirm'
                        const newbooking = [updated, ...remaining];
                        setBooking(newbooking);
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Your Booking has been Confirmed",
                            showConfirmButton: false,
                            timer: 1500
                          }); 

                    }
                })
        }


  return (
    <div className="py-0 ">
              <Helmet>
                <title>Bd Traveling | My Booking </title>
            </Helmet>
        <div>
            <img src="https://tourtoday.com.bd/wp-content/uploads/2017/02/slider.jpg" alt="" />
        </div>
        <div className="flex items-center justify-center">
      <h1 className="text-black text-3xl font-extrabold py-4">My Booking List</h1>
    </div>
      {userBookings.map(book => 
      (<li key={book._id} className="flex flex-col py-6 sm:flex-row sm:justify-between w-1/2">
        <div className="flex w-full space-x-2 sm:space-x-4">
          <img
            className="flex-shrink-0 object-cover w-40 h-40 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
            src={book.image}
            alt="Polaroid camera"
          />
          <div className="flex flex-col justify-between w-full pb-4">
            <div className="flex justify-between w-full pb-2 space-x-2">
              <div className="space-y-1">
                <h3 className="text-lg font-black leadi sm:pr-8">
                 {book.service}
                </h3>
                <p className="text-lg font-extrabold dark:text-gray-400">{book.location}</p>
                <p className="text-sm dark:text-gray-400">{book.email}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-extrabold">Tk: {book.price}</p>
                <p className="font-bold  dark:text-gray-600">
                 Tour Datae:  {book.date}
                </p>
              </div>
            </div>
            <div className="flex text-sm divide-x">
              <button
                type="button"
                className="flex items-center px-2 py-1 pl-0 space-x-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                  <rect width="32" height="200" x="168" y="216"></rect>
                  <rect width="32" height="200" x="240" y="216"></rect>
                  <rect width="32" height="200" x="312" y="216"></rect>
                  <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                </svg>
                <span onClick={() => handleDelet(book._id) } className="text-red-600 font-bold">Remove</span>
              </button>
              <button
                type="button"
                className="flex items-center px-2 py-1 space-x-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                </svg>
                {
                    book.status === 'confirm'? <span className="font-bold">Confirmed</span> :
                    <span onClick={() => handleConfirm(book._id)} className="" >Confirm</span>}
                
              </button>
            </div>
          </div>
        </div>
      </li>
))}
    </div>
  );
};

export default BookList;
