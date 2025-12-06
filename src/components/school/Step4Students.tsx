import { useState } from 'react';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import type { StudentCount } from '../../types/school.types';
import { Input } from '../ui/Input';
import { cn } from '../../lib/utils';

interface Step4Props {
  initialData: StudentCount[];
  onNext: (data: StudentCount[]) => void;
  onBack: () => void;
}

const GRADES = [6, 7, 8, 9, 10, 11, 12];

export function Step4Students({ initialData, onNext, onBack }: Step4Props) {
  const [selectedGrade, setSelectedGrade] = useState(6);
  const [students, setStudents] = useState<StudentCount[]>(
    initialData.length > 0
      ? initialData
      : GRADES.map((grade) => ({
          grade,
          boys: 0,
          girls: 0,
          transgender: 0,
          cwsn: 0,
        }))
  );

  const currentStudent = students.find((s) => s.grade === selectedGrade)!;

  const updateStudentCount = (field: keyof Omit<StudentCount, 'grade'>, value: number) => {
    setStudents(
      students.map((s) =>
        s.grade === selectedGrade ? { ...s, [field]: value } : s
      )
    );
  };

  const getTotalForGrade = (student: StudentCount) => {
    return student.boys + student.girls + student.transgender;
  };

  const handleSubmit = () => {
    onNext(students);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
        Student Enrollment
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Enter student counts for each grade
      </p>

      <div className="space-y-6">
        <div className="flex gap-2 justify-center flex-wrap">
          {GRADES.map((grade) => (
            <button
              key={grade}
              onClick={() => setSelectedGrade(grade)}
              className={cn(
                'px-6 py-3 rounded-lg font-medium transition-colors',
                selectedGrade === grade
                  ? 'bg-primary-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              )}
            >
              Grade {grade}
            </button>
          ))}
        </div>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-4">
              Grade {selectedGrade} - Total Students: {getTotalForGrade(currentStudent)}
            </h3>

            <div className="space-y-4">
              <Input
                label="Boys"
                type="number"
                min="0"
                value={currentStudent.boys}
                onChange={(e) => updateStudentCount('boys', parseInt(e.target.value) || 0)}
              />

              <Input
                label="Girls"
                type="number"
                min="0"
                value={currentStudent.girls}
                onChange={(e) => updateStudentCount('girls', parseInt(e.target.value) || 0)}
              />

              <Input
                label="Transgender"
                type="number"
                min="0"
                value={currentStudent.transgender}
                onChange={(e) => updateStudentCount('transgender', parseInt(e.target.value) || 0)}
              />

              <Input
                label="CWSN (Children with Special Needs)"
                type="number"
                min="0"
                value={currentStudent.cwsn}
                onChange={(e) => updateStudentCount('cwsn', parseInt(e.target.value) || 0)}
              />
            </div>
          </CardContent>
        </Card>

        <div className="sticky bottom-0 bg-white py-6 border-t border-gray-200 flex justify-between gap-4">
          <Button type="button" variant="secondary" size="lg" onClick={onBack}>
            ← Back
          </Button>
          <Button type="button" size="lg" onClick={handleSubmit}>
            Continue →
          </Button>
        </div>
      </div>
    </div>
  );
}

