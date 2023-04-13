import {
  Money,
  CreditCard,
  Bank,
  CurrencyDollar,
  MapPinLine,
} from "phosphor-react";
import {
  CheckoutContainer,
  SectionForm,
  TitleSection,
  DeliveryInfo,
  FormContent,
  PaymentsMethods,
  SelectedCoffees,
  PricesContent,
  TotalPrice,
  TotalPriceItems,
  ButtonConfirm,
  PaymentsMethodsItem,
  EmptyCarImage,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../contexts/CoffeeInfoContext";
import { SelectedCoffeeItem } from "./SelectedCoffeeItem";
import { useNavigate } from "react-router-dom";
import zod from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddressDeliveryForm } from "./AddressDeliveyForm";
import emptyCarImg from "../../assets/empty_car.svg";

const addressDeliveryFormValidation = zod.object({
  cep: zod
    .string()
    .min(9, { message: "Informe o CEP" })
    .max(9, { message: "Só é permitido 9 caracters" }),
  street: zod.string().min(1, "Informe a Rua"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod
    .string()
    .min(2, "Informe o UF")
    .max(2, { message: "O UF deve ter apenas 2 caracteres" }),
  numberHouse: zod
    .number()
    .positive({ message: "O número não pode ser negativo" })
    .int({ message: "O valor precisa ser inteiro" }),
});

export type AddressDeliveryFormData = zod.infer<
  typeof addressDeliveryFormValidation
>;

export type MethodPayments = "creditCard" | "debtCard" | "cash";

const DELIVERY_PRICE = 3.5;

function formatPrice(value: number): string {
  return value.toFixed(2).replace(".", ",");
}

export function Checkout() {
  const [totalItemsPrice, setTotalItemsPrice] = useState(0);
  const [paymentMethodActive, setPaymentMethodActive] =
    useState<MethodPayments>("debtCard");

  const { selectedCoffees, createCheckoutInfo, removeSelectedItem } =
    useContext(CoffeeContext);
  const navigate = useNavigate();

  const addressDeliveryForm = useForm<AddressDeliveryFormData>({
    resolver: zodResolver(addressDeliveryFormValidation),
    defaultValues: {
      cep: "",
      city: "",
      complement: "",
      district: "",
      street: "",
      uf: "",
    },
  });

  const { handleSubmit, watch, reset } = addressDeliveryForm;

  useEffect(() => {
    if (selectedCoffees.length > 0) {
      const totalPrice = selectedCoffees.reduce<number>(
        (sum: number, itemCoffee) =>
          sum + itemCoffee.valueRental * itemCoffee.quantity,
        0
      );

      setTotalItemsPrice(totalPrice);
    }
  }, [selectedCoffees]);

  function handleCreateCheckout(data: AddressDeliveryFormData) {
    createCheckoutInfo({ ...data, paymentMethod: paymentMethodActive });
    navigate("/success");

    [...selectedCoffees].map(({ id }) => {
      removeSelectedItem(id);
    });

    reset();
  }

  const cep = watch("cep");
  const city = watch("city");
  const district = watch("district");
  const numberHouse = watch("numberHouse");
  const street = watch("street");
  const uf = watch("uf");

  const isSubmitDisable =
    !cep || !city || !district || !numberHouse || !street || !uf;

  return (
    <CheckoutContainer>
      <form
        onSubmit={handleSubmit(handleCreateCheckout)}
        action=""
        style={{ display: "flex", gap: 32 }}
      >
        <SectionForm>
          <TitleSection>Complete seu pedido</TitleSection>
          <FormContent>
            <DeliveryInfo iconColor="yellowDark">
              <MapPinLine size={22} weight="regular" />
              <div>
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </DeliveryInfo>
            <FormProvider {...addressDeliveryForm}>
              <AddressDeliveryForm />
            </FormProvider>
          </FormContent>
          <FormContent>
            <DeliveryInfo iconColor="purple">
              <CurrencyDollar size={25} weight="regular" />
              <div>
                <p>Pagamento</p>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </DeliveryInfo>
            <PaymentsMethods>
              <PaymentsMethodsItem
                activeItem={paymentMethodActive === "creditCard"}
              >
                <button
                  type="button"
                  onClick={() => setPaymentMethodActive("creditCard")}
                >
                  <CreditCard size={25} weight="regular" />
                  <p>Cartão de crédito</p>
                </button>
              </PaymentsMethodsItem>
              <PaymentsMethodsItem
                activeItem={paymentMethodActive === "debtCard"}
              >
                <button
                  type="button"
                  onClick={() => setPaymentMethodActive("debtCard")}
                >
                  <Bank size={25} weight="regular" />
                  <p>Cartão de débito</p>
                </button>
              </PaymentsMethodsItem>
              <PaymentsMethodsItem activeItem={paymentMethodActive === "cash"}>
                <button
                  type="button"
                  onClick={() => setPaymentMethodActive("cash")}
                >
                  <Money size={25} weight="regular" />
                  <p>Dinheiro</p>
                </button>
              </PaymentsMethodsItem>
            </PaymentsMethods>
          </FormContent>
        </SectionForm>
        {selectedCoffees.length > 0 ? (
          <section>
            <TitleSection>Cafés selecionados</TitleSection>
            <SelectedCoffees>
              {selectedCoffees.map((item) => (
                <SelectedCoffeeItem key={item.id} item={item} />
              ))}
              <PricesContent>
                <TotalPriceItems>
                  <p>Total de itens</p>
                  <span>R$ {formatPrice(totalItemsPrice)}</span>
                </TotalPriceItems>
                <TotalPriceItems>
                  <p>Entrega</p>
                  <span>R$ {formatPrice(DELIVERY_PRICE)}</span>
                </TotalPriceItems>
                <TotalPrice>
                  <p>Total</p>
                  <span>
                    R$ {formatPrice(totalItemsPrice + DELIVERY_PRICE)}
                  </span>
                </TotalPrice>
              </PricesContent>
              <ButtonConfirm type="submit">
                Confirmar Pedido
              </ButtonConfirm>
            </SelectedCoffees>
          </section>
        ) : (
          <EmptyCarImage src={emptyCarImg} alt="" />
        )}
      </form>
    </CheckoutContainer>
  );
}
