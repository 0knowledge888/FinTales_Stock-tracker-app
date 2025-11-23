"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import FooterLink from "@/components/forms/FooterLink";
import { signInWithEmail } from "@/lib/actions/auth.actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SignIn = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      const result = await signInWithEmail(data);

      if (result.success) {
        router.push("/");
        return;
      }

      // Gestion du cas où l'authentification échoue sans exception
      toast.error("Échec de l'authentification", {
        description: result.message ?? "Une erreur inattendue s'est produite",
      });
    } catch (error) {
      console.error(error);
      toast.error("Échec de l'authentification", {
        description:
          error instanceof Error
            ? error.message
            : "Une erreur inattendue s'est produite",
      });
    }
  };

  return (
    <>
      <h1 className="form-title">Content de vous revoir !</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="email"
          label="Email"
          placeholder="m.burry@fintales.com"
          register={register}
          error={errors.email}
          validation={{
            required: "le mail est requis",
            pattern: /^\w+@\w+\.\w+$/,
          }}
        />

        <InputField
          name="password"
          label="Mot de passe"
          placeholder="Entrer votre mot de passe"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: "le mot de passe est requis", minLength: 8 }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Signing In" : "Se connecter"}
        </Button>

        <FooterLink
          text="Pas encore membre ?"
          linkText="Crée un compte"
          href="/sign-up"
        />
      </form>
    </>
  );
};
export default SignIn;
