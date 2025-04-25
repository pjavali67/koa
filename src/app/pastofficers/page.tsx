"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../utils/data-table";
import PageLayout from "../../utils/Pagelayout";

type PastOfficial = {
  year: number;
  pastPresident: string;
  location: string;
  pastSecretary: string;
};

const data: PastOfficial[] = [
  {
    year: 2020,
    pastPresident: "Dr. Ramesh Kulkarni",
    location: "Mumbai",
    pastSecretary: "Smt. Anjali Desai",
  },
  {
    year: 2021,
    pastPresident: "Shri. Mohan Rao",
    location: "Bangalore",
    pastSecretary: "Smt. Kavita Shetty",
  },
  {
    year: 2022,
    pastPresident: "Dr. Priya Nair",
    location: "Chennai",
    pastSecretary: "Shri. Rajesh Menon",
  },
  {
    year: 2020,
    pastPresident: "Dr. Ramesh Kulkarni",
    location: "Mumbai",
    pastSecretary: "Smt. Anjali Desai",
  },
  {
    year: 2021,
    pastPresident: "Shri. Mohan Rao",
    location: "Bangalore",
    pastSecretary: "Smt. Kavita Shetty",
  },
  {
    year: 2022,
    pastPresident: "Dr. Priya Nair",
    location: "Chennai",
    pastSecretary: "Shri. Rajesh Menon",
  },
  {
    year: 2020,
    pastPresident: "Dr. Ramesh Kulkarni",
    location: "Mumbai",
    pastSecretary: "Smt. Anjali Desai",
  },
  {
    year: 2021,
    pastPresident: "Shri. Mohan Rao",
    location: "Bangalore",
    pastSecretary: "Smt. Kavita Shetty",
  },
  {
    year: 2022,
    pastPresident: "Dr. Priya Nair",
    location: "Chennai",
    pastSecretary: "Shri. Rajesh Menon",
  },
  {
    year: 2020,
    pastPresident: "Dr. Ramesh Kulkarni",
    location: "Mumbai",
    pastSecretary: "Smt. Anjali Desai",
  },
  {
    year: 2021,
    pastPresident: "Shri. Mohan Rao",
    location: "Bangalore",
    pastSecretary: "Smt. Kavita Shetty",
  },
  {
    year: 2022,
    pastPresident: "Dr. Priya Nair",
    location: "Chennai",
    pastSecretary: "Shri. Rajesh Menon",
  },
  {
    year: 2020,
    pastPresident: "Dr. Ramesh Kulkarni",
    location: "Mumbai",
    pastSecretary: "Smt. Anjali Desai",
  },
  {
    year: 2021,
    pastPresident: "Shri. Mohan Rao",
    location: "Bangalore",
    pastSecretary: "Smt. Kavita Shetty",
  },
  {
    year: 2022,
    pastPresident: "Dr. Priya Nair",
    location: "Chennai",
    pastSecretary: "Shri. Rajesh Menon",
  },
];

export const columns: ColumnDef<PastOfficial>[] = [
  {
    accessorKey: "year",
    header: "Year",
  },
  {
    accessorKey: "pastPresident",
    header: "Past Presidents",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "pastSecretary",
    header: "Past Secretaries",
  },
];

export default function PastOfficers() {
  return (
    <>
      <div className="mt-2">
        <PageLayout
          title="Past Officers"
          description="Past officials of the organization"
        />
      </div>
      <div className="p-6 m-20">
        <h1 className="text-2xl font-semibold mb-4">Past Officials</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
