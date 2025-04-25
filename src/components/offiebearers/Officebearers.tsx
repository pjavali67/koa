import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Separator } from "../../components/ui/separator";

interface TeamMember {
  name: string;
  role: string;
  imageUrl?: string;
}

interface TeamSection {
  title: string;
  members: TeamMember[];
}

const teamSections: TeamSection[] = [
  {
    title: "Core Committee Members",
    members: [
      {
        name: "Dr. Deepak Shivanna",
        role: "President, KOA",
        imageUrl: "/assets/members/DrDeepakShivanna-1-1.jpg",
      },
      {
        name: "Dr. Harish Murthy",
        role: "Secretary General, KOA​",
        imageUrl: "/assets/members/dr-harish-murthy-new-2.jpg",
      },
      {
        name: "Dr. Deepak Shivanna",
        role: "President, KOA",
        imageUrl: "/assets/members/DrDeepakShivanna-1-1.jpg",
      },
      {
        name: "Dr. Harish Murthy",
        role: "Secretary General, KOA​",
        imageUrl: "/assets/members/dr-harish-murthy-new-2.jpg",
      },
    ],
  },
  {
    title: "Executive Committee Members",
    members: [
      {
        name: "Dr. Deepak Shivanna",
        role: "President, KOA",
        imageUrl: "/assets/members/DrDeepakShivanna-1-1.jpg",
      },
      {
        name: "Dr. Harish Murthy",
        role: "Secretary General, KOA​",
        imageUrl: "/assets/members/dr-harish-murthy-new-2.jpg",
      },
      {
        name: "Dr. Deepak Shivanna",
        role: "President, KOA",
        imageUrl: "/assets/members/DrDeepakShivanna-1-1.jpg",
      },
      {
        name: "Dr. Harish Murthy",
        role: "Secretary General, KOA​",
        imageUrl: "/assets/members/dr-harish-murthy-new-2.jpg",
      },
      {
        name: "Dr. Deepak Shivanna",
        role: "President, KOA",
        imageUrl: "/assets/members/DrDeepakShivanna-1-1.jpg",
      },
      {
        name: "Dr. Harish Murthy",
        role: "Secretary General, KOA​",
        imageUrl: "/assets/members/dr-harish-murthy-new-2.jpg",
      },
    ],
  },
  // Add more sections as needed
];

const Officebearers: React.FC = () => {
  return (
    <div className=" bg-white max-w-6xl mx-auto px-4  py-4 left-[4]">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Meet Our Commitee Members
      </h1>
      {teamSections.map((section, idx) => (
        <div key={idx} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {section.members.map((member, i) => (
              <Card key={i} className="rounded-2xl shadow-md p-4">
                <CardContent className="flex flex-col items-center text-center">
                  <Avatar className="w-35 h-35 mb-4">
                    <AvatarImage src={member.imageUrl} alt={member.name} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="font-medium text-lg">{member.name}</div>
                  <div className="text-sm text-gray-500">{member.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          {idx !== teamSections.length - 1 && <Separator className="my-10" />}
        </div>
      ))}
    </div>
  );
};

export default Officebearers;
