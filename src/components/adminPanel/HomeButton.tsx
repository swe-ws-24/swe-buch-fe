import Link from "next/link";

const HomeButton: React.FC = () => {
    return (
        <Link href="/search" type="button" className="btn btn-primary">
            Home
        </Link>
    );
}

export default HomeButton;