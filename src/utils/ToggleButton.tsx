type ButtonProps = {
  type: "submit" | "reset" | "button",
  title?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.ReactEventHandler<HTMLButtonElement>;
  isActive?: boolean;
  setIsActiveClass?: string;
  ariaLabel: string;
  disabled?: boolean;
  disabledClass?: string;
  addDark?: string;
  addLight?: string;
}

export default function ToggleButton(props:ButtonProps) {
  return (
    <button
      type={props.type}
      className={`
          relative p-2 flex items-center text-base font-varuna
          ${props.isActive ? props.setIsActiveClass : ''}
          ${props.disabled ? props.disabledClass : ''}
          ${props.className}
      `}
      aria-label={props.ariaLabel}
      title={props.ariaLabel}
      role={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.title}
      {props.children}
    </button>
  )
}
