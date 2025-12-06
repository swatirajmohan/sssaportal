import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm transition-colors',
                step < currentStep && 'bg-green-500 text-white',
                step === currentStep && 'bg-primary-600 text-white',
                step > currentStep && 'bg-gray-200 text-gray-500'
              )}
            >
              {step < currentStep ? <Check className="w-5 h-5" /> : step}
            </div>
            {step < totalSteps && (
              <div
                className={cn(
                  'w-8 h-1 transition-colors',
                  step < currentStep ? 'bg-green-500' : 'bg-gray-200'
                )}
              />
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-gray-600 mt-3">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
}

