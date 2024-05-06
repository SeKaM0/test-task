import { DarkThemeToggle } from "flowbite-react";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full dark:bg-gray-900 min-h-screen">
      <div className="w-full flex justify-end pr-2 pt-2">
        <DarkThemeToggle />
      </div>
      {children}
    </div>
  );
};

export default BaseLayout;
