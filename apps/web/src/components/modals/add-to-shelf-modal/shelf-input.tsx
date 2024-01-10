import { Input } from '@/components/ui/input';
import React from 'react';
import { useController } from 'react-hook-form';
interface ShelfInputProps {
    control: any,
    deleteShelf: (shelf: string) => void;
    onAddShelf: (shelf: string) => void;
    tags: string[];
    shelfList?: any;
    setShelfList?: any;

}
export const ShelfInput: React.FC<ShelfInputProps> = ({
    deleteShelf,
    tags,
    control,
    shelfList,
    setShelfList,
    onAddShelf
}) => {

    const { field: input } = useController({
        control,
        name: "shelf"
    });

    const [value, setValue] = React.useState(input.value || []);
    const handleKeyPress = (event: any) => {
        // filterShelfList(event.target.value);
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevents the default behavior on Enter keypress
            // add input value to shelves
            onAddShelf(event.target.value)
            input.onChange("")
        }

        if (event.key === 'Backspace' && event.target.value === "") {
            event.preventDefault(); // Prevents the default behavior on Enter keypress
            deleteShelf(tags[tags.length - 1])

        }

    };
    // clicking on a value should reset the input
    React.useEffect(() => {
        setValue(String(input.value));
    }, [input.value, setValue]);


    const filterShelfList = (searchValue: string) => {
        console.log(shelfList)
        if (shelfList && setShelfList) {
            const filteredList = shelfList.filter((shelf: any) =>
                shelf.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            console.log(filteredList)
            setShelfList(filteredList);
        }
    };

    return (
        <div className="mb-4 text-sm">
            <ul className="flex flex-wrap p-1 mt-2 border border-gray-300 rounded">
                {tags.map((tag, index) => (
                    <li
                        key={index}
                        className="bg-secondary text-primary rounded px-2 py-1 m-1 flex items-center"
                    >
                        {tag}

                        <span
                            className="ml-2 focus:outline-none cursor-pointer"
                            onClick={e => deleteShelf(tag)}
                        >
                            &#x2716;{" "}
                        </span>


                    </li>
                ))}
                <li className="flex-1">
                    <Input
                        className="w-full px-2 py-1 focus:outline-none bg-white border-none"
                        onKeyDown={handleKeyPress}
                        disabled={false}
                        ref={input.ref}
                        value={value}
                        onChange={(e) => {
                            input.onChange(e.target.value); // send data to hook form
                            setValue(e.target.value);
                            filterShelfList(e.target.value);
                        }}
                        onBlur={input.onBlur}

                    />

                </li>
            </ul>
        </div>
    );
};

export default ShelfInput;
