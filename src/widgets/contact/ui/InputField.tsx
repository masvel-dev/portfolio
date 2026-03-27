type InputFieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "textarea";
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  rows?: number;
};

export function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  rows,
}: InputFieldProps) {
  const isTextarea = type === "textarea";

  const InputTag = isTextarea ? "textarea" : "input";

  return (
    <div className="relative">
      <InputTag
        id={name}
        name={name}
        placeholder=" "
        rows={isTextarea ? rows : undefined}
        type={!isTextarea ? type : undefined}
        value={value}
        onChange={onChange}
        className={`peer w-full block bg-transparent border-b-2 py-2 outline-none transition-colors duration-150
          ${error ? "border-red-500" : "border-gray-300 dark:border-white/30 focus:!border-accent"} 
          ${isTextarea ? "resize-none" : ""}`}
        aria-invalid={error ? "true" : "false"}
      />

      <label
        htmlFor={name}
        className={`absolute left-0 text-gray-400 dark:text-gray-300/80 font-medium pointer-events-none transition-colors duration-150
          transition-all duration-150 peer-focus:-top-2 peer-focus:text-xs
          ${value ? "-top-2 text-xs" : "top-3 text-sm"}`}
      >
        {label}
      </label>

      <span className="absolute -bottom-4 right-0 text-red-500 text-xs min-h-[1rem]">
        {error}
      </span>
    </div>
  );
}