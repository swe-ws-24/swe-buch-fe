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
