import { useState } from "react";
import { Value } from "./@types/useInput";

const useInput = (initialValue: string, validation: Function|null = null) => {
    const [value, setValue] = useState(initialValue);

    const input: Value = {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: (
                event:
                    | React.ChangeEvent<HTMLInputElement>
                    | React.ChangeEvent<HTMLTextAreaElement>
            ) => {
                if (validation) validation(event?.target?.name, event?.target?.value);
                setValue(event?.target?.value);
            },
        },
    };

    return input;
};

export default useInput;
