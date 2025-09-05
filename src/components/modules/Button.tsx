import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  ...rest
}: Props) {
  return (
    <button className={`${styles.btn} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  );
}
