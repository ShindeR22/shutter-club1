"use client"
import * as React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Search, X, } from "lucide-react";
import { useRouter } from "next/navigation";

export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("");
    const router = useRouter();
    // const [showFilters, setShowFilters] = useState(false);

    // Clear search input
    const clearSearch = () => {
        setSearchTerm("");
    };
    const handleSearchClick = () => {
        // You can add any additional logic here if needed before navigation
        router.push("/photographerscard");
    };

    return (
        <div className="w-full space-y-4">
            {/* Main search row */}
            <div className="flex items-center space-x-2 w-full">
                {/* Category Select - 30% width */}
                <div className="w-[30%] ">
                    <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger className="border border-gray-300 rounded-l-lg text-gray-700 px-4 py-2.5 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm">
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

                {/* Search Input - 50% width with clear button */}
                <div className="w-[50%] relative">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search tasks, projects, or keywords"
                            className="border border-gray-300 pl-10 pr-10 py-2.5 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white shadow-sm"
                        />
                        {searchTerm && (
                            <button
                                onClick={clearSearch}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Search Button - 20% width */}
                <div className="w-[20%] flex space-x-2">

                    <Button
                        onClick={handleSearchClick}
                        className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-blue-500/30 transition duration-300"
                    >
                        Search
                    </Button>

                    {/* <Button
                        variant="outline"
                        className="px-3 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-100 bg-white shadow-sm"
                        onClick={() => setShowFilters(!showFilters)}
                        title="Advanced Filters"
                    >
                        <Sliders className="h-5 w-5 text-gray-700" />
                    </Button> */}
                </div>
            </div>

            {/* Advanced filters section */}
            {/* {showFilters && (
                <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm animate-in fade-in-20 slide-in-from-top-5 duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Status</label>
                            <Select defaultValue="all">
                                <SelectTrigger className="w-full border border-gray-300 rounded-md">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="not-started">Not Started</SelectItem>
                                    <SelectItem value="in-progress">In Progress</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                    <SelectItem value="overdue">Overdue</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Priority</label>
                            <Select defaultValue="all">
                                <SelectTrigger className="w-full border border-gray-300 rounded-md">
                                    <SelectValue placeholder="Priority" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="high">High</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="low">Low</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Due Date</label>
                            <Select defaultValue="all">
                                <SelectTrigger className="w-full border border-gray-300 rounded-md">
                                    <SelectValue placeholder="Due Date" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="today">Today</SelectItem>
                                    <SelectItem value="this-week">This Week</SelectItem>
                                    <SelectItem value="next-week">Next Week</SelectItem>
                                    <SelectItem value="this-month">This Month</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer flex items-center gap-1 px-3 py-1">
                                High Priority <X className="h-3 w-3" />
                            </Badge>
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer flex items-center gap-1 px-3 py-1">
                                This Week <X className="h-3 w-3" />
                            </Badge>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="text-gray-700">Clear All</Button>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">Apply Filters</Button>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    );
}