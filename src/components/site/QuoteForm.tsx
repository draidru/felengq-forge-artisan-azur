import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { quoteSchema, type QuoteInput } from "@/lib/quote-schema";
import { PROJECT_TYPES, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const fieldClass = "h-12 rounded-sm border-input bg-background/40 text-base placeholder:text-muted-foreground/70";

function FieldError({ id, message }: { id: string; message?: string | undefined }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs text-destructive">
      {message}
    </p>
  );
}

export function QuoteForm() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  const onSubmit = async () => {
    // Pas encore d'envoi côté serveur : simple confirmation.
    await new Promise((r) => setTimeout(r, 400));
    toast.success("Merci pour votre demande de devis", {
      description: `Votre demande a bien été prise en compte. Pour toute urgence : ${SITE.phoneDisplay}.`,
    });
    reset();
  };

  const a11y = (name: keyof QuoteInput) => ({
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" className="eyebrow !text-[0.65rem]">Nom</Label>
          <Input id="name" autoComplete="name" placeholder="Votre nom" className={cn(fieldClass, "mt-2")} {...register("name")} {...a11y("name")} />
          <FieldError id="name-error" message={errors.name?.message} />
        </div>
        <div>
          <Label htmlFor="phone" className="eyebrow !text-[0.65rem]">Téléphone</Label>
          <Input id="phone" type="tel" autoComplete="tel" placeholder="06 00 00 00 00" className={cn(fieldClass, "mt-2")} {...register("phone")} {...a11y("phone")} />
          <FieldError id="phone-error" message={errors.phone?.message} />
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="eyebrow !text-[0.65rem]">E-mail</Label>
        <Input id="email" type="email" autoComplete="email" placeholder="vous@exemple.fr" className={cn(fieldClass, "mt-2")} {...register("email")} {...a11y("email")} />
        <FieldError id="email-error" message={errors.email?.message} />
      </div>

      <div>
        <Label htmlFor="projectType" className="eyebrow !text-[0.65rem]">Type de projet</Label>
        <Controller
          control={control}
          name="projectType"
          render={({ field }) => (
            <Select value={field.value ?? ""} onValueChange={(v) => v && field.onChange(v)}>
              <SelectTrigger id="projectType" className={cn(fieldClass, "mt-2")} {...a11y("projectType")}>
                <SelectValue placeholder="Choisissez un type de projet" />
              </SelectTrigger>
              <SelectContent className="dark">
                {PROJECT_TYPES.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <FieldError id="projectType-error" message={errors.projectType?.message} />
      </div>

      <div>
        <Label htmlFor="message" className="eyebrow !text-[0.65rem]">Message</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Décrivez votre projet : lieu, dimensions, style souhaité…"
          className={cn(fieldClass, "mt-2 h-auto min-h-36 py-3")}
          {...register("message")}
          {...a11y("message")}
        />
        <FieldError id="message-error" message={errors.message?.message} />
      </div>

      <Button type="submit" variant="brass" size="xl" className="w-full sm:w-auto" disabled={isSubmitting}>
        <Send aria-hidden="true" />
        {isSubmitting ? "Envoi…" : "Envoyer ma demande"}
      </Button>
    </form>
  );
}
