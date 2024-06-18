import Sidebar from "@/components/searchPage/Sidebar"

export default function Home() {
  return (
    <main>
      <div className="container-fluid vh-100">
        <div className="row">
          <div className="col-md-3 p-0 vh-100">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <p>test</p>
          </div>
        </div>
      </div>
    </main>
  )
}
