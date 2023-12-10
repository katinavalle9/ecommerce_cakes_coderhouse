import { useLocation } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState, useEffect } from "react";


const Auth = () => {
  const location = useLocation();
  const [orderId, setOrderId] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const orderIdFromState = location.state?.orderId;
    console.log("orderIdFromState:", orderIdFromState);
    setOrderId(orderIdFromState);

    if (orderIdFromState) {
      const fetchOrderData = async () => {
        try {
          const orderDocRef = doc(db, "ordenes", orderIdFromState);
          const orderDocSnap = await getDoc(orderDocRef);

          if (orderDocSnap.exists()) {
            const orderData = orderDocSnap.data();
            setOrderData(orderData);
          } else {
            console.error("Documento de orden no encontrado en Firestore");
          }
        } catch (error) {
          console.error("Error al obtener datos de la orden:", error);
        }
      };

      fetchOrderData();
    }
  }, [location.state?.orderId]);
  return (
    <div className="text-center pt-5">
    {orderId ? (
      <p className="fw-bold">¡Se ha generado la orden con el ID: {orderId}!</p>
    ) : (
      <p>orderId es undefined</p>
    )}
  </div>
);
};

export default Auth;