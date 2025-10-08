import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().min(10, "Teléfono inválido").max(20),
  subject: z.string().trim().min(3, "El asunto debe tener al menos 3 caracteres").max(200),
  message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simular envío (aquí integrarías con EmailJS, Web3Forms, o tu backend)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarnos. Te responderemos pronto.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Input
            {...register("name")}
            placeholder="Tu nombre completo *"
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Input
            {...register("email")}
            type="email"
            placeholder="Tu email *"
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Input
            {...register("phone")}
            placeholder="Tu teléfono *"
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <Input
            {...register("subject")}
            placeholder="Asunto *"
            className={errors.subject ? "border-destructive" : ""}
          />
          {errors.subject && (
            <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div>
        <Textarea
          {...register("message")}
          placeholder="Tu mensaje *"
          rows={6}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar Mensaje"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
