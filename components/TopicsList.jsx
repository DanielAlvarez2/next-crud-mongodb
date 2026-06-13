import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from 'react-icons/hi'
import Link from 'next/link'

export default function TopicsList(){
    return(
        <>
            <div style={{   padding:'10px',
                            display:'flex',
                            justifyContent:'space-between',
                            alignItems:'flex-start',
                            background:'yellow',
                            border:'1px solid grey',
                            marginBottom:'10px',
                        }}>
                <div>
                    <h2>Topic Title</h2>
                    <div>Topic Description</div>
                </div>

                <div style={{display:'flex',gap:'15px',alignItems:'flex-start'}}>
                    <RemoveBtn />
                    <Link href={'/editTopic/123'} ><HiPencilAlt size={24} /></Link>
                </div>
            </div>
        </>
    )
}