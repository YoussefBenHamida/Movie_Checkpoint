import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars'

export const MovieCard =(props)=>{

    return (
     /* Mettre un max de mot pour al descrpition lors du pop up */
  
     <>
     

    <Card style={{ backgroundImage: 'linear-gradient(35deg, #8B0000 1%, #1f2127 50%, #1f2127 70%, #1f2127 70%, #474a51 100%)',  boxShadow: '15px 12px 50px rgb(83, 5, 5) '

 }}>
      <Card.Img variant="top" src={props.el.imageUrl} style={{ height: '240px',width:"200px",}} />
      <Card.Body>
        <Card.Title style={{display:'flex',justifyContent:'center',fontSize:'16px', paddingTop:'0px',color:'rgb(204, 214, 223)'}}>{props.el.name}</Card.Title>
        {<ReactStars
  count={5}
  size={20}
  color2={'#ffd700'}
  edit ={false}
  value = {props.el.rating} />}
        <Card.Text style={{fontSize:'10px',color:'rgb(204, 214, 223)',width:'170px',height:"50px"}} >{props.el.description}</Card.Text>
        <Button variant="primary" style={{border: 'none',letterSpacing: '0.05rem',fontWeight: 600,fontSize: '14px',borderRadius: '500px', background: 'rgb(53, 49, 49)',padding:'5px',marginLeft:'40px',width:'90px'}}>Play</Button>
      </Card.Body>
    </Card>
     </>
    )
}
