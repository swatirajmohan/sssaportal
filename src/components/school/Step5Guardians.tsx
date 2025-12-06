import { useState } from 'react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Upload } from 'lucide-react';

interface Step5Props {
  onNext: (file?: File) => void;
  onBack: () => void;
}

export function Step5Guardians({ onNext, onBack }: Step5Props) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSkip = () => {
    onNext(undefined);
  };

  const handleComplete = () => {
    onNext(file || undefined);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
        Parent/Guardian Contacts
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Upload contact list or add them later
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-sm text-gray-600 mb-4">
              We'll use parent contacts for feedback collection later. You can:
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Option 1: Upload contact list
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-500 transition-colors">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept=".csv,.xlsx,.xls"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <Upload className="w-12 h-12 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">
                      {file ? file.name : 'Drag file here or click to upload'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Excel or CSV format
                    </p>
                  </label>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900 font-medium mb-1">
                  Option 2: Add later
                </p>
                <p className="text-sm text-blue-700">
                  You can add parent contacts anytime from your dashboard
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between mt-6">
        <Button type="button" variant="secondary" size="lg" onClick={onBack}>
          ← Back
        </Button>
        <div className="flex gap-3">
          <Button type="button" variant="secondary" size="lg" onClick={handleSkip}>
            Skip for Now
          </Button>
          <Button type="button" size="lg" onClick={handleComplete}>
            Complete Setup →
          </Button>
        </div>
      </div>
    </div>
  );
}

