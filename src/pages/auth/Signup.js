// import React, { useState } from 'react';
// import * as Dialog from '@radix-ui/react-dialog';
// import { Cross2Icon } from '@radix-ui/react-icons';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const SignUpForm = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [isOpen, setIsOpen] = useState(false);
//     const [name, setName] = useState('');

//   const handleSubmit = async (e) => {
//     console.log(name,email, password);
//     e.preventDefault();
//     try {
//         // Make a POST request to the backend endpoint
//         const response = await axios.post('https://netflix-backend-code.onrender.com/api/register', {
//           name,
//           email,
//           password,
//         });
  
//         // Handle successful registration
//         console.log(response.data.message);
//         // Optionally, you can reset the form fields or redirect to a different page
//       } catch (error) {
//         // Handle registration error
//         console.error(error);
//         // Optionally, you can display an error message to the user
//       }
//   };

//   return (
//         <div className='bg-black'>
//         <div style={{ height: "100vh" }} className="text-white bg-black bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_medium.jpg')]">
//             <div className="bg-custom-gradient">
//             <div className="bg-black-40">
//                 <nav className="flex items-center justify-between px-8 py-4 bg-transparent">
//                     <div>
//                     <Link to="/">
//                         <img
//                         src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
//                         alt="Netflix Logo"
//                         width={120}
//                         height={40}
//                         />
//                     </Link>
//                     </div>
//                     <div>
//                     <button style={{ "background-color": "red" }} className="btn btn-primary px-3 py-1 rounded-md"><Link to="/login">Sign In</Link></button>
//                     </div>
//                 </nav>
//                 <div className="flex flex-col items-center justify-center h-screen">
//                 <h1 className="text-5xl font-black mb-4">
//                     Welcome to <span className="text-red-600">Netflix</span>
//                 </h1>
//                 <p className="text-lg mb-5">Watch anywhere. Cancel anytime.</p>
//                 <p>
//                     Ready to watch? Enter your email to create or restart your
//                     membership.
//                 </p>
//                 <div className="flex mt-3 gap-4">
//                 <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
//                     <Dialog.Trigger className="bg-red-600 text-white px-4 py-2 rounded">
//                         Sign Up
//                     </Dialog.Trigger>
//                     <Dialog.Portal>
//                         <Dialog.Overlay className="fixed inset-0 bg-black/30" />
//                         <Dialog.Content
//                         className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-8 max-w-md"
//                         style={{ width: '460px' }}
//                         >
//                         <Dialog.Title className="text-2xl font-bold mb-4">
//                             Sign Up
//                         </Dialog.Title>
//                         <form onSubmit={handleSubmit}>
//                         <div className="mb-4">
//                             <input
//                                 id="name"
//                                 type="name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 className="w-full px-4 py-2 border rounded"
//                                 placeholder="Name"
//                                 required
//                             />
//                             </div>
//                             <div className="mb-4">
//                             <input
//                                 id="email"
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="w-full px-4 py-2 border rounded"
//                                 placeholder="Email"
//                                 required
//                             />
//                             </div>
//                             <div className="mb-4">
//                             <input
//                                 id="password"
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 className="w-full px-4 py-2 border rounded"
//                                 placeholder="Add a password"
//                                 required
//                             />
//                             </div>
//                             <div className="mb-6">
//                             <input
//                                 id="confirmPassword"
//                                 type="password"
//                                 value={confirmPassword}
//                                 onChange={(e) => setConfirmPassword(e.target.value)}
//                                 className="w-full px-4 py-2 border rounded"
//                                 placeholder="Confirm password"
//                                 required
//                             />
//                             </div>
//                             <Link >
//                                 <button href="/login" onClick={handleSubmit} type="submit" className="bg-red-600 text-white px-4 py-2 rounded w-full mb-4">
//                                     Sign Up 
//                                 </button>
//                             </Link>
//                         </form>
//                         <Dialog.Close className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
//                             <Cross2Icon />
//                         </Dialog.Close>
//                         </Dialog.Content>
//                     </Dialog.Portal>
//                     </Dialog.Root>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//         <footer className="bg-black py-8 mt-20 text-white">
//                 <div className="container mx-auto px-4 text-white">
//                     <div className="flex flex-col md:flex-row text-white justify-between items-center mb-4">
//                     <div>
//                         <p className="text-gray-400">
//                         Questions? Call <Link href="tel:000-000-000-000" className="text-gray-400 underline">6309792221</Link>
//                         </p>
//                     </div>
//                     <div className="flex space-x-4">
//                         <Link href="#" className="text-gray-400 underline">FAQ</Link>
//                         <Link href="#" className="text-gray-400 underline">Cookie Preferences</Link>
//                     </div>
//                     </div>
//                     <div className="flex flex-col md:flex-row justify-between items-center">
//                     <div className="flex space-x-4 mb-4 md:mb-0">
//                         <Link href="#" className="text-gray-400 underline">Gift Card Terms</Link>
//                         <Link href="#" className="text-gray-400 underline">Legal Notices</Link>
//                     </div>
//                     </div>
//                 </div>
//         </footer>
//     </div>
    
//   );
// };

// export default SignUpForm;



import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');  // State for success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    try {
      // Make a POST request to the backend endpoint
      const response = await axios.post('https://netflix-backend-code.onrender.com/api/register', {
        name,
        email,
        password,
      });

      // Handle successful registration
      console.log(response.data.message);
      setSuccessMessage(response.data.message);  // Set success message
      setIsOpen(false);  // Close the dialog on successful submission
    } catch (error) {
      // Handle registration error
      console.error(error);
      // Optionally, you can display an error message to the user
    }
  };

  return (
    <div className='bg-black'>
      <div
        style={{ height: '100vh' }}
        className="text-white bg-black bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_medium.jpg')]"
      >
        <div className="bg-custom-gradient">
          <div className="bg-black-40">
            <nav className="flex items-center justify-between px-8 py-4 bg-transparent">
              <div>
                <Link to="/">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt="Netflix Logo"
                    width={120}
                    height={40}
                  />
                </Link>
              </div>
              <div>
                <button className="btn btn-primary px-3 py-1 rounded-md" style={{ backgroundColor: 'red' }}>
                  <Link to="/login">Sign In</Link>
                </button>
              </div>
            </nav>
            <div className="flex flex-col items-center justify-center h-screen">
              <h1 className="text-5xl font-black mb-4">
                Welcome to <span className="text-red-600">Netflix</span>
              </h1>
              <p className="text-lg mb-5">Watch anywhere. Cancel anytime.</p>
              <p>
                Ready to watch? Enter your email to create or restart your membership.
              </p>
              {successMessage && (  // Conditionally render success message
                <div className="bg-green-500 text-white px-4 py-2 rounded mb-4">
                  {successMessage}
                </div>
              )}
              <div className="flex mt-3 gap-4">
                <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
                  <Dialog.Trigger className="bg-red-600 text-white px-4 py-2 rounded">
                    Sign Up
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/30" />
                    <Dialog.Content
                      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-8 max-w-md"
                      style={{ width: '460px' }}
                    >
                      <Dialog.Title className="text-2xl font-bold mb-4">
                        Sign Up
                      </Dialog.Title>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border rounded"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded"
                            placeholder="Add a password"
                            required
                          />
                        </div>
                        <div className="mb-6">
                          <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded"
                            placeholder="Confirm password"
                            required
                          />
                        </div>
                        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded w-full mb-4">
                          Sign Up
                        </button>
                      </form>
                      <Dialog.Close className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
                        <Cross2Icon />
                      </Dialog.Close>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-black py-8 mt-20 text-white">
        <div className="container mx-auto px-4 text-white">
          <div className="flex flex-col md:flex-row text-white justify-between items-center mb-4">
            <div>
              <p className="text-gray-400">
                Questions? Call <Link to="tel:000-000-000-000" className="text-gray-400 underline">6309792221</Link>
              </p>
            </div>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 underline">FAQ</Link>
              <Link to="#" className="text-gray-400 underline">Cookie Preferences</Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link to="#" className="text-gray-400 underline">Gift Card Terms</Link>
              <Link to="#" className="text-gray-400 underline">Legal Notices</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUpForm;
