import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";

const Contact = () => {
  return (
    <>
      <form className="container pt-5 vh-100">
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput id="form6Example1" label="Nombre" />
          </MDBCol>
          <MDBCol>
            <MDBInput id="form6Example2" label="Apellido" />
          </MDBCol>
        </MDBRow>

        <MDBInput wrapperClass="mb-4" id="form6Example4" label="Dirección" />
        <MDBInput
          wrapperClass="mb-4"
          type="email"
          id="form6Example5"
          label="Email"
        />
        <MDBInput
          wrapperClass="mb-4"
          type="tel"
          id="form6Example6"
          label="Teléfono"
        />

        <MDBInput
          wrapperClass="mb-4"
          id="form6Example7"
          rows={4}
          label="Comentarios"
        />

        <MDBBtn className="mb-4" type="submit" block>
          Enviar
        </MDBBtn>
      </form>
    </>
  );
};

export default Contact;
