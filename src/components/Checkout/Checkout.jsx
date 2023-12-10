import { Link, useNavigate } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { auth, googleProvider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { CartContext } from "../CartContext/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useContext, useState } from "react";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const generarOrden = async () => {
    try {
      // Guardar el carrito en Firestore
      const cartCollectionRef = collection(db, "ordenes");

      const newOrderRef = await addDoc(cartCollectionRef, { cart });

      console.log("Orden generada y carrito guardado en Firestore");

      // Limpiar el carrito después de generar la orden
      clearCart();

      // Obtener el ID de la orden generada
      const generatedOrderId = newOrderRef.id;

      // Guardar el orderId en el estado
      setOrderId(generatedOrderId);

      navigate("/auth", { state: { orderId: generatedOrderId } });
    } catch (error) {
      console.error(
        "Error al generar la orden y guardar el carrito en Firestore:",
        error
      );
    }
  };

  return (
    <>
      <h3 className="text-center mt-3">Generar orden</h3>
      <h6 className="text-center mt-3">
        Para generar la orden deberás ingresar con tu cuenta de Google
      </h6>

      <div className="d-flex justify-content-center my-5">
        <MDBBtn onClick={signInWithGoogle}>
          <MDBIcon fab icon="google" color="danger" /> Ingresar con Google
        </MDBBtn>
      </div>

      <div className="d-flex justify-content-center">
        <MDBBtn onClick={generarOrden}>
          <Link to={`/finish?orderId=${orderId}`} className="color-link">
            Generar orden
          </Link>
        </MDBBtn>
      </div>
    </>
  );
};

export default Checkout;
