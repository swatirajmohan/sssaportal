import { useState } from 'react';
import { ProgressIndicator } from '../components/school/ProgressIndicator';
import { Step1UdiseCode } from '../components/school/Step1UdiseCode';
import { Step2SchoolDetails } from '../components/school/Step2SchoolDetails';
import { Step3Personnel } from '../components/school/Step3Personnel';
import { Step4Students } from '../components/school/Step4Students';
import { Step5Guardians } from '../components/school/Step5Guardians';
import { CompletionScreen } from '../components/school/CompletionScreen';
import type { SchoolRegistrationData, School, Personnel, StudentCount } from '../types/school.types';

export function SchoolOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [registrationData, setRegistrationData] = useState<SchoolRegistrationData>({
    school: {},
    personnel: [],
    students: [],
  });

  // Mock UDISE data lookup
  const getMockSchoolData = (udiseCode: string): Partial<School> => {
    return {
      udiseCode,
      name: 'Rajkiya Balika Inter College',
      district: 'lucknow',
      block: 'malihabad',
      schoolType: 'Government',
      category: 'Secondary',
      dateOfEstablishment: '1985-08-15',
      latitude: 26.8467,
      longitude: 80.9462,
      principalName: '',
      principalMobile: '',
    };
  };

  const handleStep1Next = (udiseCode: string) => {
    const schoolData = getMockSchoolData(udiseCode);
    setRegistrationData({ ...registrationData, school: schoolData });
    setCurrentStep(2);
  };

  const handleStep2Next = (schoolData: Partial<School>) => {
    setRegistrationData({ ...registrationData, school: schoolData });
    setCurrentStep(3);
  };

  const handleStep3Next = (data: { principalName: string; principalMobile: string; personnel: Personnel[] }) => {
    setRegistrationData({
      ...registrationData,
      school: {
        ...registrationData.school,
        principalName: data.principalName,
        principalMobile: data.principalMobile,
      },
      personnel: data.personnel,
    });
    setCurrentStep(4);
  };

  const handleStep4Next = (students: StudentCount[]) => {
    setRegistrationData({ ...registrationData, students });
    setCurrentStep(5);
  };

  const handleStep5Next = (file?: File) => {
    setRegistrationData({ ...registrationData, guardiansFile: file });
    setCurrentStep(6);
  };

  const handleGoToDashboard = () => {
    // In a real app, this would navigate to the dashboard
    console.log('Registration completed:', registrationData);
    alert('Registration completed! Mock data logged to console.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {currentStep < 6 && <ProgressIndicator currentStep={currentStep} totalSteps={5} />}

        {currentStep === 1 && <Step1UdiseCode onNext={handleStep1Next} />}

        {currentStep === 2 && (
          <Step2SchoolDetails
            initialData={registrationData.school}
            onNext={handleStep2Next}
            onBack={() => setCurrentStep(1)}
          />
        )}

        {currentStep === 3 && (
          <Step3Personnel
            initialData={{
              principalName: registrationData.school.principalName || '',
              principalMobile: registrationData.school.principalMobile || '',
              personnel: registrationData.personnel,
            }}
            onNext={handleStep3Next}
            onBack={() => setCurrentStep(2)}
          />
        )}

        {currentStep === 4 && (
          <Step4Students
            initialData={registrationData.students}
            onNext={handleStep4Next}
            onBack={() => setCurrentStep(3)}
          />
        )}

        {currentStep === 5 && (
          <Step5Guardians
            onNext={handleStep5Next}
            onBack={() => setCurrentStep(4)}
          />
        )}

        {currentStep === 6 && (
          <CompletionScreen onGoToDashboard={handleGoToDashboard} />
        )}
      </div>
    </div>
  );
}

