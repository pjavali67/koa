// "use client";

// import { Button } from "../../components/ui/button";
// import { Input } from "../../components/ui/input";
// import { Textarea } from "../../components/ui/textarea";
// import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
// import { Mail, Phone, User } from "lucide-react";
// import { motion } from "framer-motion";

// export default function ContactUs() {
//   return (
//     <div className="container py-4">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-12"
//       >
//         <h1 className="text-4xl font-bold text-primary mb-4">
//           Karnataka Orthopaedic Association
//         </h1>
//         <p className="text-lg text-muted-foreground">
//           Get in touch with us by completing the form or contacting us directly
//         </p>
//       </motion.div>

//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Contact Form */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <Card>
//             <CardHeader>
//               <CardTitle className="text-2xl">Send us a message</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form className="space-y-4">
//                 <div className="space-y-2">
//                   <label htmlFor="name" className="block text-sm font-medium">
//                     Name
//                   </label>
//                   <div className="relative">
//                     <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                     <Input
//                       id="name"
//                       placeholder="Your name"
//                       className="pl-10"
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="email" className="block text-sm font-medium">
//                     Email
//                   </label>
//                   <div className="relative">
//                     <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="your.email@example.com"
//                       className="pl-10"
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="message" className="block text-sm font-medium">
//                     Message
//                   </label>
//                   <Textarea
//                     id="message"
//                     placeholder="Your message..."
//                     rows={5}
//                   />
//                 </div>

//                 <Button  variant={"koaread"} type="submit" className="w-full">
//                   Send Message
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </motion.div>

//         {/* Contact Info */}
//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <Card>
//             <CardHeader>
//               <CardTitle className="text-2xl">Contact Information</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="bg-primary/10 p-3 rounded-full">
//                   <User className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Secretary General - KOA</h3>
//                   <p className="text-muted-foreground">Dr. Harish Murthy</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="bg-primary/10 p-3 rounded-full">
//                   <Phone className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Phone</h3>
//                   <p className="text-muted-foreground">
//                     <a href="tel:+919880765855" className="hover:underline">
//                       +91 9880765855
//                     </a>
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="bg-primary/10 p-3 rounded-full">
//                   <Mail className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Email</h3>
//                   <p className="text-muted-foreground">
//                     <a
//                       href="mailto:drharishmurthysgkoa@gmail.com"
//                       className="hover:underline"
//                     >
//                       drharishmurthysgkoa@gmail.com
//                     </a>
//                   </p>
//                 </div>
//               </div>

//               <div className="pt-4">
//                 <h3 className="font-semibold mb-2">Office Hours</h3>
//                 <p className="text-muted-foreground">
//                   Monday - Friday: 9:00 AM - 5:00 PM
//                 </p>
//                 <p className="text-muted-foreground">
//                   Saturday: 10:00 AM - 2:00 PM
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Mail, Phone, User } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    console.log(form, "%%%%%")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setStatus(data.error || "Failed to send message.");
      }
    } catch (err) {
      setStatus("Something went wrong. Please try again." + err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">Karnataka Orthopaedic Association</h1>
        <p className="text-lg text-muted-foreground">
          Get in touch with us by completing the form or contacting us directly
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="name" placeholder="Your name" className="pl-10" value={form.name} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="your.email@example.com" className="pl-10" value={form.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Your message..." rows={5} value={form.message} onChange={handleChange} required />
                </div>

                <Button variant={"koaread"} type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                {status && <p className="text-sm text-muted-foreground pt-2">{status}</p>}
              </form>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Secretary General - KOA</h3>
                  <p className="text-muted-foreground">Dr. Harish Murthy</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+919880765855" className="hover:underline">
                      +91 9880765855
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:drharishmurthysgkoa@gmail.com"
                      className="hover:underline"
                    >
                      drharishmurthysgkoa@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold mb-2">Office Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 5:00 PM
                </p>
                <p className="text-muted-foreground">
                  Saturday: 10:00 AM - 2:00 PM
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>

  );
}
