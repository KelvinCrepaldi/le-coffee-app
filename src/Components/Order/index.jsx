import { FormControl, MenuItem, TextField } from "@material-ui/core";
import { AiFillCloseSquare } from "react-icons/ai";
import {
  FormModal,
  OrderSuccess,
} from "../../Styles/ComponentsStyle/Order/index";
import { ButtonComponent } from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "react-modal";
import { GiCoffeeBeans } from "react-icons/gi";
import { useContext, useState } from "react";
import { CartContext } from "../../Providers/cartProvider";

const ModalOrder = ({ modalIsOpen, closeModal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
      width: "100%",
      maxWidth: "750px",
      height: "500px",
    },
  };

  let subtitle;

  const [isOrdered, setIsOrdered] = useState(false);

  const { cartList } = useContext(CartContext);

  const schemaOrder = yup.object({
    nameCard: yup.string().required("Campo obrigatório!"),
    numberCard: yup
      .string()
      .min(12, "Mínimo de 12 dígitos!")
      .required("Campo obrigatório!"),
    validity: yup
      .string()
      .default(function () {
        return new Date();
      })
      .required("Campo obrigatório!"),
    verificationCode: yup
      .number()
      .min(3, "Máximo de 3 dígitos")
      .required("Campo obrigatório!"),
    cpf: yup.string().required("Campo obrigatório!"),
    installment: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaOrder),
  });

  const afterOpenModal = () => {
    subtitle.style.color = "var(--gray-primary)";
  };

  const handleOrder = (data) => {
    setIsOrdered(true);

    setTimeout(function () {
      setIsOrdered(false);
    }, 10000);
  };

  const total = cartList.reduce(
    (acc, pdt) => pdt.price * pdt.quantity + acc,
    0
  );

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <span onClick={closeModal}>
        <AiFillCloseSquare
          style={{ color: "tomato", cursor: "pointer", fontSize: "20px" }}
        />
      </span>

      {!isOrdered ? (
        <FormModal onSubmit={handleSubmit(handleOrder)}>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
            FINALIZE SUA COMPRA
          </h2>
          <p>
            <strong>
              À vista com até 10% de desconto* ou tudo em até 12x sem juros!
            </strong>
            <br />
            O Le Coffee! aceita as bandeiras de cartão VISA, MasterCard, ELO,
            HiperCard, American Express e Diners - Todos em até 12x
            <br /> sem juros ou com desconto em até 3x!
          </p>
          <div>
            <TextField
              label="Nome impresso no cartão"
              margin="normal"
              variant="standard"
              size="medium"
              color="primary"
              {...register("nameCard")}
              error={!!errors.nameCard}
              helperText={errors.nameCard?.message}
            />
          </div>
          <div>
            <TextField
              label="Número do cartão"
              margin="normal"
              variant="standard"
              size="medium"
              color="primary"
              type="text"
              {...register("numberCard")}
              error={!!errors.numberCard}
              helperText={errors.numberCard?.message}
            />
          </div>
          <div>
            <TextField
              label="Validade"
              margin="normal"
              variant="standard"
              size="medium"
              color="primary"
              type="text"
              {...register("validity")}
              error={!!errors.validity}
              helperText={errors.validity?.message}
            />
          </div>
          <div>
            <TextField
              label="Código de verificação (CVV)"
              margin="normal"
              variant="standard"
              size="medium"
              color="primary"
              type="text"
              {...register("verificationCode")}
              error={!!errors.verificationCode}
              helperText={errors.verificationCode?.message}
            />
          </div>
          <div>
            <TextField
              label="CPF do titular do cartão"
              margin="normal"
              variant="standard"
              size="medium"
              color="primary"
              type="text"
              {...register("cpf")}
              error={!!errors.cpf}
              helperText={errors.cpf?.message}
            />
          </div>
          <div>
            <FormControl>
              <TextField
                id="select"
                label="Forma de pagamento"
                select
                margin="normal"
                variant="standard"
                value="1"
                size="small"
                color="primary"
                {...register("installment")}
                error={!!errors.installment}
                helperText={errors.installment?.message}
              >
                <MenuItem value="1">
                  À vista até 10% de desconto - R$
                  {(total - total * 0.1).toFixed(2)}
                </MenuItem>
                <MenuItem value="2">
                  2x sem juros - R$ {(total / 2).toFixed(2)}
                </MenuItem>
                <MenuItem value="3">
                  3x sem juros - R$ {(total / 3).toFixed(2)}
                </MenuItem>
                <MenuItem value="4">
                  12x sem juros - R$ {(total / 12).toFixed(2)}
                </MenuItem>
              </TextField>
            </FormControl>
          </div>

          <ButtonComponent
            variant="white"
            style={{ background: "#61db61" }}
            text="FINALIZAR COMPRA"
            type="submit"
          />
        </FormModal>
      ) : (
        <OrderSuccess>
          <h2> PAGAMENTO CONCLUÍDO</h2>
          <div>
            <GiCoffeeBeans />
            <p>
              Seu pagamento foi aprovado. Para que seja realizada a entrega com
              sucesso, tenha o comprovante da compra em mãos.
            </p>
          </div>
        </OrderSuccess>
      )}
    </Modal>
  );
};
export default ModalOrder;
