interface NavbarProps {
  openDrawer: boolean;
  setOpenDrawer: (openDrawer: boolean) => void;
}

const Index = (props: NavbarProps) => {
  return (
    <div className="bg-blue-300 p-4 fixed top-0 w-full">
      <div className="flex flew-row">
        <div className="me-2">
          <svg
            onClick={() => props.setOpenDrawer(!props.openDrawer)}
            className="h-8 w-8 text-white cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <line x1="21" y1="10" x2="3" y2="10" />{" "}
            <line x1="21" y1="6" x2="3" y2="6" />{" "}
            <line x1="21" y1="14" x2="3" y2="14" />{" "}
            <line x1="21" y1="18" x2="3" y2="18" />
          </svg>
        </div>
        <p className="text-white text-xl mt-0.5">NewsApp</p>
      </div>
    </div>
  );
};

export default Index;
