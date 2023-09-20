"use client";
import React, { useState } from "react";
import { Icons } from "./icons";
import { Rating, Star } from "@smastrom/react-rating";

interface ActionItemProps {
  icon: React.ReactNode;
  label: string;
}

const myStyles = {
  itemShapes: Star,
  activeFillColor: "#F4CC49",
  inactiveFillColor: "#c6cdd6",
};

function ActionItem({ icon, label }: ActionItemProps) {
  return (
    <div className="grid place-items-center cursor-pointer">
      {icon}
      <button className="p-1">{label}</button>
    </div>
  );
}

function ActionGroup() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-secondary rounded-lg p-3">
      <ActionItem icon={<Icons.log className="h-8 w-8 " />} label="Log" />
      <ActionItem icon={<Icons.library className="h-8 w-8" />} label="Shelve" />
      <ActionItem
        icon={<Icons.bookPlus className="h-8 w-8" />}
        label="To-Read"
      />
    </div>
  );
}

interface BookActionsPanelProps {}

export default function BookActionsPanel({}: BookActionsPanelProps) {
  const [rating, setRating] = useState(0); // Initial value
  return (
    <>
      <div className="rounded-lg flex flex-col gap-1 items-center text-sm text-muted-foreground font-light">
        <div className="grid items-center grid-cols-3 w-[fill-available]">
          <div className="col-span-3">
            <ActionGroup />
          </div>
        </div>
        <div className="flex flex-col justify-center bg-secondary items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer">
          <span>Rating</span>
          <Rating
            halfFillMode="box"
            itemStyles={myStyles}
            style={{ maxWidth: 200 }}
            value={rating}
            onChange={setRating}
          />
        </div>
        <div className="bg-secondary items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer">
          Review
        </div>
        <div className="bg-secondary items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer">
          Add to lists
        </div>
      </div>
    </>
  );
}
