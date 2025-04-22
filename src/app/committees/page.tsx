// import React from "react";
// import PageLayout from "./layout";
// import CommitteesList from "@/components/committees/CommitteesList";
// function CommitteePage() {
//   return (
//     <div className="w-full p-10 flex justify-center items-center ">
//       <CommitteesList />
//     </div>
//   );
// }

"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Contact {
  name: string;
  phone: string;
  avatarUrl?: string;
}

const contacts: Contact[] = [
  { name: "Alice Smith", phone: "+1 555-123-4567" },
  { name: "Bob Johnson", phone: "+1 555-234-5678" },
  { name: "Charlie Lee", phone: "+1 555-345-6789" },
  { name: "Dana White", phone: "+1 555-456-7890" },
];

export default function CommitteePage() {
  return (
    <div className="p-2 space-y-6">
      <div className="card bg-base-100 w-96 shadow-md">
        <div className="card-body">
          <h2 className="card-title">Dr. Praveen</h2>
          <p>mobile: 123456789</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Profile</button>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-center">Past Leaders</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contacts.slice(0, 3).map((contact, index) => (
          <Card key={index} className="flex items-center p-4 gap-4">
            <Avatar>
              <AvatarImage
                src={contact.avatarUrl || "https://via.placeholder.com/40"}
              />
              <AvatarFallback>{contact.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg font-semibold">
                {contact.name}
              </CardTitle>
              <CardContent className="pl-0">
                <Button variant="link" asChild>
                  <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                </Button>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Additional Contact</h2>
        {contacts.slice(3, 4).map((contact, index) => (
          <Card key={index} className="flex items-center p-4 gap-4 max-w-sm">
            <Avatar>
              <AvatarImage
                src={contact.avatarUrl || "https://via.placeholder.com/40"}
              />
              <AvatarFallback>{contact.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg font-semibold">
                {contact.name}
              </CardTitle>
              <CardContent className="pl-0">
                <Button
                  onClick={() =>
                    (window.location.href = `tel:${contact.phone}`)
                  }
                >
                  Contact
                </Button>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// CommitteePage.getLayout = function getLayout(page: React.ReactNode) {
//   return <PageLayout>{page}</PageLayout>;
// };
// // export default CommitteePage;
