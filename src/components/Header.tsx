import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">Todo List</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;