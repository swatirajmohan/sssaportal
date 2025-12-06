import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import type { Personnel } from '../../types/school.types';

interface PersonnelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (personnel: Personnel) => void;
  initialData: Personnel | null;
}

export function PersonnelModal({ isOpen, onClose, onSave, initialData }: PersonnelModalProps) {
  const [name, setName] = useState('');
  const [role, setRole] = useState<'Teacher' | 'Staff'>('Teacher');
  const [subject, setSubject] = useState('');
  const [grades, setGrades] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setRole(initialData.role);
      setSubject(initialData.subject || '');
      setGrades(initialData.grades || '');
    } else {
      setName('');
      setRole('Teacher');
      setSubject('');
      setGrades('');
    }
  }, [initialData, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: initialData?.id || Date.now().toString(),
      name,
      role,
      subject: role === 'Teacher' ? subject : undefined,
      grades: role === 'Teacher' ? grades : undefined,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {initialData ? 'Edit Staff Member' : 'Add Staff Member'}
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />

          <Select
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value as 'Teacher' | 'Staff')}
            options={[
              { value: 'Teacher', label: 'Teacher' },
              { value: 'Staff', label: 'Support Staff' },
            ]}
          />

          {role === 'Teacher' && (
            <>
              <Select
                label="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                options={[
                  { value: '', label: 'Select subject' },
                  { value: 'Mathematics', label: 'Mathematics' },
                  { value: 'Science', label: 'Science' },
                  { value: 'English', label: 'English' },
                  { value: 'Hindi', label: 'Hindi' },
                  { value: 'Social Studies', label: 'Social Studies' },
                ]}
              />

              <Input
                label="Grades Teaching"
                value={grades}
                onChange={(e) => setGrades(e.target.value)}
                placeholder="e.g., 10, 11, 12"
                helperText="Comma-separated grade numbers"
              />
            </>
          )}

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={!name}>
              {initialData ? 'Update' : 'Add'} Staff
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

