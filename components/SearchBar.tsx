import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function SearchBar() {
    return (
        <div className="flex items-center space-x-2  w-full">
            {/* Category Select - 30% width */}
            <div className="bg-white" style={{ width: "30%" }}>
                <Select>
                    <SelectTrigger className="border border-gray-400 rounded-none text-black px-3 py-2 w-full">
                        <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="wedding-photography">Wedding Photography</SelectItem>
                        <SelectItem value="corporate-event-photography">Corporate Event Photography</SelectItem>
                        <SelectItem value="cultural-religious-event-photography">Cultural & Religious Event Photography</SelectItem>
                        <SelectItem value="trade-shows-exhibitions">Trade Shows & Exhibitions</SelectItem>
                        <SelectItem value="political-government-event-photography">Political & Government Event Photography</SelectItem>
                        <SelectItem value="school-college-event-photography">School & College Event Photography</SelectItem>

                    </SelectContent>
                </Select>
            </div>

            {/* Search Input - 50% width */}
            <div className="bg-white" style={{ width: "50%" }}>
                <Input
                    type="text"
                    placeholder="Search location or keyword"
                    className="border rounded-none border-gray-400 text-black px-3 py-2 w-full"
                />
            </div>

            {/* Search Button - 20% width */}
            <div style={{ width: "20%" }}>
                <Button className="border text-black px-4 py-2 w-full" variant="default">
                    Search
                </Button>
            </div>
        </div>
    );
}
