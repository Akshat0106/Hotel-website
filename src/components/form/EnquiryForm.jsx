// import { useState } from "react";
// import emailjs from "@emailjs/browser";

// export function EnquiryForm({ selectedRoom, closeEnquiryForm }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   // ✅ Handle Input Change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ Handle Form Submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const templateParams = {
//       name: formData.name,
//       email: formData.email,
//       message: formData.message,
//       room_name: selectedRoom?.name, // Pass room name
//     };

//     emailjs
//       .send(
//         "your_service_id", // ✅ Replace with EmailJS Service ID
//         "your_template_id", // ✅ Replace with EmailJS Template ID
//         templateParams,
//         "your_public_key" // ✅ Replace with EmailJS Public Key
//       )
//       .then(
//         (response) => {
//           console.log("Email sent successfully!", response);
//           alert("Your enquiry has been sent!");
//           closeEnquiryForm(); // Close form after submission
//         },
//         (error) => {
//           console.error("Failed to send email:", error);
//           alert("Failed to send enquiry. Please try again.");
//         }
//       );
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded-lg w-96 relative">
//         <button
//           onClick={closeEnquiryForm}
//           className="absolute top-2 right-3 text-xl text-gray-600"
//         >
//           ✖
//         </button>
//         <h2 className="text-xl font-semibold mb-4">Enquiry Form</h2>
//         <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             className="border p-2 rounded h-20"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// import { useState } from "react";
// import emailjs from "@emailjs/browser";

// export function EnquiryForm({ selectedRoom, closeEnquiryForm }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     checkInDate: "",
//     checkOutDate: "",
//     adults: "1",
//     children: "0",
//     breakfast: "yes",
//     message: "",
//   });

//   // ✅ Handle Input Change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ Handle Form Submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const templateParams = {
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       check_in_date: formData.checkInDate,
//       check_out_date: formData.checkOutDate,
//       adults: formData.adults,
//       children: formData.children,
//       breakfast: formData.breakfast,
//       message: formData.message,
//       room_name: selectedRoom?.name, // Pass room name
//     };

//     emailjs
//       .send(
//         "your_service_id", // ✅ Replace with EmailJS Service ID
//         "your_template_id", // ✅ Replace with EmailJS Template ID
//         templateParams,
//         "your_public_key" // ✅ Replace with EmailJS Public Key
//       )
//       .then(
//         (response) => {
//           console.log("Email sent successfully!", response);
//           alert("Your enquiry has been sent!");
//           closeEnquiryForm(); // Close form after submission
//         },
//         (error) => {
//           console.error("Failed to send email:", error);
//           alert("Failed to send enquiry. Please try again.");
//         }
//       );
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
//         <button
//           onClick={closeEnquiryForm}
//           className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-black"
//         >
//           ✖
//         </button>
//         <h2 className="text-2xl font-semibold mb-4">
//           Enquiry for {selectedRoom?.name}
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded mb-3"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded mb-3"
//             required
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Your Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full p-2 border rounded mb-3"
//             required
//           />

//           {/* Check-in and Check-out dates in one row */}
//           <div className="flex gap-2 mb-3">
//             <div className="w-1/2">
//               <label className="block text-sm text-gray-600 mb-1">
//                 Check In
//               </label>
//               <input
//                 type="date"
//                 name="checkInDate"
//                 value={formData.checkInDate}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </div>
//             <div className="w-1/2">
//               <label className="block text-sm text-gray-600 mb-1">
//                 Check Out
//               </label>
//               <input
//                 type="date"
//                 name="checkOutDate"
//                 value={formData.checkOutDate}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </div>
//           </div>

//           {/* Adults, Children, and Breakfast options in one row */}
//           <div className="flex gap-2 mb-3">
//             <div className="w-1/3">
//               <label className="block text-sm text-gray-600 mb-1">Adults</label>
//               <select
//                 name="adults"
//                 value={formData.adults}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//               >
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//               </select>
//             </div>
//             <div className="w-1/3">
//               <label className="block text-sm text-gray-600 mb-1">
//                 Children
//               </label>
//               <select
//                 name="children"
//                 value={formData.children}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//               >
//                 <option value="0">0</option>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//               </select>
//             </div>
//             <div className="w-1/3">
//               <label className="block text-sm text-gray-600 mb-1">
//                 Breakfast
//               </label>
//               <div className="flex">
//                 <label className="mr-3">
//                   <input
//                     type="radio"
//                     name="breakfast"
//                     value="yes"
//                     checked={formData.breakfast === "yes"}
//                     onChange={handleChange}
//                     className="mr-1"
//                   />
//                   Yes
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="breakfast"
//                     value="no"
//                     checked={formData.breakfast === "no"}
//                     onChange={handleChange}
//                     className="mr-1"
//                   />
//                   No
//                 </label>
//               </div>
//             </div>
//           </div>

//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full p-2 border rounded mb-3"
//             required
//           />

//           <button
//             type="submit"
//             className="bg-black text-white px-4 py-2 rounded w-full"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import emailjs from "@emailjs/browser";

// export function EnquiryForm({ selectedRoom, closeEnquiryForm }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     checkInDate: "",
//     checkOutDate: "",
//     adults: "1",
//     children: "0",
//     breakfast: "yes"
//   });

//   // ✅ Handle Input Change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ Handle Form Submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("✅ Submit button clicked!");
//     const templateParams = {
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       check_in_date: formData.checkInDate,
//       check_out_date: formData.checkOutDate,
//       adults: formData.adults,
//       children: formData.children,
//       breakfast: formData.breakfast,
//       room_name: selectedRoom?.name // Pass room name
//     };

//     emailjs
//       .send(
//         "service_opdia6t", // ✅ Replace with EmailJS Service ID
//         "template_1w212n8", // ✅ Replace with EmailJS Template ID
//         templateParams,
//         "h2f21qeqV8t3A2aA4" // ✅ Replace with EmailJS Public Key
//       )
//       .then(
//         (response) => {
//           console.log("Email sent successfully!", response);
//           alert("Your enquiry has been sent!");
//           closeEnquiryForm(); // Close form after submission
//         },
//         (error) => {
//           console.error("Failed to send email:", error);
//           alert("Failed to send enquiry. Please try again.");
//         }
//       );
//       console.log(formData);

//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
//       <div className="bg-white p-5 rounded-lg shadow-lg w-96 relative">
//         <button
//           onClick={closeEnquiryForm}
//           className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-black"
//         >
//           ✖
//         </button>
//         <h2 className="text-xl font-semibold mb-3">
//           Enquiry for {selectedRoom?.name}
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded mb-2"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded mb-2"
//             required
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Your Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full p-2 border rounded mb-2"
//             required
//           />

//           {/* Check-in and Check-out dates in one row */}
//           <div className="flex gap-2 mb-2">
//             <div className="w-1/2">
//               <label className="block text-xs text-gray-600 mb-1">Check In</label>
//               <input
//                 type="date"
//                 name="checkInDate"
//                 min={new Date().toISOString().split("T")[0]}
//                 value={formData.checkInDate}
//                 onChange={handleChange}
//                 className="w-full p-1.5 border rounded text-sm"
//                 required
//               />
//             </div>
//             <div className="w-1/2">
//               <label className="block text-xs text-gray-600 mb-1">Check Out</label>
//               <input
//                 type="date"
//                 name="checkOutDate"
//                 value={formData.checkOutDate}
//                 onChange={handleChange}
//                 className="w-full p-1.5 border rounded text-sm"
//                 required
//               />
//             </div>
//           </div>

//           {/* Adults, Children, and Breakfast options in one row */}
//           <div className="flex gap-2 mb-3">
//             <div className="w-1/3">
//               <label className="block text-xs text-gray-600 mb-1">Adults</label>
//               <select
//                 name="adults"
//                 value={formData.adults}
//                 onChange={handleChange}
//                 className="w-full p-1.5 border rounded text-sm"
//               >
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//               </select>
//             </div>
//             <div className="w-1/3">
//               <label className="block text-xs text-gray-600 mb-1">Children</label>
//               <select
//                 name="children"
//                 value={formData.children}
//                 onChange={handleChange}
//                 className="w-full p-1.5 border rounded text-sm"
//               >
//                 <option value="0">0</option>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//               </select>
//             </div>
//             <div className="w-1/3">
//               <label className="block text-xs text-gray-600 mb-1">Breakfast</label>
//               <div className="flex text-sm">
//                 <label className="mr-2">
//                   <input
//                     type="radio"
//                     name="breakfast"
//                     value="yes"
//                     checked={formData.breakfast === "yes"}
//                     onChange={handleChange}
//                     className="mr-1"
//                   />
//                   Yes
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="breakfast"
//                     value="no"
//                     checked={formData.breakfast === "no"}
//                     onChange={handleChange}
//                     className="mr-1"
//                   />
//                   No
//                 </label>
//               </div>
//             </div>
//           </div>
//           {/* console.log(formData.data) */}
//           <button
//             type="submit"
//             className="bg-black text-white px-4 py-2 rounded w-full"
//             onclick="handleSubmit(event)"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// import { useState } from "react";
// import emailjs from "@emailjs/browser";

// export function EnquiryForm({ room, onClose }) {
//   // Match prop names
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     checkInDate: "",
//     checkOutDate: "",
//     adults: "1",
//     children: "0",
//     breakfast: "yes",
//   });

//   // ✅ Handle Input Change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ Handle Form Submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("✅ Submit button clicked!");

//     const templateParams = {
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       check_in_date: formData.checkInDate,
//       check_out_date: formData.checkOutDate,
//       adults: formData.adults,
//       children: formData.children,
//       breakfast: formData.breakfast,
//       room_name: selectedRoom?.name,
//     };

//     emailjs
//       .send(
//         "service_opdia6t", // ✅ Replace with EmailJS Service ID
//         "template_1w212n8", // ✅ Replace with EmailJS Template ID
//         templateParams,
//         "h2f21qeqV8t3A2aA4" // ✅ Replace with EmailJS Public Key
//       )
//       .then(
//         (response) => {
//           console.log("Email sent successfully!", response);
//           alert("Your enquiry has been sent!");
//           closeEnquiryForm();
//         },
//         (error) => {
//           console.error("Failed to send email:", error);
//           alert("Failed to send enquiry. Please try again.");
//         }
//       );
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
//       <div className="bg-white p-5 rounded-lg shadow-lg w-96 relative">
//         <button
//           onClick={closeEnquiryForm}
//           className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-black"
//         >
//           ✖
//         </button>
//         <h2 className="text-xl font-semibold mb-3">
//           Enquiry for {selectedRoom?.name}
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded mb-2"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded mb-2"
//             required
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Your Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full p-2 border rounded mb-2"
//             required
//           />

//           {/* Check-in and Check-out dates in one row */}
//           <div className="flex gap-2 mb-2">
//             <div className="w-1/2">
//               <label className="block text-xs text-gray-600 mb-1">
//                 Check In
//               </label>
//               <input
//                 type="date"
//                 name="checkInDate"
//                 min={new Date().toISOString().split("T")[0]}
//                 value={formData.checkInDate}
//                 onChange={handleChange}
//                 className="w-full p-1.5 border rounded text-sm"
//                 required
//               />
//             </div>
//             <div className="w-1/2">
//               <label className="block text-xs text-gray-600 mb-1">
//                 Check Out
//               </label>
//               <input
//                 type="date"
//                 name="checkOutDate"
//                 min={formData.checkInDate ? formData.checkInDate : ""}
//                 disabled={!formData.checkInDate}
//                 value={formData.checkOutDate}
//                 onChange={handleChange}
//                 className="w-full p-1.5 border rounded text-sm"
//                 required
//               />
//             </div>
//           </div>

//           {/* Adults, Children, and Breakfast options in one row */}
//           <div className="flex gap-2 mb-3">
//             <div className="w-1/3">
//               <label className="block text-xs text-gray-600 mb-1">Adults</label>
//               <select
//                 name="adults"
//                 value={formData.adults}
//                 onChange={handleChange}
//                 className="w-full p-1.5 border rounded text-sm"
//               >
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//               </select>
//             </div>
//             <div className="w-1/3">
//               <label className="block text-xs text-gray-600 mb-1">
//                 Children
//               </label>
//               <select
//                 name="children"
//                 value={formData.children}
//                 onChange={handleChange}
//                 className="w-full p-1.5 border rounded text-sm"
//               >
//                 <option value="0">0</option>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//               </select>
//             </div>
//             <div className="w-1/3">
//               <label className="block text-xs text-gray-600 mb-1">
//                 Breakfast
//               </label>
//               <div className="flex text-sm">
//                 <label className="mr-2">
//                   <input
//                     type="radio"
//                     name="breakfast"
//                     value="yes"
//                     checked={formData.breakfast === "yes"}
//                     onChange={handleChange}
//                     className="mr-1"
//                   />
//                   Yes
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="breakfast"
//                     value="no"
//                     checked={formData.breakfast === "no"}
//                     onChange={handleChange}
//                     className="mr-1"
//                   />
//                   No
//                 </label>
//               </div>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="bg-black text-white px-4 py-2 rounded w-full"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import emailjs from "@emailjs/browser";

// export function EnquiryForm({ room, onClose }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     checkInDate: "",
//     checkOutDate: "",
//     adults: "1",
//     children: "0",
//     breakfast: "yes",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("✅ Submit button clicked!");

//     const templateParams = {
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       check_in_date: formData.checkInDate,
//       check_out_date: formData.checkOutDate,
//       adults: formData.adults,
//       children: formData.children,
//       breakfast: formData.breakfast,
//       room_name: room?.name,
//     };

//     emailjs
//       .send(
//         "service_acv6nwg", // ✅ Replace with EmailJS Service ID
//         "template_2qcwmyo", // ✅ Replace with EmailJS Template ID
//         templateParams,
//         "D257wtzjm3PEAMgRr" // ✅ Replace with EmailJS Public Key
//       )
//       .then(
//         (response) => {
//           console.log("Email sent successfully!", response);
//           alert("Your enquiry has been sent!");
//           onClose();
//         },
//         (error) => {
//           console.error("Failed to send email:", error);
//           alert("Failed to send enquiry. Please try again.");
//         }
//       );
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
//       <div className="bg-white p-5 rounded-lg shadow-lg w-96 relative">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-black"
//         >
//           ✖
//         </button>
//         <h2 className="text-xl font-semibold mb-3">Enquiry for {room?.name}</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded mb-2"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded mb-2"
//             required
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Your Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full p-2 border rounded mb-2"
//             required
//           />

//           <div className="flex gap-2 mb-2">
//             <div className="w-1/2">
//               <label className="block text-xs text-gray-600 mb-1">Check In</label>
//               <input
//                 type="date"
//                 name="checkInDate"
//                 min={new Date().toISOString().split("T")[0]}
//                 value={formData.checkInDate}
//                 onChange={handleChange}
//                 className="w-full p-1.5 border rounded text-sm"
//                 required
//               />
//             </div>
//             <div className="w-1/2">
//               <label className="block text-xs text-gray-600 mb-1">Check Out</label>
//               <input
//                 type="date"
//                 name="checkOutDate"
//                 min={formData.checkInDate ? formData.checkInDate : ""}
//                 disabled={!formData.checkInDate}
//                 value={formData.checkOutDate}
//                 onChange={handleChange}
//                 className="w-full p-1.5 border rounded text-sm"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex gap-2 mb-3">
//             <div className="w-1/3">
//               <label className="block text-xs text-gray-600 mb-1">Adults</label>
//               <select
//                 name="adults"
//                 value={formData.adults}
//                 onChange={handleChange}
//                 className="w-full p-1.5 border rounded text-sm"
//               >
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//               </select>
//             </div>
//             <div className="w-1/3">
//               <label className="block text-xs text-gray-600 mb-1">Children</label>
//               <select
//                 name="children"
//                 value={formData.children}
//                 onChange={handleChange}
//                 className="w-full p-1.5 border rounded text-sm"
//               >
//                 <option value="0">0</option>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//               </select>
//             </div>
//             <div className="w-1/3">
//               <label className="block text-xs text-gray-600 mb-1">Breakfast</label>
//               <div className="flex text-sm">
//                 <label className="mr-2">
//                   <input
//                     type="radio"
//                     name="breakfast"
//                     value="yes"
//                     checked={formData.breakfast === "yes"}
//                     onChange={handleChange}
//                     className="mr-1"
//                   />
//                   Yes
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="breakfast"
//                     value="no"
//                     checked={formData.breakfast === "no"}
//                     onChange={handleChange}
//                     className="mr-1"
//                   />
//                   No
//                 </label>
//               </div>
//             </div>
//           </div>

//           <button type="submit" className="bg-black text-white px-4 py-2 rounded w-full">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import emailjs from "@emailjs/browser";

export function EnquiryForm({ room, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    adults: "1",
    children: "0",
    breakfast: "yes",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("✅ Submit button clicked!");

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      check_in_date: formData.checkInDate,
      check_out_date: formData.checkOutDate,
      adults: formData.adults,
      children: formData.children,
      breakfast: formData.breakfast,
      room_name: room?.name, // ✅ FIXED
    };

    emailjs
      .send(
        "service_opdia6t",
        "template_1w212n8",
        templateParams,
        "h2f21qeqV8t3A2aA4"
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          alert("Your enquiry has been sent!");
          onClose(); // ✅ FIXED
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send enquiry. Please try again.");
        }
      );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose} // ✅ FIXED
          className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-black"
        >
          ✖
        </button>
        <h2 className="text-xl font-semibold mb-3">
          Enquiry for {room?.name} {/* ✅ FIXED */}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <div className="flex gap-2 mb-2">
            <div className="w-1/2">
              <label className="block text-xs text-gray-600 mb-1">
                Check In
              </label>
              <input
                type="date"
                name="checkInDate"
                min={new Date().toISOString().split("T")[0]}
                value={formData.checkInDate}
                onChange={handleChange}
                className="w-full p-1.5 border rounded text-sm"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-xs text-gray-600 mb-1">
                Check Out
              </label>
              <input
                type="date"
                name="checkOutDate"
                min={formData.checkInDate ? formData.checkInDate : ""}
                disabled={!formData.checkInDate}
                value={formData.checkOutDate}
                onChange={handleChange}
                className="w-full p-1.5 border rounded text-sm"
                required
              />
            </div>
          </div>
          <div className="flex gap-2 mb-3">
            <div className="w-1/3">
              <label className="block text-xs text-gray-600 mb-1">Adults</label>
              <select
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                className="w-full p-1.5 border rounded text-sm"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="w-1/3">
              <label className="block text-xs text-gray-600 mb-1">
                Children
              </label>
              <select
                name="children"
                value={formData.children}
                onChange={handleChange}
                className="w-full p-1.5 border rounded text-sm"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="w-1/3">
              <label className="block text-xs text-gray-600 mb-1">
                Breakfast
              </label>
              <div className="flex text-sm">
                <label className="mr-2">
                  <input
                    type="radio"
                    name="breakfast"
                    value="yes"
                    checked={formData.breakfast === "yes"}
                    onChange={handleChange}
                    className="mr-1"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="breakfast"
                    value="no"
                    checked={formData.breakfast === "no"}
                    onChange={handleChange}
                    className="mr-1"
                  />
                  No
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="bg-black text-white px-4 py-2 rounded w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}


