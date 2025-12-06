export interface School {
  udiseCode: string;
  name: string;
  district: string;
  block: string;
  schoolType: 'Government' | 'Aided' | 'Private';
  category: string;
  dateOfEstablishment: string;
  latitude: number;
  longitude: number;
  principalName: string;
  principalMobile: string;
}

export interface Personnel {
  id: string;
  name: string;
  role: 'Teacher' | 'Staff';
  subject?: string;
  grades?: string;
}

export interface StudentCount {
  grade: number;
  boys: number;
  girls: number;
  transgender: number;
  cwsn: number;
}

export interface SchoolRegistrationData {
  school: Partial<School>;
  personnel: Personnel[];
  students: StudentCount[];
  guardiansFile?: File;
}

