import type { ReactNode } from 'react';

type OptionItem<T extends string> = { value: T; label: string };

type OptionGroupProps<T extends string> = {
  title: string;
  step?: string;
  items: OptionItem<T>[];
  value?: T;
  onChange: (value: T) => void;
  compact?: boolean;
  children?: ReactNode;
};

export function OptionGroup<T extends string>({
  title,
  step,
  items,
  value,
  onChange,
  compact,
  children,
}: OptionGroupProps<T>) {
  return (
    <div className="r-sim-card">
      <h3 className="r-sim-step-title">
        {step ? <span className="r-sim-step-no">{step}</span> : null}
        {title}
      </h3>
      <div className={`r-sim-option-grid ${compact ? 'r-sim-option-grid--compact' : ''}`}>
        {items.map((item) => (
          <button
            key={item.value}
            type="button"
            className={`r-sim-option-btn ${value === item.value ? 'is-active' : ''}`}
            onClick={() => onChange(item.value)}
            aria-pressed={value === item.value}
          >
            {item.label}
          </button>
        ))}
      </div>
      {children}
    </div>
  );
}
