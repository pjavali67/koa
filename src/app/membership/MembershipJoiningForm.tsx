"use client";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Calendar } from "../../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "../../lib/utils";
import PageLayout from "../../components/custom-components/PageLayout";
import { Progress } from "../../components/ui/progress";
import { Separator } from "../../components/ui/separator";
import Image from "next/image";

const formSchema = z.object({
  // Personal Details
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address: z.string().min(1, "Address is required"),
  streetAddress: z.string().min(1, "Street address is required"),
  addressLine2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State/Province is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  dob: z.date({
    required_error: "Date of birth is required",
    invalid_type_error: "Invalid date",
  }),

  // Academic Details
  pgDegree: z.string().min(1, "PG degree is required"),
  pgCollege: z.string().min(1, "College name is required"),
  pgYear: z.string().min(4, "Passing year must be 4 digits").max(4),
  mbbsCollege: z.string().min(1, "College name is required"),
  mbbsYear: z.string().min(4, "Passing year must be 4 digits").max(4),

  // Uploads
  photo: z
    .instanceof(File, { message: "Photo is required" })
    .refine((file) => file.size <= 2 * 1024 * 1024, "File size should be less than 2MB")
    .refine(
      (file) => ["image/jpeg", "image/png"].includes(file.type),
      "Only JPEG and PNG files are accepted"
    ),
  medicalCouncilCert: z
    .instanceof(File, { message: "Certificate is required" })
    .refine((file) => file.size <= 5 * 1024 * 1024, "File size should be less than 5MB")
    .refine(
      (file) => file.type === "application/pdf",
      "Only PDF files are accepted"
    ),
  pgCertificate: z
    .instanceof(File, { message: "Certificate is required" })
    .refine((file) => file.size <= 5 * 1024 * 1024, "File size should be less than 5MB")
    .refine(
      (file) => file.type === "application/pdf",
      "Only PDF files are accepted"
    ),

  // Proposer Details
  proposerName: z.string().optional(),
  proposerKoaNumber: z.string().optional(),
  seconderName: z.string().optional(),
  seconderKoaNumber: z.string().optional(),

  // Login Details
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),

  // Payment Details
  upiTransactionId: z.string().min(1, "Transaction ID is required"),
  upiTransactionDate: z.date({
    required_error: "Transaction date is required",
    invalid_type_error: "Invalid date",
  }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export default function MembershipJoiningForm() {

  const [progress, setProgress] = useState(0);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [medicalCertPreview, setMedicalCertPreview] = useState<string | null>(null);
  const [pgCertPreview, setPgCertPreview] = useState<string | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const photoRef = useRef<HTMLInputElement>(null);
  const medicalCertRef = useRef<HTMLInputElement>(null);
  const pgCertRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      streetAddress: "",
      addressLine2: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      phone: "",
      pgDegree: "",
      pgCollege: "",
      pgYear: "",
      mbbsCollege: "",
      mbbsYear: "",
      proposerName: "",
      proposerKoaNumber: "",
      seconderName: "",
      seconderKoaNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      upiTransactionId: "",
    },
    mode: "onChange", // Validate on every change
  });
  // Watch all form values and validate
  const formValues = form.watch();
  const formState = form.formState;


  // Calculate form completion progress
  useEffect(() => {
    const requiredFields = [
      'firstName', 'lastName', 'address', 'streetAddress',
      'city', 'state', 'postalCode', 'country', 'phone', 'dob',
      'pgDegree', 'pgCollege', 'pgYear', 'mbbsCollege', 'mbbsYear',
      'photo', 'medicalCouncilCert', 'pgCertificate',
      'email', 'password', 'confirmPassword',
      'upiTransactionId', 'upiTransactionDate'
    ];

    const totalRequiredFields = requiredFields.length;
    let filledFields = 0;

    requiredFields.forEach(field => {
      const value = formValues[field as keyof typeof formValues];

      if (value !== undefined && value !== null && value !== '') {
        if (typeof value === 'object') {
          if (value instanceof File && value.size > 0) {
            filledFields++;
          } else if (value instanceof Date) {
            filledFields++;
          }
        } else {
          filledFields++;
        }
      }
    });

    const newProgress = Math.round((filledFields / totalRequiredFields) * 100);
    setProgress(newProgress);

    // Check if form is completely valid
    setIsFormValid(formState.isValid && newProgress === 100);
  }, [formValues, formState]);





  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      form.setValue("photo", file, { shouldValidate: true });
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleMedicalCertChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      form.setValue("medicalCouncilCert", file, { shouldValidate: true });
      setMedicalCertPreview(URL.createObjectURL(file));
    }
  };

  const handlePgCertChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      form.setValue("pgCertificate", file, { shouldValidate: true });
      setPgCertPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    alert("Form submitted successfully!");
  };

  return (
    <PageLayout title="Membership Joining Form">
  
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Life Membership Application Form</h1>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <h2 className="font-bold mb-2">Important Instructions</h2>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>A photo in JPEG or PNG format that is under 2 MB is required. No selfies will be accepted; the photo must be a headshot. If necessary, use Image Compressor to make the photo smaller.</li>
            <li>All degree certificates must be in PDF format and weigh no more than 5MB each. If necessary, use PDF Compressor to make the pdf smaller.</li>
            <li>You must use your UPI ID to complete the payment in order to complete the registration procedure.</li>
            <li>After the online application has been submitted, your membership no and user id will be activated after ratification in the upcoming annual general body meeting</li>
          </ol>
          <p className="mt-3 text-sm">Please call this number at <a href="tel:+919880765855" className="text-blue-600">+91 9880765855</a> if you have any additional questions.</p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Section 1: Personal Details */}
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Personal Details</h2>
            <Separator className="my-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name (Required)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name (Required)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Address (Required)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="streetAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Address</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="addressLine2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address Line 2</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State / Province / Region</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="postalCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP / Postal Code</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone (Required)</FormLabel>
                    <FormControl>
                      <Input {...field} type="tel" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date Of Birth (Required)</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "dd/MM/yyyy")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <p className="text-sm text-muted-foreground">Select date DD/MM/YYYY</p>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Section 2: Academic Details */}
          <div>
            <h2 className="text-xl font-semibold mb-2">2. Academic Details</h2>
            <Separator className="my-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="pgDegree"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Post Graduate Degree: MS / D Ortho / DNB</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pgCollege"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>College Name (Required)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pgYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Passing Year (Required)</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" min="1900" max={new Date().getFullYear()} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="md:col-span-2">
                <h3 className="font-medium mb-2">MBBS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="mbbsCollege"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>College Name (Required)</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mbbsYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Passing Year (Required)</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" min="1900" max={new Date().getFullYear()} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Upload Photo & Certificates */}
          <div>
            <h2 className="text-xl font-semibold mb-2">3. Upload Photo & Certificates</h2>
            <Separator className="my-4" />

            <p className="text-sm text-muted-foreground mb-4">
              Accepted file type: JPG, PNG for Photo & PDF for Certificates. Max. file size: 2 MB for Photo & 5 MB per Certificate
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="photo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Photo (Required){field.name}</FormLabel>
                    <FormControl>
                      <div className="flex flex-col gap-2">
                        <Input
                          type="file"
                          accept=".jpg,.jpeg,.png"
                          ref={photoRef}
                          onChange={handlePhotoChange}
                          className="hidden"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => photoRef.current?.click()}
                        >
                          Choose File
                        </Button>
                        {photoPreview ? (
                          <div className="mt-2 flex items-center gap-2">
                            <Image
                              src={photoPreview}
                              alt="Photo preview"
                              width={80}
                              height={80}
                              className="rounded object-cover"
                            />
                            <span className="text-sm text-green-600">Upload successful</span>
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground">No file chosen</p>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="medicalCouncilCert"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Medical Council Certificate (Required){field.name}</FormLabel>
                    <FormControl>
                      <div className="flex flex-col gap-2">
                        <Input
                          type="file"
                          accept=".pdf"
                          ref={medicalCertRef}
                          onChange={handleMedicalCertChange}
                          className="hidden"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => medicalCertRef.current?.click()}
                        >
                          Choose File
                        </Button>
                        {medicalCertPreview ? (
                          <div className="mt-2 flex items-center gap-2">
                            <span className="text-sm text-green-600">Upload successful</span>
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground">No file chosen</p>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pgCertificate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>MS / D Ortho / DNB Certificate (Required) {field.name}</FormLabel>
                    <FormControl>
                      <div className="flex flex-col gap-2">
                        <Input
                          type="file"
                          accept=".pdf"
                          ref={pgCertRef}
                          onChange={handlePgCertChange}
                          className="hidden"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => pgCertRef.current?.click()}
                        >
                          Choose File
                        </Button>
                        {pgCertPreview ? (
                          <div className="mt-2 flex items-center gap-2">
                            <span className="text-sm text-green-600">Upload successful</span>
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground">No file chosen</p>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Section 4: Proposer Details */}
          <div>
            <h2 className="text-xl font-semibold mb-2">4. Proposer Details</h2>
            <Separator className="my-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="proposerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Proposer Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="proposerKoaNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Proposer KOA Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="seconderName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seconder Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="seconderKoaNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seconder KOA Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Section 5: Login Details */}
          <div>
            <h2 className="text-xl font-semibold mb-2">5. Login Details</h2>
            <Separator className="my-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email (Required)</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter Password (Required)</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password (Required)</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-6">
              <FormLabel>Form Completion</FormLabel>
              <Progress value={progress} className="h-2 mt-2" />
              <p className="text-sm text-muted-foreground mt-1">{progress}% complete</p>
            </div>
          </div>

          {/* Section 6: Payment Details */}
          <div>
            <h2 className="text-xl font-semibold mb-2">6. Payment Details</h2>
            <Separator className="my-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <div className="bg-gray-100 p-4 rounded mb-4">
                  {/* Mock UPI QR Code */}
                  <div className="w-48 h-48 bg-white flex items-center justify-center border border-dashed border-gray-300">
                    <div className="text-center">
                      <div className="text-xs mb-1">Mock UPI QR Code</div>
                      <div className="text-4xl">📱</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="text-right mb-4">
                  <p className="font-medium">Karnataka Orthopaedic Association Regd</p>
                  <p className="text-sm">UPI ID: 236119044141791@cnrb</p>
                  <p className="text-sm">Amount: ₹ 3000/-</p>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  To successfully complete the form, please make a payment of ₹ 3000/- by scanning the above QR code with your UPI app. Please also enter the transaction ID/number and transaction date in the fields below.
                </p>

                <FormField
                  control={form.control}
                  name="upiTransactionId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>UPI Transaction Number (Required)</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <p className="text-sm text-blue-600 mb-4 cursor-pointer">Where to find the UPI transaction Number?</p>

                <FormField
                  control={form.control}
                  name="upiTransactionDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>UPI Transaction Date (Required)</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "dd/MM/yyyy")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <p className="text-sm text-muted-foreground">Select date DD/MM/YYYY</p>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={!isFormValid}
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
    </PageLayout>
   
  
  );
}
   