import Link from 'next/link'

export default function Navbar(){
    return(
        <nav style={{   display:'flex',
                        padding:'10px 20px',
                        justifyContent:'space-between',
                        alignItems:'center',
                        background:'black'}}>
            <Link href={'/'} style={{color:'white',fontWeight:'900'}} >GTCoding</Link>
            <Link href={'/addTopic'} style={{   background:'white',
                                                padding:'5px 10px',
                                                borderRadius:'5px',
                                                color:'black'}} >
                + Add Topic
            </Link>
        </nav>
    )
}