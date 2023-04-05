import { loadStripe, Stripe } from "@stripe/stripe-js";

interface props {
  lineItems: any;
}

export const checkout = async ({ lineItems }: props) => {
  let stripePromise: Promise<Stripe | null> | null = null;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY as string);
    }
    return stripePromise;
  };

  const stripe = await getStripe();

  await stripe?.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
};
