import ButtonsNavbar from "../ButtonsNavbar/ButtonsNavbar"

const Navbar = () => {
    return (
        <div className="nav">
            <ButtonsNavbar product={'Mouses'}/>
            <ButtonsNavbar product={'Keyboards'}/>
            <ButtonsNavbar product={'Mousepads'}/>
        </div>
    )
}

export default Navbar