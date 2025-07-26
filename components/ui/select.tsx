"use client";

import * as React from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectProps {
    value?: string;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
    children: React.ReactNode;
}

interface SelectTriggerProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

interface SelectContentProps {
    children: React.ReactNode;
}

interface SelectItemProps {
    value: string;
    children: React.ReactNode;
    onSelect?: (value: string) => void;
}

interface SelectValueProps {
    placeholder?: string;
}

const SelectContext = React.createContext<{
    value?: string;
    onValueChange?: (value: string) => void;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    disabled?: boolean;
}>({
    isOpen: false,
    setIsOpen: () => {},
});

const Select: React.FC<SelectProps> = ({
    value,
    onValueChange,
    disabled,
    children,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <SelectContext.Provider
            value={{ value, onValueChange, isOpen, setIsOpen, disabled }}>
            <div className="relative">{children}</div>
        </SelectContext.Provider>
    );
};

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
    ({ className, children, ...props }, ref) => {
        const { isOpen, setIsOpen, disabled } = React.useContext(SelectContext);

        return (
            <button
                ref={ref}
                type="button"
                className={cn(
                    "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
                {...props}>
                {children}
                <ChevronDown className="h-4 w-4 opacity-50" />
            </button>
        );
    }
);
SelectTrigger.displayName = "SelectTrigger";

const SelectValue: React.FC<SelectValueProps> = ({ placeholder }) => {
    const { value } = React.useContext(SelectContext);
    return <span>{value || placeholder}</span>;
};

const SelectContent: React.FC<SelectContentProps> = ({ children }) => {
    const { isOpen, setIsOpen } = React.useContext(SelectContext);
    const contentRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                contentRef.current &&
                !contentRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, setIsOpen]);

    if (!isOpen) return null;

    return (
        <div
            ref={contentRef}
            className="absolute top-full z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white py-1 text-base shadow-lg focus:outline-none">
            {children}
        </div>
    );
};

const SelectItem: React.FC<SelectItemProps> = ({
    value,
    children,
    onSelect,
}) => {
    const {
        value: selectedValue,
        onValueChange,
        setIsOpen,
    } = React.useContext(SelectContext);
    const isSelected = selectedValue === value;

    const handleClick = () => {
        onValueChange?.(value);
        onSelect?.(value);
        setIsOpen(false);
    };

    return (
        <div
            className={cn(
                "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100",
                isSelected && "bg-gray-100"
            )}
            onClick={handleClick}>
            <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                {isSelected && <Check className="h-4 w-4" />}
            </span>
            {children}
        </div>
    );
};

export { Select, SelectTrigger, SelectContent, SelectItem, SelectValue };
