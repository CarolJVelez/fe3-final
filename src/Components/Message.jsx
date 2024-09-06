import React from "react";

const Message = ({ customer }) => {
  return (
    <>
      <h4>Gracias {customer.name}!</h4>
      <h4>
       te contactaremos cuando antes vía mail
        {customer.email}
      </h4>
    </>
  );
};

export default Message;
