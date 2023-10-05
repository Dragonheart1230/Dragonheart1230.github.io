import { Link, Navbar, NavbarItem } from "@nextui-org/react"

export const NavbarComponent = () => {
    return (
        <Navbar >
            <NavbarItem>
                <Link color="foreground" href="#">
                    Features
                </Link>
            </NavbarItem>
            <p>Hello world</p>
        </Navbar>
    )

}