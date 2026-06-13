export default function EditTopic(){
    return(
        <form style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <input  type='text' 
                    placeholder='Topic Title' 
                    style={{border:'1px solid black',
                            borderRadius:'5px',
                            padding:'10px',
                            width:'100%',
                            fontSize:'20px',
                    }}
            />
            <input  type='text' 
                    placeholder='Topic Description' 
                    style={{border:'1px solid black',
                            borderRadius:'5px',
                            padding:'10px',
                            width:'100%',
                            fontSize:'20px',
                    }}
            />

            <button style={{background:'blue', 
                            color:'white',
                            padding:'10px 10px',
                            width:'auto',
                            borderRadius:'10px',
                            border:'none',
                            fontSize:'20px',
                            cursor:'pointer',
                            alignSelf:'center'}}>
                Update Topic
            </button>
        </form>
    )
}