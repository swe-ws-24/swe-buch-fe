import Sidebar from "@/components/searchPage/Sidebar";
import Anlegebutton from '../components/search/Anlegebutton';
import Searchbar from "@/components/searchPage/Searchbar";
import BookList from "@/components/searchPage/Booklist"; // Import the Booklist component
import LoginForm from "@/components/loginPage/LoginForm";

export default function Home() {
  return (
    <main>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div style={{ border: "1px solid black", padding: "20px" }}>
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
