import React from 'react';

interface IconListProps {
  icons: JSX.Element[];
}

const IconList: React.FC<IconListProps> = ({ icons }) => {
  return (
    <div className="flex flex-row space-x-6">
      {icons.map((icon, index) => (
        <div key={index} className="rounded bg-light p-2.5 text-xl text-white">
          {icon}
        </div>
      ))}
    </div>
  );
};

export default IconList;



