import {FooterLink} from "@app/common/components/Fotter-Link/footer-link.component";

export const Footer = () => {
    return (
        <div className="bg-gray-900 p-6">
            <div className="mb-2">
                <span className="uppercase font-bold text-sm text-zinc-500">
                    Контакти
                </span>
            </div>
            <div className="mb-4">
                <ul>
                    <FooterLink href={'tel:0508791762'} children={'+38 (050) 87-91-762'}/>
                    <FooterLink href={'mailto:smykdav@gmail.com'} children={'smykdav@gmail.com'}/>
                </ul>
            </div>
            <hr className="relative left-[-3rem] w-[calc(100%_+_4.5rem)] border-zinc-500 mb-4"/>
            <div>
                <span className="text-xl font-semibold text-white">
                    Pizza-Yolla🍕🍕🍕
                </span>
            </div>
        </div>
    )
}