"use client"

import { IconBook, IconCV, IconHome, IconArtigo } from "../components/icons";
import MenuItem from "../components/templates/MenuItem";
import { useAppContext } from "../context";

export default function Menu() {
    const { getOpenMenu } = useAppContext()

    const openMenu = getOpenMenu()

    return (
        <aside>
            <ul>
                <MenuItem url="/" texto="Início" icone={IconHome} openMenu={openMenu} />
                <MenuItem url="/ui/curriculumvitae" texto="Currículo" icone={IconCV} openMenu={openMenu} />
                <MenuItem url="/ui/projects" texto="Projetos" icone={IconBook} openMenu={openMenu} />
                <MenuItem url="/ui/articles" texto="Artigos" icone={IconArtigo} openMenu={openMenu} />
            </ul>
        </aside>
    )
}