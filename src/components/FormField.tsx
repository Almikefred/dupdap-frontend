import { useId } from 'react';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function FormField({ label, error, id, className, ...props }: FormFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;

  return (
    <div>
      <label htmlFor={inputId} className="label">
        {label}
      </label>
      <input
        id={inputId}
        className={`input ${error ? 'border-red-400 focus:border-red-400' : ''} ${className ?? ''}`.trim()}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error && (
        <p id={errorId} className="text-xs text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
