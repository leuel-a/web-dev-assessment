import lodashCapitalize from 'lodash/capitalize';
import Link from 'next/link';

const links = {
    company: [
        {name: 'About us', url: '#'},
        {name: 'Team', link: '#'},
        {name: 'Careers', link: '#'},
    ],
    contact: [{name: 'Help & Support'}, {name: 'Partner with us'}, {name: 'Ride with us'}],
    legal: [{name: 'Terms & Conditions'}, {name: 'Refund & Cancellation'}, {name: 'Privacy Policy'}],
};

export default function Footer() {
    return (
        <footer className="bg-black py-10">
            <div className="w-8/12 mx-auto ">
                <div className="flex gap-10">
                    {Object.entries(links).map(([key, value]) => (
                        <div key={key}>
                            <h4 className="text-md text-white mb-3">{lodashCapitalize(key)}</h4>
                            <ul className="flex flex-col gap-2">
                                {value.map(({name}) => (
                                    <li key={name} className="text-white text-sm">
                                        <Link href="#">{name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}
