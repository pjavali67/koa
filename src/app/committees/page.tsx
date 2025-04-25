"use client";

import * as React from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
// import { Button } from "@/components/ui/button";

interface Contact {
  name: string;
  phone: string;
  avatarUrl?: string;
}

const contacts: Contact[] = [
  { name: "Dr. Satish Nesari Belgaum", phone: "+1 555-123-4567" },
  { name: "Dr. Rizwan Ahmed from Mangalore", phone: "+1 555-234-5678" },
  {
    name: "Dr. Sheshgiri JSS  Mysore.",
    phone: "+1 555-345-6789",
  },
  { name: "Dr. Vijay Tubaki Tumkur", phone: "+1 555-456-7890" },
];

export default function CommitteePage() {
  return (
    <div className="p-2 space-y-6 m-20">
      <h1 className="text-2xl font-bold text-center">Ilizarov</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contacts.slice(0, 3).map((contact) => (
          <div className="card bg-base-100 w-96 shadow-md" key={contact.phone}>
            <div className="card-body">
              <div className="flex gap-3 items-center">
                <Avatar className="w-15 h-15">
                  <AvatarImage src={"/assets/members/Dr-Anil-B-Patil-1.jpg"} />
                  <AvatarFallback>{"contact.name[0]"}</AvatarFallback>
                </Avatar>
                <h2 className="card-title">{contact.name}</h2>
              </div>
              <p>mobile: 123456789</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Profile</button>
              </div>
            </div>
          </div>
          // <Card key={index} className="flex items-center p-4 gap-4">
          //   <Avatar>
          //     <AvatarImage
          //       src={contact.avatarUrl || "https://via.placeholder.com/40"}
          //     />
          //     <AvatarFallback>{contact.name[0]}</AvatarFallback>
          //   </Avatar>
          //   <div>
          //     <CardTitle className="text-lg font-semibold">
          //       {contact.name}
          //     </CardTitle>
          //     <CardContent className="pl-0">
          //       <Button variant="link" asChild>
          //         <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          //       </Button>
          //     </CardContent>
          //   </div>
          // </Card>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Spine</h2>

        {contacts.slice(3, 4).map((cont) => (
          <div className="card bg-base-100 w-96 shadow-md" key={cont.phone}>
            <div className="card-body">
              <div className="flex gap-3 items-center">
                <Avatar className="w-15 h-15">
                  <AvatarImage src={"/assets/members/Dr-Anil-B-Patil-1.jpg"} />
                  <AvatarFallback>{cont.name[1]}</AvatarFallback>
                </Avatar>
                <h2 className="card-title">{cont.name}</h2>
              </div>
              <p>mobile: 123456789</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Profile</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
