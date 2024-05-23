export const toNormalForm = (str: string) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
};

export const formatPhoneNumberString = (phoneNumber: string) => {
  const DDD = phoneNumber.slice(0, 2);
  const firstHalf = phoneNumber.slice(2, 7);
  const secondHalf = phoneNumber.slice(7, 11);

  return `(${DDD}) ${firstHalf}-${secondHalf}`;
};

export const generateWhatsappLink = (phoneNumber: string, message: string) => {
  const baseURL = "https://wa.me";

  const phoneNumberDDI = "55";

  const encodedMessage = encodeURI(message);

  const finalUrl = `${baseURL}/${phoneNumberDDI}${phoneNumber}?text=${encodedMessage}`;

  return finalUrl;
};

export const MAIN_WHATSAPP = "11930080551";

export const generateMainWhatsappLink = () => {
  return generateWhatsappLink(
    MAIN_WHATSAPP,
    `Olá! Vim pelo site e gostaria de mais informações sobre os serviços da GS CONSIG!`
  );
};

export const getFormattedCurrency = (value: string) => {
  return Number(value).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};
