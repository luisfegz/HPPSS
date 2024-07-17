import React, { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div 
        className="
            grid-cols-2 
            md:grid-cols-[280px_minmax(200px,_1fr)] 
            lg:grid-cols-[320px_minmax(200px,_1fr)] 
            gap-[2px] 
            md:gap-3
            lg:gap-8
            grid">
      {children}
    </div>
  );
};

export default Wrapper;