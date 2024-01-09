import { Button } from "@/components/ui/button";
import * as React from "react";
import { useController, useForm } from "react-hook-form";

export const Checkboxes = ({ options, control, name }: any) => {
    const { field: boxes } = useController({
        control,
        name
    });

    // const filter selected values
    const [value, setValue] = React.useState(boxes.value || []);
    // const [shelfOptions, setShelfOptions] = React.useState(options || []);
    React.useEffect(() => {
        // setValue(field.value || []);
        console.log(boxes.value)
    }
        , [boxes.value]);


    const onAddShelf = (shelf: string) => {
        boxes.onChange([...value, shelf]);
        setValue([...boxes.value, shelf]);
    };


    const onDeleteShelf = (shelf: string) => {

        let remainingTags = value.filter((s: string) => {
            return s !== shelf;
        });

        boxes.onChange([...remainingTags]);
        setValue([...remainingTags]);
    };

    return (
        <div >

            <div className="flex gap-2 ">
                {
                    value.map((item: any) =>
                        <Button className="p-2 gap-2 text-[12px] leading-none " variant={"tag"}>
                            {item}
                            <span
                                onClick={e => onDeleteShelf(item)}
                            >
                                &#x2716;{" "}
                            </span>

                        </Button>
                    )
                }
            </div>
            {
                options.map((option: any, index: any) => {
                    if (!boxes.value.includes(option.name)) {
                        return <div key={option.name}>
                            <Button
                                onClick={(e) => {
                                    const selected = boxes.value.includes(option.name)
                                    onAddShelf(option.name)
                                    // update local state
                                }}
                                className="text-primary flex hover:bg-slate-50 bg-secondary rounded-none w-full justify-start"
                                key={index}
                            >
                                {option.name}
                            </Button>


                            <span>

                            </span>
                        </div>

                    }


                })
            }
        </div >
    );
};
