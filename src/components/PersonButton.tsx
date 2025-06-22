import { useId } from "react";

export const PersonButton: React.FC<React.ComponentPropsWithRef<'input'>> = (props) => {
    const uniqueId = useId();

    // return (
    //     <label htmlFor={uniqueId}>
    //         <input
    //             {...props}
    //             id={uniqueId}
    //             list={`${uniqueId}-datalist`}
    //             className={[
    //                 "inline-flex items-center justify-center",
    //                 props.className ?? "",
    //                 props.size ?? "text-4xl"
    //             ].join(" ")}
    //         />
    //         <datalist id={`${uniqueId}-datalist`}>
    //             <option value="👨🏽">👨🏽</option>
    //             <option value="👩🏽">👩🏽</option>
    //             <option value="❤️‍🔥">❤️‍🔥</option>
    //             <option value="💖">💖</option>
    //             <option value="💔">💔</option>
    //             <option value="💞">💞</option>
    //             <option value="💕">💕</option>
    //             <option value="💘">💘</option>
    //             <option value="💝">💝</option>
    //         </datalist>
    //     </label>
    // );

    return (
        <button
            {...props}
            className={[
                "hover:bg-slate-800/10 focus-visible:bg-slate-800/10",
                "rounded-md h-16 aspect-square transition-transform cursor-pointer",
                "inline-flex items-center justify-center active:scale-95",
                props.className ?? "",
            ].join(" ")}
        >
            {props.children}
        </button>
    );
};
