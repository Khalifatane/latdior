"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  MapPin,
  MessageCircle,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  Truck,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

type DeliveryMethod = "pickup" | "local";
type PaymentMethod = "cod" | "paystack";

const steps = [
  { id: "cart", label: "Panier" },
  { id: "customer", label: "Client" },
  { id: "shipping", label: "Livraison" },
  { id: "payment", label: "Paiement" },
];

import { formatFCFA } from '../../lib/utils';

// legacy alias kept for local usage
const formatCurrency = (value: number) => formatFCFA(value);

export default function CheckoutPage() {
  const { items, totalPrice, updateQuantity, removeFromCart } = useCart();
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>("pickup");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [relayPoint, setRelayPoint] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cod");

  const emailValid = useMemo(() => /\S+@\S+\.\S+/.test(email), [email]);
  const cartHasItems = items.length > 0;
  const needsAddress = deliveryMethod === "local";
  const shippingFieldsValid = useMemo(() => {
    if (!fullName.trim()) return false;
    if (!needsAddress) return true;
    return Boolean(address.trim()) && Boolean(city.trim());
  }, [address, city, fullName, needsAddress]);

  const subtotal = totalPrice;
  const shippingCost = deliveryMethod === "pickup" ? 0 : null;
  const total = subtotal + (shippingCost ?? 0);

  const canContinue = useMemo(() => {
    if (step === 0) return cartHasItems;
    if (step === 1) return emailValid;
    if (step === 2) return shippingFieldsValid;
    return true;
  }, [cartHasItems, emailValid, shippingFieldsValid, step]);

  const ownerWhatsappNumber = process.env.NEXT_PUBLIC_OWNER_WHATSAPP_NUMBER || "";

  const buildWhatsappMessage = () => {
    const itemsLine = items
      .map((item) => `${item.product.name} x${item.quantity}`)
      .join(", ");
    const deliveryLabel = deliveryMethod === "pickup" ? "Retrait en boutique" : "Livraison locale";
    return [
      "Nouvelle commande Maketbi",
      `Email: ${email}`,
      `Articles: ${itemsLine || "Aucun"}`,
      `Sous-total: ${formatCurrency(subtotal)}`,
      `Livraison: ${deliveryLabel}`,
      `Nom complet: ${fullName || "-"}`,
      `Adresse: ${address || "-"}`,
      `Ville: ${city || "-"}`,
      `Point relais: ${relayPoint || "-"}`,
      `Paiement: ${paymentMethod === "cod" ? "Payer après livraison" : "Wave ou Orange Money"}`,
    ].join("\n");
  };

  const handleCodCheckout = () => {
    if (!ownerWhatsappNumber) {
      alert("NEXT_PUBLIC_OWNER_WHATSAPP_NUMBER manquant dans .env");
      return;
    }
    const message = encodeURIComponent(buildWhatsappMessage());
    const url = `https://wa.me/${ownerWhatsappNumber}?text=${message}`;
    const popup = window.open(url, "_blank", "noopener,noreferrer");
    if (!popup) {
      window.location.href = url;
    }
  };

  const [isQrOpen, setIsQrOpen] = useState(false);

  const handlePaystackCheckout = () => {
    setIsQrOpen(true);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">Paiement</h1>
          <p className="text-sm text-gray-500 mt-1">
            Finalisez votre commande en quelques étapes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ol className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {steps.map((item, index) => {
            const isActive = step === index;
            const isComplete = step > index;
            return (
              <li
                key={item.id}
                className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium ${
                  isActive
                    ? "border-amber-600 bg-amber-50 text-amber-800"
                    : isComplete
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-gray-200 text-gray-600"
                }`}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                    isActive
                      ? "bg-amber-600 text-white"
                      : isComplete
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {isComplete ? <Check className="h-4 w-4" /> : index + 1}
                </span>
                <span>{item.label}</span>
              </li>
            );
          })}
        </ol>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              {step === 0 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5 text-amber-600" />
                    <h2 className="text-lg font-semibold text-gray-900">Votre panier</h2>
                  </div>

                  {items.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-gray-200 p-6 text-center">
                      <p className="text-gray-600">Votre panier est vide.</p>
                      <Button asChild className="mt-4 bg-amber-600 hover:bg-amber-700">
                        <Link href="/shop">Continuer vos achats</Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex flex-col gap-3 rounded-xl border border-gray-100 p-4 sm:flex-row sm:items-center"
                        >
                          <div className="flex flex-1 items-center gap-4">
                            <div className="h-16 w-16 overflow-hidden rounded-lg bg-gray-100">
                              <img
                                src={item.product.images[0]}
                                alt={item.product.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="font-medium text-gray-900">{item.product.name}</p>
                              <p className="text-sm text-gray-500">
                                {formatCurrency(item.product.price)}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between gap-4 sm:justify-end">
                            <div className="flex items-center rounded-lg border border-gray-200">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="h-9 w-9 text-gray-600 hover:bg-gray-50"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="mx-auto h-4 w-4" />
                              </button>
                              <span className="h-9 w-10 text-center text-sm font-semibold">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="h-9 w-9 text-gray-600 hover:bg-gray-50"
                              >
                                <Plus className="mx-auto h-4 w-4" />
                              </button>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-semibold text-gray-900">
                                {formatCurrency(item.product.price * item.quantity)}
                              </p>
                              <button
                                onClick={() => removeFromCart(item.product.id)}
                                className="mt-1 inline-flex items-center gap-1 text-xs text-gray-400 hover:text-red-500"
                              >
                                <Trash2 className="h-3 w-3" />
                                Retirer
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Informations client</h2>
                    <p className="text-sm text-gray-500">
                      Nous utilisons votre email pour confirmer la commande.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="vous@email.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    {!emailValid && email.length > 0 && (
                      <p className="text-xs text-red-500">Veuillez entrer un email valide.</p>
                    )}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Livraison</h2>
                    <p className="text-sm text-gray-500">
                      Choisissez votre mode de livraison.
                    </p>
                  </div>

                  <RadioGroup
                    value={deliveryMethod}
                    onValueChange={(value) => setDeliveryMethod(value as DeliveryMethod)}
                    className="space-y-3"
                  >
                    <label
                      htmlFor="delivery-pickup"
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 ${
                        deliveryMethod === "pickup"
                          ? "border-amber-600 bg-amber-50"
                          : "border-gray-200"
                      }`}
                    >
                      <RadioGroupItem value="pickup" id="delivery-pickup" className="mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Retrait en boutique</p>
                        <p className="text-sm text-gray-500">
                          Recuperez votre commande directement dans notre boutique.
                        </p>
                      </div>
                    </label>

                    <label
                      htmlFor="delivery-local"
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 ${
                        deliveryMethod === "local"
                          ? "border-amber-600 bg-amber-50"
                          : "border-gray-200"
                      }`}
                    >
                      <RadioGroupItem value="local" id="delivery-local" className="mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Livraison locale</p>
                        <p className="text-sm text-gray-500">
                          Partagez votre adresse. Nous vous contactons pour organiser la livraison.
                        </p>
                      </div>
                    </label>
                  </RadioGroup>

                  <Separator />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="fullName">Nom complet</Label>
                      <Input
                        id="fullName"
                        placeholder="Ex: Amina Diop"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="address">Adresse</Label>
                      <Textarea
                        id="address"
                        placeholder="Numéro, rue, quartier"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Ville</Label>
                      <Input
                        id="city"
                        placeholder="Saint-Louis"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="relayPoint">Point relais (optionnel)</Label>
                      <Input
                        id="relayPoint"
                        placeholder="Point relais"
                        value={relayPoint}
                        onChange={(event) => setRelayPoint(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Paiement</h2>
                    <p className="text-sm text-gray-500">
                      Sélectionnez votre moyen de paiement.
                    </p>
                  </div>

                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={(value) => setPaymentMethod(value as PaymentMethod)}
                    className="space-y-3"
                  >
                    <label
                      htmlFor="payment-cod"
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 ${
                        paymentMethod === "cod" ? "border-amber-600 bg-amber-50" : "border-gray-200"
                      }`}
                    >
                      <RadioGroupItem value="cod" id="payment-cod" className="mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Payer après livraison</p>
                        <p className="text-sm text-gray-500">
                          Confirmez votre commande via WhatsApp.
                        </p>
                      </div>
                    </label>

                    <label
                      htmlFor="payment-paystack"
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 ${
                        paymentMethod === "paystack"
                          ? "border-amber-600 bg-amber-50"
                          : "border-gray-200"
                      }`}
                    >
                      <RadioGroupItem value="paystack" id="payment-paystack" className="mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Wave ou Orange Money</p>
                        <p className="text-sm text-gray-500">
                          Paiement sécurisé en ligne (Wave / Orange Money).
                        </p>
                      </div>
                    </label>
                  </RadioGroup>

                  <Separator />

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    {paymentMethod === "cod" ? (
                      <Button
                        className="bg-amber-600 hover:bg-amber-700"
                        onClick={handleCodCheckout}
                        disabled={!cartHasItems || !emailValid || !shippingFieldsValid}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Confirmer sur WhatsApp
                      </Button>
                    ) : (
                      <Button
                        className="bg-amber-600 hover:bg-amber-700"
                        onClick={handlePaystackCheckout}
                        disabled={!cartHasItems || !emailValid || !shippingFieldsValid}
                      >
                        <Truck className="mr-2 h-4 w-4" />
                        Wave / Orange Money
                      </Button>
                    )}
                    <span className="text-sm text-gray-500">
                      Vous recevrez un récapitulatif après confirmation.
                    </span>
                  </div>

                  <Dialog open={isQrOpen} onOpenChange={setIsQrOpen}>
                    <DialogContent className="max-w-md rounded-3xl border border-amber-200 bg-white p-6 shadow-2xl">
                      <DialogHeader className="text-center gap-3">
                        <DialogTitle className="text-xl font-semibold text-gray-900">
                          QR code de paiement
                        </DialogTitle>
                        <DialogDescription className="text-sm text-gray-500">
                          Scannez le code avec Wave ou Orange Money pour finaliser votre paiement.
                        </DialogDescription>
                      </DialogHeader>

                      <div className="mx-auto mt-6 grid w-full max-w-sm gap-4 rounded-[28px] border border-gray-200 bg-amber-50 p-6 text-center shadow-sm">
                        <div className="mx-auto h-72 w-72 overflow-hidden rounded-3xl border border-gray-300 bg-white p-4 shadow-inner shadow-gray-100">
                        <img
                          src="/images.png"
                          alt="QR code"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="space-y-3 text-left">
                          <p className="text-sm font-medium text-gray-900">Montant estimé</p>
                          <p className="text-2xl font-semibold text-gray-900">{formatCurrency(total)}</p>
                          <div className="rounded-2xl bg-white p-4 text-sm text-gray-600 shadow-sm">
                            <p className="font-medium text-gray-900">Référence</p>
                            <p className="mt-1 break-words text-sm text-amber-700">#QR-{Math.floor(Date.now() / 1000)}</p>
                          </div>
                        </div>

                        <Button
                          className="mt-4 bg-amber-600 hover:bg-amber-700"
                          onClick={() => setIsQrOpen(false)}
                        >
                          Fermer
                        </Button>
                      </div>

                      <DialogClose className="absolute top-4 right-4 rounded-full bg-amber-100 p-2 text-gray-700 hover:bg-amber-200" />
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => setStep((current) => Math.max(0, current - 1))}
                disabled={step === 0}
              >
                Retour
              </Button>
              {step < steps.length - 1 ? (
                <Button
                  className="bg-amber-600 hover:bg-amber-700"
                  onClick={() => setStep((current) => Math.min(steps.length - 1, current + 1))}
                  disabled={!canContinue}
                >
                  Continuer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  variant="outline"
                  onClick={() => setStep(0)}
                >
                  Revoir le panier
                </Button>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-600" />
                <h3 className="text-lg font-semibold text-gray-900">Récapitulatif</h3>
              </div>
              <Separator className="my-4" />

              {items.length === 0 ? (
                <p className="text-sm text-gray-500">Aucun article dans le panier.</p>
              ) : (
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center justify-between text-sm">
                      <span className="line-clamp-1 text-gray-600">
                        {item.product.name} x{item.quantity}
                      </span>
                      <span className="font-medium text-gray-900">
                        {formatCurrency(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <Separator className="my-4" />

              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between text-gray-600">
                  <span>Sous-total</span>
                  <span className="font-medium text-gray-900">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>Livraison</span>
                  <span className="font-medium text-gray-900">
                    {shippingCost === null ? "Selon quartier" : formatCurrency(shippingCost)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>Total estime</span>
                  <span className="text-base font-semibold text-gray-900">
                    {formatCurrency(total)}
                  </span>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-dashed border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                <div className="flex items-center gap-2 font-medium">
                  <Truck className="h-4 w-4" />
                  Livraison locale
                </div>
                <p className="mt-2 text-amber-800">
                  Les tarifs varient selon les quartiers de Saint-Louis (Île, Sor, Pikine,
                  Gandon, etc.). Nous confirmons le montant après votre validation.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">Besoin d&apos;aide ?</h3>
              <p className="mt-2 text-sm text-gray-500">
                Notre équipe est disponible pour vous guider à chaque étape.
              </p>
              <Button asChild variant="outline" className="mt-4 w-full">
                <Link href="/contact">Contacter le support</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
