import React from "react";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex flex-1">
        <div className="w-1/4 bg-blue-500 flex items-center justify-center">
          <h2 className="text-white">Sider</h2>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="h-1/4 bg-blue-400 flex items-center justify-center">
            <h2 className="text-white">Header</h2>
          </div>
          <div className="flex-1 bg-blue-600 flex items-center justify-center">
            <h2 className="text-white">Content</h2>
          </div>
          <div className="h-1/4 bg-blue-400 flex items-center justify-center">
            <h2 className="text-white">Footer</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;