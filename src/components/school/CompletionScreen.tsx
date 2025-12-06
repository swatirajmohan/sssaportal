import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';

interface CompletionScreenProps {
  onGoToDashboard: () => void;
}

export function CompletionScreen({ onGoToDashboard }: CompletionScreenProps) {
  return (
    <div className="max-w-md mx-auto text-center py-12">
      <div className="mb-6 flex justify-center">
        <CheckCircle className="w-24 h-24 text-green-500" />
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        Registration Complete!
      </h1>

      <p className="text-gray-600 mb-8">
        Your school is now registered. You can start the self-assessment anytime from your dashboard.
      </p>

      <Button size="lg" onClick={onGoToDashboard} className="w-full">
        Go to Dashboard
      </Button>
    </div>
  );
}

