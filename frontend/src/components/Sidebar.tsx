"use client";

import { SidebarData } from "~/app/page";

export default function Sidebar({ datas }: { datas: SidebarData[] }) {
  return (
    <div className="absolute min-h-screen px-4 py-8">
      {/* Timer */}
      <div className="space-y-8">
        {datas.map((data: SidebarData) => (
          <div
            className="flex cursor-pointer flex-col items-center text-white"
            onClick={() => data.callback((prev) => !prev)}
          >
            {data.icon}
            <span
              className={`${data.value ? "text-purple-300" : "text-white"}`}
            >
              {data.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
