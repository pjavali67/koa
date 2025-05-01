"use client";

import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../components/ui/dropdown-menu";
import { ChevronDown, ChevronUp, Search, X } from "lucide-react";

type FellowshipProgram = {
  id: number;
  affiliated_institute_name: string;
  affiliated_institute_address: string;
  contact_email: string;
  contact_mobile_number: string;
  orthopaedic_subspeciality: string;
  duration_of_the_program: string;
  fellowship_supervisor: string;
  // ... other fields
};

const data: FellowshipProgram[] = [
  {
    id: 1,
    affiliated_institute_name: "Advanced Orthopaedic Institute of Delhi",
    affiliated_institute_address: "12 Medical Complex, New Delhi 110001, India",
    contact_email: "fellowship@advancedorthodelhi.org",
    contact_mobile_number: "+91 9876543210",
    orthopaedic_subspeciality: "Spine Surgery",
    duration_of_the_program: "12 months",
    fellowship_supervisor: "Dr. Rajesh Verma",
  },
  {
    id: 2,
    affiliated_institute_name: "Mumbai Joint Replacement Center",
    affiliated_institute_address: "Marine Drive Road, Mumbai 400020, India",
    contact_email: "fellowship@mumbaijrc.com",
    contact_mobile_number: "+91 8765432109",
    orthopaedic_subspeciality: "Joint Replacement",
    duration_of_the_program: "18 months",
    fellowship_supervisor: "Dr. Priya Malhotra",
  },
  {
    id: 3,
    affiliated_institute_name: "Chennai Sports Medicine Foundation",
    affiliated_institute_address: "15 Athletic Street, Chennai 600032, India",
    contact_email: "fellowship@chennaismf.org",
    contact_mobile_number: "+91 7654321098",
    orthopaedic_subspeciality: "Sports Medicine",
    duration_of_the_program: "6 months",
    fellowship_supervisor: "Dr. Arun Kumar",
  },
  {
    id: 4,
    affiliated_institute_name: "Kolkata Pediatric Orthopaedic Center",
    affiliated_institute_address: "8 Children's Health Lane, Kolkata 700017, India",
    contact_email: "fellowship@kolkatapoc.org",
    contact_mobile_number: "+91 6543210987",
    orthopaedic_subspeciality: "Pediatric Orthopaedics",
    duration_of_the_program: "12 months",
    fellowship_supervisor: "Dr. Meena Chatterjee",
  },
  {
    id: 5,
    affiliated_institute_name: "Bangalore Trauma Institute",
    affiliated_institute_address: "22 Emergency Road, Bangalore 560002, India",
    contact_email: "fellowship@bangaloretrauma.edu",
    contact_mobile_number: "+91 9432109876",
    orthopaedic_subspeciality: "Trauma and Fracture Care",
    duration_of_the_program: "24 months",
    fellowship_supervisor: "Dr. Vikram Shetty",
  },
  {
    id: 6,
    affiliated_institute_name: "Hyderabad Arthroscopy Academy",
    affiliated_institute_address: "5 Minimally Invasive Lane, Hyderabad 500032, India",
    contact_email: "fellowship@hyderabadarthro.com",
    contact_mobile_number: "+91 8321098765",
    orthopaedic_subspeciality: "Arthroscopy",
    duration_of_the_program: "12 months",
    fellowship_supervisor: "Dr. Ali Khan",
  },
];

export function FellowshipTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [specialityFilter, setSpecialityFilter] = useState<string | null>(null);
  const [citySearch, setCitySearch] = useState("");

  const columns: ColumnDef<FellowshipProgram>[] = [
    {
      accessorKey: "affiliated_institute_name",
      header: "Affiliated Institute Name",
    },
    {
      accessorKey: "affiliated_institute_address",
      header: "Street Address",
      cell: ({ row }) => {
        const address = row.getValue("affiliated_institute_address") as string;
        return <div className="w-48 truncate">{address}</div>;
      },
    },
    {
      accessorKey: "contact_email",
      header: "Contact Email",
    },
    {
      accessorKey: "contact_mobile_number",
      header: "Contact Mobile Number",
    },
    {
      accessorKey: "orthopaedic_subspeciality",
      header: "Orthopaedic Subspeciality",
    },
    {
      id: "actions",
      header: "View Details",
      cell: () => (
        <Button variant="outline" size="sm">
          View Details
        </Button>
      
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  const handleSearch = () => {
    table.getColumn("affiliated_institute_address")?.setFilterValue(citySearch);
    if (specialityFilter) {
      table.getColumn("orthopaedic_subspeciality")?.setFilterValue(specialityFilter);
    }
  };

  const handleReset = () => {
    setCitySearch("");
    setSpecialityFilter(null);
    table.resetColumnFilters();
  };

  return (
    <div className="w-fit mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center gap-4 py-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Filter by Speciality {specialityFilter ? `: ${specialityFilter}` : ""}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setSpecialityFilter(null)}>
              All Specialities
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSpecialityFilter("Arthroplasty")}>
              Arthroplasty
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSpecialityFilter("Arthroscopy")}>
              Arthroscopy
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSpecialityFilter("Trauma")}>
              Trauma
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Input
          placeholder="Filter by city..."
          value={citySearch}
          onChange={(event) => setCitySearch(event.target.value)}
          className="max-w-sm"
        />

        <Button onClick={handleSearch} variant="default">
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
        <Button onClick={handleReset} variant="outline">
          <X className="mr-2 h-4 w-4" /> Reset
        </Button>
      </div>
 
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      <div
                        className={
                          header.column.getCanSort()
                            ? "cursor-pointer select-none flex items-center gap-1"
                            : ""
                        }
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <ChevronUp className="h-4 w-4" />,
                          desc: <ChevronDown className="h-4 w-4" />,
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}