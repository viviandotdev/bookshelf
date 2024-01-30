import { Button } from "@/components/ui/button";
import * as React from "react";
import { useController } from "react-hook-form";
import ShelfInput from "./shelf-input";
import { Icons } from "@/components/icons";

export const ShelfList = ({ focus, options, control }: any) => {
    const { field: list } = useController({
        control,
        name: "shelves",
    });

    const { field: input } = useController({
        control,
        name: "shelf",
    });

    const [shelfName, setShelfName] = React.useState(input.value || []);
    const [selectedShelves, setSelectedShelves] = React.useState(list.value || []);
    const [shelfList, setShelfList] = React.useState(options);

    const onAddShelf = (shelf: string) => {
        if (!list.value.includes(shelf)) {
            list.onChange([...selectedShelves, shelf]);
            setSelectedShelves([...list.value, shelf]);
        }
        // Clear and focus the input
        setShelfName("");
        input.onChange("");
        focus("shelf");
        setShelfList(options);
    };

    const onDeleteShelf = (shelf: string) => {
        const remainingShelves = selectedShelves.filter((s: string) => s !== shelf);
        list.onChange([...remainingShelves]);
        setSelectedShelves([...remainingShelves]);
    };

    return (
        <div className="mb-2">
            <div>
                <ShelfInput
                    onAddShelf={onAddShelf}
                    deleteShelf={onDeleteShelf}
                    shelfList={options}
                    setShelfList={setShelfList}
                    setShelfName={setShelfName}
                    shelfName={shelfName}
                    tags={selectedShelves}
                    input={input}
                />
            </div>
            <div className="h-96 overflow-y-auto">
                {shelfList.map((option: any, index: any) => {
                    if (!selectedShelves.includes(option.name)) {
                        return (
                            <div key={option.name}>
                                <Button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onAddShelf(option.name);
                                    }}
                                    className="ml-0 pl-2 text-beige flex hover:bg-beige-100 bg-white rounded-none w-full justify-start"
                                    key={index}
                                >
                                    <Icons.shelf className="h-5 w-5 mr-4" />
                                    {option.name}
                                </Button>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};
