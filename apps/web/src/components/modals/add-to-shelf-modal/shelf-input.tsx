import { Input } from '@/components/ui/input';
import React from 'react';
import { useController } from 'react-hook-form';
interface ShelfInputProps {
    control: any,
    deleteShelf: (shelf: string) => void;
    onAddShelf: (shelf: string) => void;
    tags: string[];

}
export const ShelfInput: React.FC<ShelfInputProps> = ({
    deleteShelf,
    tags,
    control,
    onAddShelf
}) => {

    const { field: input } = useController({
        control,
        name: "shelf"
    });
    const handleKeyPress = (event: any) => {
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
                        {...input}
                    />

                </li>
            </ul>
        </div>
    );
};

export default ShelfInput;
