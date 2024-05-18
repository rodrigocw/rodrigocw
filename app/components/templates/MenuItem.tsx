import Link from "next/link"

interface MenuItemProps {
    url: string
    texto: string
    icone: any
    openMenu: boolean
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <li>
            <Link href={props.url}
                className={`
                    flex items-center hover:bg-gray-500 cursor-pointer rounded-md
                    ${props.openMenu
                        ? 'ml-2 mr-2 h-10 w-32'
                        : 'ml-1 mr-1 justify-center h-14 w-14 text-[10px]'}
                `}>
                <div className={`
                    ${props.openMenu
                        ? 'flex ml-3'
                        : 'flex flex-col items-center justify-center'}
                `}>
                    {props.icone}
                    <span className={`
                        ${props.openMenu
                            ? 'flex items-center ml-3 text-sm'
                            : 'flex mt-1'}
                    `}>
                        {props.texto}
                    </span>
                </div>
            </Link>
        </li>
    )
}