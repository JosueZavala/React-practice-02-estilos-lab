type Props = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function TWButton({
  children,
  variant = "primary",
  ...rest
}: Props) {
  const base =
    "px-4 py-2 rounded-xl font-semibold transition active:scale-[.98]";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };
  return (
    <button className={`${base} ${variants[variant]}`} {...rest}>
      {children}
    </button>
  );
}
