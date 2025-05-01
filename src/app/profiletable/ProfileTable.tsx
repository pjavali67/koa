"use client";
import { useState, useMemo, useRef, ChangeEvent } from "react";
import { Pencil, Check, X, Save, Upload, User } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import Image from "next/image";
// import PageLayout from "../../components/custom-components/PageLayout" ;
type ProfileData = {
  section: string;
  header: string;
  content: string;
  isEditing?: boolean;
  tempValue?: string;
  hasChanges?: boolean;
};

type ProfileImage = {
  file: File | null;
  previewUrl: string | null;
  hasChanges: boolean;
};

export default function ProfileTable() {
  const initialData: ProfileData[] = [
    { section: "Personal Details", header: "First Name", content: "Dr. Ramachandra" },
    { section: "Personal Details", header: "Nickname", content: "Dr. Ramachandra H M" },
    { section: "Personal Details", header: "Last Name", content: "H M" },
    { section: "Personal Details", header: "Address", content: "Madhava Ortho & Fracture Clinic,\nBehind Shankar Gas,\nLower Hutha,\nBhadravathi 577301,\nShivamogga District" },
    { section: "Personal Details", header: "Email", content: "ramachandrahm@hotmail.com" },
    { section: "Personal Details", header: "Mobile Number", content: "9448921890" },
    { section: "Personal Details", header: "Date Of Birth", content: "20/08/1966" },
    { section: "Personal Details", header: "Membership Number", content: "R 49" },
    { section: "Academic Details", header: "PG College Name", content: "B J Medical College, Pune" },
    { section: "Academic Details", header: "Passing Year", content: "1994" },
    { section: "Academic Details", header: "MBBS College Name", content: "Government Mysore Medical College" },
    { section: "Academic Details", header: "MBBS Passing Year", content: "1990" },
    { section: "Invitee Details", header: "Proposer Name", content: "Proposer Name" },
    { section: "Invitee Details", header: "Proposer KOA No.", content: "Proposer KOA Number" },
    { section: "Invitee Details", header: "Seconded Name", content: "Seconder Name" },
    { section: "Invitee Details", header: "Seconded KOA No.", content: "Seconder KOA Number" },

  ];

  const [data, setData] = useState<ProfileData[]>(initialData);
  const [profileImage, setProfileImage] = useState<ProfileImage>({
    file: null,
    previewUrl: null,
    hasChanges: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Group data by sections
  const sections = useMemo(() => {
    const sectionsMap = new Map<string, ProfileData[]>();
    data.forEach((item) => {
      if (!sectionsMap.has(item.section)) {
        sectionsMap.set(item.section, []);
      }
      sectionsMap.get(item.section)?.push(item);
    });
    return Array.from(sectionsMap.entries());
  }, [data]);

  // Check if there are any changes to submit
  const hasChanges = useMemo(
    () => data.some(item => item.hasChanges) || profileImage.hasChanges,
    [data, profileImage]
  );

  const handleImageUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage({
          file,
          previewUrl: reader.result as string,
          hasChanges: true
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleEdit = (header: string) => {
    setData(prev => prev.map(d =>
      d.header === header
        ? { ...d, isEditing: true, tempValue: d.content }
        : d
    ));
  };

  const handleSave = (header: string) => {
    setData(prev => prev.map(d =>
      d.header === header
        ? {
          ...d,
          isEditing: false,
          content: d.tempValue ?? d.content,
          tempValue: undefined,
          hasChanges: true
        }
        : d
    ));
  };

  const handleCancel = (header: string) => {
    setData(prev => prev.map(d =>
      d.header === header
        ? { ...d, isEditing: false, tempValue: undefined }
        : d
    ));
  };

  const handleChange = (header: string, value: string) => {
    setData(prev => prev.map(d =>
      d.header === header
        ? { ...d, tempValue: value }
        : d
    ));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Prepare form data for submission
      const formData = new FormData();

      // Add profile image if changed
      if (profileImage.hasChanges && profileImage.file) {
        formData.append('profileImage', profileImage.file);
      }

      // Add text changes
      const changedItems = data.filter(item => item.hasChanges);
      formData.append('updates', JSON.stringify(
        changedItems.map(item => ({
          header: item.header,
          content: item.content
        }))
      ));

      // Log what we're about to send
      console.log('Submitting:', {
        profileImage: profileImage.file ? profileImage.file.name : 'No image change',
        updates: changedItems.map(item => ({
          header: item.header,
          content: item.content
        }))
      });

      // Submit to API
      const response = await fetch('/api/update-profile', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Reset change flags on success
        setData(prev => prev.map(d =>
          d.hasChanges ? { ...d, hasChanges: false } : d
        ));
        setProfileImage(prev => ({
          ...prev,
          hasChanges: false
        }));
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <div className="space-y-6 w-full flex flex-col items-center justify-center p-6 bg-gray-50 max-w-full">
      <h1 className="text-2xl font-bold">Profile</h1>
      {/* Profile Image Section */}
      <div className="flex flex-col items-center gap-4 p-6 border rounded-md bg-white">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200">
          {profileImage.previewUrl ? (
            <Image
              src={profileImage.previewUrl}
              alt="Profile Preview"
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <User className="h-16 w-16 text-gray-400" />
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={handleImageUploadClick}
            className="gap-2"
          >
            <Upload className="h-4 w-4" />
            Change Photo
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
        </div>
      </div>

      {/* Rest of your profile table */}
      <div className="rounded-md w-3/4 border">
        {sections.map(([section, sectionData]) => (
          <div key={section}>
            <div className="bg-gray-100 p-4 font-bold text-lg ">{section}</div>
            {sectionData.map((item, index) => ( 
              <div
                key={item.header}
                className={`flex items-center p-4 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <div className="w-1/4 font-medium">{item.header}</div>
                <div className="flex-1">
                  {item.isEditing ? (
                    <Input
                      value={item.tempValue ?? item.content}
                      onChange={(e) => handleChange(item.header, e.target.value)}
                      className="w-full"
                    />
                  ) : (
                    <div className={`whitespace-pre-line ${item.hasChanges ? "text-blue-600" : ""}`}>
                      {item.content}
                    </div>
                  )}
                </div>
                <div className="w-20 flex justify-end">
                  {item.isEditing ? (
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleSave(item.header)}
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleCancel(item.header)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(item.header)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {hasChanges && (
        <div className="flex justify-end">
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="gap-2"
          >
            <Save className="h-4 w-4" />
            {isSubmitting ? "Submitting..." : "Submit Changes"}
          </Button>
        </div>
      )}
    </div>
   
    
  );

}
