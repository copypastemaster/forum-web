import Desktop from "@/components/Navbar/Desktop";
import Nav from "@/components/Navbar/Mobile";

export default function NavContainer () {
    return (
        <div className='z-50 border border-slate-500 rounded-md border-l-0 border-r-0 shadow p-1'>
            <Nav />
            <Desktop />
        </div>
    )
}