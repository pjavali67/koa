"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/utils/data-table";
import PageLayout from "@/utils/Pagelayout";

type DistictChaptersProps = {
  Name: string;
  President: string;
  PhoneNumber: string;
  Secretary: string;
  PhoneSecretary: string;
};

const data: DistictChaptersProps[] = [
  {
    Name: "Bangalore",
    President: "Dr. Ramesh Kulkarni",
    PhoneNumber: "234135677858",
    Secretary: "Smt. Anjali Desai",
    PhoneSecretary: "8921287389",
  },
  {
    Name: "shivmoga",
    President: "Shri. Mohan Rao",
    PhoneNumber: "8743478932",
    Secretary: "Smt. Kavita Shetty",
    PhoneSecretary: "78237829834",
  },
  {
    Name: "chennai",
    President: "Dr. Priya Nair",
    PhoneNumber: "3212516772",
    Secretary: "Shri. Rajesh Menon",
    PhoneSecretary: "732473784",
  },
  {
    Name: "Mangalore",
    President: "Dr. Ramesh Kulkarni",
    PhoneNumber: "4341566267",
    Secretary: "Smt. Anjali Desai",
    PhoneSecretary: "8921287389",
  },
  {
    Name: "Bellary",
    President: "Shri. Mohan Rao",
    PhoneNumber: "2243252515",
    Secretary: "Smt. Kavita Shetty",
    PhoneSecretary: "78237829834",
  },
  {
    Name: " Hassan",
    President: "Dr. Priya Nair",
    PhoneNumber: "634683728423",
    Secretary: "Shri. Rajesh Menon",
    PhoneSecretary: "732473784",
  },
  {
    Name: "Mysore",
    President: "Dr. Ramesh Kulkarni",
    PhoneNumber: "87147437487",
    Secretary: "Smt. Anjali Desai",
    PhoneSecretary: "8921287389",
  },
  {
    Name: "Chikkamagalore",
    President: "Shri. Mohan Rao",
    PhoneNumber: "7278432473",
    Secretary: "Smt. Kavita Shetty",
    PhoneSecretary: "78237829834",
  },
  {
    Name: "Chitradurga",
    President: "Dr. Priya Nair",
    PhoneNumber: "287342347023",
    Secretary: "Shri. Rajesh Menon",
    PhoneSecretary: "732473784",
  },
];

export const columns: ColumnDef<DistictChaptersProps>[] = [
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "President",
    header: "Presidents",
  },
  {
    accessorKey: "PhoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "Secretary",
    header: "Secretary",
  },
  {
    accessorKey: "PhoneSecretary",
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
