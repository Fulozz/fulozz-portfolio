import React from 'react';
import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import { US, BR } from 'country-flag-icons/react/3x2'

export default async function LanguageSwitcher({ lng }) {
    const { t } = await useTranslation(lng);
    return (
         <section className="flex">
            <Link href={`/pt`}  className="mx-3">
                <strong><BR title="Brasil" className='h-8 w-8'/> </strong>
            </Link>
            <p>|</p>
            <Link href={`/en`} className="mx-3" >
                <strong><US title="United States" className='h-8 w-8'/> </strong>
            </Link>
        </section>
    );
}

// Scalable languageSwitcher
// export default async function LanguageSwitcher({ lng }) {
//     const { t } = await useTranslation(lng);
//     console.log(lng)
//     return (
//         <section className='flex'>
//             {languages.filter((l) => lng !== l).map((l, index) => {
//                 return (
//                     <span key={index} className='flex mx-4 my-2'>
//                         {index > 0 && (' | ')}
//                         <Link href={`/${l}`} key={index}>
//                             <strong>{lng === "pt" ?(<BR title="Brasil" className='h-8 w-8'/>) : ( <US title="United States" className='h-8 w-8' />)}</strong>
//                         </Link>
//                     </span>
//                 );
//             })}
//         </section>
//     );
// }