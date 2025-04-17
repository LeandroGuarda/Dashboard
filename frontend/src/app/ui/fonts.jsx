import {Roboto, Bebas_Neue} from 'next/font/google'

export const robotoFonts = Roboto({
    subsets:["latin"],
    weight:["400","700"],
    variable: "--font-roboto"
})


export const bebasFonts = Bebas_Neue({
    subsets:["latin"],
    weight:["400"],
    variable: "--font-Bebas-Neue"
})