import Desktop from "@/components/Navbar/Desktop";
import Nav from "@/components/Navbar/Mobile";

export default function NavContainer () {
    return (
        <div className='z-50 border shadow p-1'>
            <Nav />
            <Desktop />
        </div>
    )
}