import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="h-screen w-full bg-gradient-to-b from-purple-950 to-cyan-600">
            <div className="p-4 h-full text-left md:px-20">
                <div>
                    <p className="text-4xl font-bold text-shadow-sm text-amber-600 mb-4 inline border-b-4 border-amber-900">Contacts</p>
                    <div className="container">
                        <p className='text-white py-10 text-2xl'>You Can Contact me here!</p>
                    </div>
                </div>
                <form className='flex flex-col items-center' action="https://getform.io/f/nadomzpb" method='POST' >
                    <input className='border-black border-2 h-12 w-fit md:w-96 m-4 bg-transparent text-white font-bold rounded-full shadow-black shadow-lg hover:scale-105 transform duration-300 text-center placeholder-center' type="text" placeholder="Name" name='name'/>
                    <input className='border-black border-2 h-12 w-fit md:w-96 m-4 bg-transparent text-white font-bold rounded-full shadow-black shadow-lg hover:scale-105 transform duration-300 text-center placeholder-center' type="email" placeholder="Email" name='email'/>
                    <textarea className='border-black border-2 h-48 w-fit md:w-96 m-4 bg-transparent text-white font-bold rounded-3xl shadow-black shadow-xl hover:scale-105 transform duration-300 text-center resize-none' placeholder="Leave your Message..." name='paragraph'></textarea>
                    <button className="bg-gradient-to-r from-blue-500 to-gray-500 hover:bg-blue-700 hover:scale-110 text-white mt-4 ml-2 font-bold py-2 px-12 shadow-md flex items-center rounded-full" type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
