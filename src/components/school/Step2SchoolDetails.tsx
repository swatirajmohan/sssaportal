import { useForm } from 'react-hook-form';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { School } from '../../types/school.types';
import { MapPin } from 'lucide-react';

interface Step2Props {
  initialData: Partial<School>;
  onNext: (data: Partial<School>) => void;
  onBack: () => void;
}

export function Step2SchoolDetails({ initialData, onNext, onBack }: Step2Props) {
  const { register, handleSubmit } = useForm<Partial<School>>({
    defaultValues: initialData,
  });

  const onSubmit = (data: Partial<School>) => {
    onNext(data);
  };

  const districts = [
    { value: 'lucknow', label: 'Lucknow' },
    { value: 'kanpur', label: 'Kanpur' },
    { value: 'agra', label: 'Agra' },
    { value: 'varanasi', label: 'Varanasi' },
  ];

  const blocks = [
    { value: 'malihabad', label: 'Malihabad' },
    { value: 'mohanlalganj', label: 'Mohanlalganj' },
    { value: 'sarojininagar', label: 'Sarojini Nagar' },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
        Verify School Information
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Review and update your school details
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              label="School Name"
              {...register('name')}
              placeholder="Enter school name"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="District"
                {...register('district')}
                options={districts}
              />

              <Select
                label="Block"
                {...register('block')}
                options={blocks}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                School Type
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="Government"
                    {...register('schoolType')}
                    className="w-5 h-5 text-primary-600"
                  />
                  <span className="text-base">Government</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="Aided"
                    {...register('schoolType')}
                    className="w-5 h-5 text-primary-600"
                  />
                  <span className="text-base">Aided</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="Private"
                    {...register('schoolType')}
                    className="w-5 h-5 text-primary-600"
                  />
                  <span className="text-base">Private</span>
                </label>
              </div>
            </div>

            <Input
              label="Date of Establishment"
              type="date"
              {...register('dateOfEstablishment')}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location (Geotag)
              </label>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-600" />
                <div className="text-sm text-gray-700">
                  <div>Latitude: {initialData.latitude || '26.8467'}</div>
                  <div>Longitude: {initialData.longitude || '80.9462'}</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Map view (Read-only)</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button type="button" variant="secondary" size="lg" onClick={onBack}>
            ← Back
          </Button>
          <Button type="submit" size="lg">
            Continue →
          </Button>
        </div>
      </form>
    </div>
  );
}

