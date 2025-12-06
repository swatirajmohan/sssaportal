import { useState } from 'react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import type { Personnel } from '../../types/school.types';
import { UserCircle, Plus, Pencil, X } from 'lucide-react';
import { PersonnelModal } from './PersonnelModal';
import { Input } from '../ui/Input';

interface Step3Props {
  initialData: {
    principalName: string;
    principalMobile: string;
    personnel: Personnel[];
  };
  onNext: (data: { principalName: string; principalMobile: string; personnel: Personnel[] }) => void;
  onBack: () => void;
}

export function Step3Personnel({ initialData, onNext, onBack }: Step3Props) {
  const [principalName, setPrincipalName] = useState(initialData.principalName || '');
  const [principalMobile, setPrincipalMobile] = useState(initialData.principalMobile || '');
  const [personnel, setPersonnel] = useState<Personnel[]>(initialData.personnel || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPersonnel, setEditingPersonnel] = useState<Personnel | null>(null);

  const handleAddPersonnel = (newPersonnel: Personnel) => {
    if (editingPersonnel) {
      setPersonnel(personnel.map(p => p.id === editingPersonnel.id ? newPersonnel : p));
    } else {
      setPersonnel([...personnel, { ...newPersonnel, id: Date.now().toString() }]);
    }
    setEditingPersonnel(null);
  };

  const handleEditPersonnel = (person: Personnel) => {
    setEditingPersonnel(person);
    setIsModalOpen(true);
  };

  const handleDeletePersonnel = (id: string) => {
    setPersonnel(personnel.filter(p => p.id !== id));
  };

  const handleSubmit = () => {
    onNext({ principalName, principalMobile, personnel });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
        Add School Staff
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Add contact person and teaching staff details
      </p>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Contact Person</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              label="Principal/In-charge Name"
              value={principalName}
              onChange={(e) => setPrincipalName(e.target.value)}
              placeholder="Dr. Ramesh Kumar"
            />
            <Input
              label="Mobile Number"
              value={principalMobile}
              onChange={(e) => setPrincipalMobile(e.target.value)}
              placeholder="+91 9876543210"
              maxLength={13}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Teachers & Staff</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {personnel.map((person) => (
              <div
                key={person.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <UserCircle className="w-10 h-10 text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-900">{person.name}</div>
                    <div className="text-sm text-gray-600">
                      {person.subject && `Subject: ${person.subject}`}
                      {person.grades && ` | Grade: ${person.grades}`}
                      {!person.subject && person.role}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditPersonnel(person)}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <Pencil className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => handleDeletePersonnel(person.id)}
                    className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>
            ))}

            <Button
              type="button"
              variant="secondary"
              className="w-full"
              onClick={() => {
                setEditingPersonnel(null);
                setIsModalOpen(true);
              }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Teacher or Staff
            </Button>
          </CardContent>
        </Card>

      </div>
      
      <div className="sticky bottom-0 left-0 right-0 bg-white py-6 border-t border-gray-200 mt-6">
        <div className="max-w-2xl mx-auto flex justify-between gap-4">
          <Button type="button" variant="secondary" size="lg" onClick={onBack}>
            ← Back
          </Button>
          <Button
            type="button"
            size="lg"
            onClick={handleSubmit}
            disabled={!principalName || !principalMobile}
            className="!bg-blue-600 !text-white hover:!bg-blue-700 disabled:!bg-gray-400"
          >
            Continue →
          </Button>
        </div>
      </div>

      <PersonnelModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingPersonnel(null);
        }}
        onSave={handleAddPersonnel}
        initialData={editingPersonnel}
      />
    </div>
  );
}

