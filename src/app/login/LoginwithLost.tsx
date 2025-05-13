// // Example integration in a Login component
// "use client";
// import React, { useState, useRef } from "react";
// import LostPassword from "./LostPassword";
// import { useRouter } from 'next/navigation'

// const LoginwithLost: React.FC = () => {
//   const [showLostPassword, setShowLostPassword] = useState(false);
//   const emailRef = useRef<HTMLInputElement>(null);
//   const router = useRouter();

//   return (
//     <>

//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//                 ref={emailRef}
//               type="email"
//               id="email"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           <div className="flex justify-between items-center mb-4">
//             <button type="submit" className="btn btn-primary">
//               Login
//             </button>
//               <button className="btn btn-primary" onClick={() => { router.push('/membership-fee-card') }}>
//                 Join KOA
//               </button>
//             <button
//               type="button"
//               onClick={() => setShowLostPassword(true)}
//               className="text-cyan-600 hover:underline"
//             >
//               Forgot Password?
//             </button>
//           </div>
//         </form>
//           {true && (<div className="text-red-500">Only Active Member allowed!! </div>)}
//       </div>
//       {showLostPassword && (
//           <LostPassword
//             onClose={() => setShowLostPassword(false)}
//             emailAddress={emailRef.current?.value || ""}
//           />
//       )}

//     </div>

//     </>
//   );
// };

// export default LoginwithLost;
// "use client";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import LostPassword from "./LostPassword";
// import { useRouter } from "next/navigation";

// const loginSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
// });

// type LoginFormData = z.infer<typeof loginSchema>;

// const LoginwithLost: React.FC = () => {
//   const [showLostPassword, setShowLostPassword] = useState(false);
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     getValues,
//   } = useForm<LoginFormData>({
//     resolver: zodResolver(loginSchema),
//   });

//   const onSubmit = (data: LoginFormData) => {
//     console.log("Login data:", data);
//     // Perform login logic here
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               {...register("email")}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
//               placeholder="Enter your email"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               {...register("password")}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
//               placeholder="Enter your password"
//             />
//             {errors.password && (
//               <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
//             )}
//           </div>

//           <div className="flex justify-between items-center mb-4">
//             <button type="submit" className="btn btn-primary">
//               Login
//             </button>
//             <button
//               type="button"
//               className="btn btn-primary"
//               onClick={() => router.push("/membership-fee-card")}
//             >
//               Join KOA
//             </button>
//             <button
//               type="button"
//               onClick={() => setShowLostPassword(true)}
//               className="text-cyan-600 hover:underline"
//             >
//               Forgot Password?
//             </button>
//           </div>
//         </form>

//         <div className="text-red-500">Only Active Member allowed!!</div>
//       </div>

//       {showLostPassword && (
//         <LostPassword
//           onClose={() => setShowLostPassword(false)}
//           emailAddress={getValues("email") || ""}
//         />
//       )}
//     </div>
//   );
// };

// export default LoginwithLost;


// "use client";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import LostPassword from "./LostPassword";
// import { useRouter } from "next/navigation";

// // Zod schema for validation
// const loginSchema = z.object({
//   email: z.string().email("Enter a valid email address"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
// });

// // TypeScript type for form data
// type LoginFormData = z.infer<typeof loginSchema>;

// const LoginwithLost: React.FC = () => {
//   const [showLostPassword, setShowLostPassword] = useState(false);
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     getValues,
//     formState: { errors },
//   } = useForm<LoginFormData>({
//     resolver: zodResolver(loginSchema),
//   });

//   const onSubmit = (data: LoginFormData) => {
//     console.log("Login Submitted:", data);
//     // Your login logic here
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>

//         {/* react-hook-form form handler */}
//         <form onSubmit={handleSubmit(onSubmit)} noValidate>
//           {/* Email Field */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               id="email"
//               type="email"
//               {...register("email")}
//               className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
//               placeholder="Enter your email"
//             />
//             {errors.email && (
//               <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
//             )}
//           </div>

//           {/* Password Field */}
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               {...register("password")}
//               className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
//               placeholder="Enter your password"
//             />
//             {errors.password && (
//               <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
//             )}
//           </div>

//           {/* Buttons and Links */}
//           <div className="flex justify-between items-center mb-4 gap-2 flex-wrap">
//             <button type="submit" className="btn btn-primary">
//               Login
//             </button>
//             <button
//               type="button"
//               className="btn btn-primary"
//               onClick={() => router.push("/membership-fee-card")}
//             >
//               Join KOA
//             </button>
//             <button
//               type="button"
//               onClick={() => setShowLostPassword(true)}
//               className="text-cyan-600 hover:underline text-sm"
//             >
//               Forgot Password?
//             </button>
//           </div>
//         </form>

//         <div className="text-red-500">Only Active Member allowed!!</div>
//       </div>

//       {/* Lost Password Modal */}
//       {showLostPassword && (
//         <LostPassword
//           onClose={() => setShowLostPassword(false)}
//           emailAddress={getValues("email") || ""}
//         />
//       )}
//     </div>
//   );
// };

// export default LoginwithLost;


"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/ui/input"; // ShadCN Input component
import { Button } from "../../components/ui/button"; // Optional: ShadCN Button component
import LostPassword from "./LostPassword";
import { useRouter } from "next/navigation";

// Zod schema for validation
const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginwithLost: React.FC = () => {
  const [showLostPassword, setShowLostPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);
    // Handle login
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center mb-4 gap-2 flex-wrap">
            <Button type="submit">Login</Button>
            <Button type="button" onClick={() => router.push("/membership-fee-card")}>
              Join KOA
            </Button>
            <button
              type="button"
              onClick={() => setShowLostPassword(true)}
              className="text-cyan-600 hover:underline text-sm"
            >
              Forgot Password?
            </button>
          </div>
        </form>

        <div className="text-red-500">Only Active Member allowed!!</div>
      </div>

      {/* Lost Password Modal */}
      {showLostPassword && (
        <LostPassword
          onClose={() => setShowLostPassword(false)}
          emailAddress={getValues("email") || ""}
        />
      )}
    </div>
  );
};

export default LoginwithLost;

