import { Button } from "@/components/ui/button";
import * as React from "react";
import { useController } from "react-hook-form";
import ShelfInput from "./shelf-input";
import { Icons } from "@/components/icons";

export const ShelfList = ({ options, control, name }: any) => {
    const { field } = useController({
        control,
        name
    });

    const [value, setValue] = React.useState(field.value || []);

    const onAddShelf = (shelf: string) => {
        if (!field.value.includes(shelf)) {
            field.onChange([...value, shelf]);
            setValue([...field.value, shelf]);
        }
    };


    const onDeleteShelf = (shelf: string) => {
        let remainingTags = value.filter((s: string) => {
            return s !== shelf;
        });

        field.onChange([...remainingTags]);
        setValue([...remainingTags]);
    };



    return (
        <div className="mb-2" >
            <div>
                <ShelfInput
                    onAddShelf={onAddShelf}
                    deleteShelf={onDeleteShelf}
                    tags={value}
                    control={control}
                />
            </div>
            <div className="h-96 overflow-y-auto">{
                options.map((option: any, index: any) => {
                    if (!field.value.includes(option.name)) {
                        return <div key={option.name}>
                            <Button
                                onClick={() => {
                                    onAddShelf(option.name)
                                }}
                                className="ml-0 pl-2 text-primary flex hover:bg-secondary bg-white rounded-none w-full justify-start"
                                key={index}
                            >
                                <Icons.shelf className="h-5 w-5 mr-4" />
                                {option.name}
                            </Button>
                        </div>
                    }
                })
            }</div>
        </div >
    );
};
