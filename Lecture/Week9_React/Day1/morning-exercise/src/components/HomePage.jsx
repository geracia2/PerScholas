import Header from "./Header";
import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";

export default function HomePage() {
  return (
    <div id="home-page">
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}
