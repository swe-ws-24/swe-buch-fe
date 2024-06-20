import Sidebar from "@/components/searchPage/Sidebar";
import Anlegebutton from '../components/searchPage/Anlegebutton';
import Searchbar from "@/components/searchPage/Searchbar";
import BookList from "@/components/searchPage/Booklist"; // Import the Booklist component

export default function Home() {
  return (
    <main>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 p-0">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-10 p-3">
                            <Searchbar />
                        </div>
                        <div className="col-2">
                            <Anlegebutton />
                        </div>
                        <div className="col-12">
                            <BookList />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
