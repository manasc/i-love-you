import { useId } from "react";
import { PersonContainer } from "./PersonContainer";

type Props = {
    className?: string;
    onInputChange?: React.ChangeEventHandler<HTMLSelectElement>;
    onButtonClick?: () => void;
    isEditting?: boolean;
    value?: string;
}

export const PersonButton: React.FC<Props> = (props) => {
    const uniqueId = useId();

    const sharedClasses = [
        "rounded-md h-16 aspect-square transition-transform cursor-pointer",
        "inline-flex items-center justify-center active:scale-95",
        "text-4xl text-center appearance-none"
    ];

    if (props.isEditting) {
        return (
            <label htmlFor={uniqueId} className={[
                "inline-flex items-center justify-center",
                props.className ?? "",
            ].join(" ")}>
                <span className="sr-only">Select a person</span>
                <select
                    id={uniqueId}
                    onChange={props.onInputChange}
                    className={[
                        ...sharedClasses,
                        "bg-white border border-slate-400",
                        "aspect-square"
                    ].join(" ")}
                    value={props.value}
                >
                    <option value="👨🏽">👨🏽</option>
                    <option value="👩🏽">👩🏽</option>
                    <option value="👦🏽">👦🏽</option>
                    <option value="👧🏽">👧🏽</option>
                    <option value="👶🏽">👶🏽</option>
                    <option value="👵🏽">👵🏽</option>
                    <option value="👴🏽">👴🏽</option>
                    <option value="👨‍🦱">👨‍🦱</option>
                </select>
            </label>
        );
    }


    return (
        <button
            type="button"
            onClick={props.onButtonClick}
            className={[
                ...sharedClasses,
                props.className ?? "",
                "hover:bg-slate-800/10 focus-visible:bg-slate-800/10"
            ].join(" ")}
        >

            <PersonContainer>
                {props.value}
            </PersonContainer>
        </button>
    );
};
