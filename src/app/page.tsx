import Sidebar from "@/components/searchPage/Sidebar"
import Searchbar from "@/components/searchPage/Searchbar"
import Anlegebutton from "@/components/searchPage/Anlegebutton"
import Booklist from "@/components/searchPage/Booklist"

export default function Home() {
  return (
    <main>
      <div className="container-fluid vh-100">
        <div className="row">
          <div className="col-md-3 p-0 vh-100">
            <Sidebar />
          </div>
          <div className="col-md-9 p-3 d-flex flex-column">
            <div>
              <Searchbar />
            </div>
            <div>
              <Booklist />
            </div>
            <div className="mt-auto">
              <Anlegebutton />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
