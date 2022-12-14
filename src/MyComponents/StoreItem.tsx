import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import FavoriteIcon from '@mui/icons-material/Favorite'
import '../App.css';
import { useState } from "react";
import { display } from "@mui/system";



type StoreItemProps = {
  

  petId: number
  petName: string
  petPrice: number
  petImage: string

}

export function StoreItem({ petId, petName, petPrice, petImage }: StoreItemProps) {

  // const { hideStoreItem,  } = useShoppingCart()

 

  const {
    getItemQuantity,
    // getItemLike,
    increaseCartQuantity,
    wishlistIncrease,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()



  const quantity = getItemQuantity(petId);

  // const like = getItemLike(petId)

  return (

    <Card className="column" >
     
      <br/><br/>
      <br></br>
      <Card.Img
        variant="top"
        src={petImage}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <div className="price">PetName:  {petName}</div>
          <div className="price">Price:  {formatCurrency(petPrice)}</div>
        </Card.Title>
        <div className="buttonDiv">
        <div className="row">
          {quantity === 0 ? (
            <Button className="row" onClick={() => increaseCartQuantity(petId)} style={{"backgroundColor":"#8ceaf5"}} variant="success">
              <AddShoppingCartSharpIcon></AddShoppingCartSharpIcon>
            </Button>

          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(petId)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(petId)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(petId)}
                variant="danger"
                size="sm"
                color="red"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
        {/* <div className="row">
          {like === 0 ? (
            <Button className="row" onClick={() => wishlistIncrease(petId)}  style={{"backgroundColor":"#8ceaf5"}}>

              <FavoriteIcon></FavoriteIcon>
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
            
              <Button className="w-100"  >

                <FavoriteIcon></FavoriteIcon>
              </Button>
            </div>
          )}

        </div> */}
        </div>
      </Card.Body>
      
    </Card>
  
  )
}