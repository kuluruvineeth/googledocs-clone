import DocumentSearchBar from "../../atoms/document-searchbar/document-searchbar";
import Logo from "../../atoms/logo/logo";
import UserDropDown from "../../atoms/user-dropdown/user-dropdown";

const DocumentCreateHeader = () => {
  return (
    <div className="w-full px-3 py-1 flex justify-between items-center">
      <Logo />
      <DocumentSearchBar />
      <UserDropDown />
    </div>
  );
};

export default DocumentCreateHeader;
