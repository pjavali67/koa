"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../utils/data-table";
import PageLayout from "../../utils/Pagelayout";

type DistictChaptersProps = {
  name: string;
  pastPresident: string;
  phoneNumber: string;
   pastSecretary: string;
   phoneSecretary: string;
};

const data: DistictChaptersProps[] = [
  {
    name: "Bangalore",
    pastPresident: "Dr. Ramesh Kulkarni",
    phoneNumber: "234135677858",
     pastSecretary: "Smt. Anjali Desai",
     phoneSecretary: "8921287389",
  },
  {
    name: "shivmoga",
    pastPresident: "Shri. Mohan Rao",
    phoneNumber: "8743478932",
     pastSecretary: "Smt. Kavita Shetty",
     phoneSecretary: "78237829834",
  },
  {
    name: "chennai",
    pastPresident: "Dr. Priya Nair",
    phoneNumber: "3212516772",
     pastSecretary: "Shri. Rajesh Menon",
     phoneSecretary: "732473784",
  },
  {
    name: "Mangalore",
    pastPresident: "Dr. Ramesh Kulkarni",
    phoneNumber: "4341566267",
     pastSecretary: "Smt. Anjali Desai",
     phoneSecretary: "8921287389",
  },
  {
    name: "Bellary",
    pastPresident: "Shri. Mohan Rao",
    phoneNumber: "2243252515",
     pastSecretary: "Smt. Kavita Shetty",
     phoneSecretary: "78237829834",
  },
  {
    name: " Hassan",
    pastPresident: "Dr. Priya Nair",
    phoneNumber: "634683728423",
     pastSecretary: "Shri. Rajesh Menon",
     phoneSecretary: "732473784",
  },
  {
    name: "Mysore",
    pastPresident: "Dr. Ramesh Kulkarni",
    phoneNumber: "87147437487",
     pastSecretary: "Smt. Anjali Desai",
     phoneSecretary: "8921287389",
  },
  {
    name: "Chikkamagalore",
    pastPresident: "Shri. Mohan Rao",
    phoneNumber: "7278432473",
     pastSecretary: "Smt. Kavita Shetty",
     phoneSecretary: "78237829834",
  },
  {
    name: "Chitradurga",
    pastPresident: "Dr. Priya Nair",
    phoneNumber: "287342347023",
     pastSecretary: "Shri. Rajesh Menon",
     phoneSecretary: "732473784",
  },
];

export const columns: ColumnDef<DistictChaptersProps>[]= [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "pastPresident",
    header: "PastPresidents",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: " pastSecretary",
    header: " pastSecretary",
  },
  {
    accessorKey: " phoneSecretary",
    header: "Phone Number",
  },
];

export default function DistrictChapterPage() {
  return (
    <>
      <div className="mt-2">
        <PageLayout
          title="District Chapters"
          description="District Chapters of the organization"
        />
      </div>
      <div className="p-6 m-20">
        <h1 className="text-2xl font-semibold mb-4">District Chapters</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
