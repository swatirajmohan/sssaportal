import { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';

interface Step1Props {
  onNext: (udiseCode: string) => void;
}

export function Step1UdiseCode({ onNext }: Step1Props) {
  const [udiseCode, setUdiseCode] = useState('');

  const isValid = udiseCode.length === 12 && /^\d+$/.test(udiseCode);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onNext(udiseCode);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
        Register Your School
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Enter your 12-digit UDISE code to begin
      </p>

      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Enter UDISE Code"
              placeholder="123456789012"
              value={udiseCode}
              onChange={(e) => setUdiseCode(e.target.value.slice(0, 12))}
              helperText="Example: 12-digit code"
              maxLength={12}
              className="text-center text-lg tracking-wider"
            />

            <Button
              type="submit"
              size="lg"
              disabled={!isValid}
              className="w-full"
            >
              Continue →
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

