"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";
import { CountrySelectField } from "@/components/ui/forms/CountrySelectField";
import FooterLink from "@/components/ui/forms/FooterLink";
import { useRouter } from "next/navigation";
import { signUpWithEmail } from "@/lib/actions/auth.actions";
import { toast } from "sonner";

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "FR",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const result = await signUpWithEmail(data);

      if (result.success) {
        router.push("/");
        return;
      }

      // Gestion du cas où l'inscription échoue sans exception
      toast.error("Échec de l'inscription", {
        description: result.message ?? "Une erreur inattendue s'est produite",
      });
    } catch (error) {
      console.error(error);
      toast.error("Échec de l'inscription", {
        description:
          error instanceof Error
            ? error.message
            : "Une erreur inattendue s'est produite",
      });
    }
  };

  return (
    <>
      <h1 className="form-title">S'inscrire et paramétrer son profil</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="fullName"
          label="Nom complet"
          placeholder="Warren Buffett"
          register={register}
          error={errors.fullName}
          validation={{ required: "Le nom complet est requis", minLength: 2 }}
        />
        <InputField
          name="email"
          label="Email"
          placeholder="buffet@fintales.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Le mail est requis",
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Format d'email invalide",
          }}
        />
        <InputField
          name="password"
          label="Mot de passe"
          placeholder="Mot de passe robuste"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: "Le mot de passe est requis", minLength: 8 }}
        />
        <CountrySelectField
          name="country"
          label="Pays"
          control={control}
          error={errors.country}
          required
        />

        <SelectField
          name="investmentGoals"
          label="Objectifs d'investissement"
          placeholder="Sélectionnez votre objectif d'investissement"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />
        <SelectField
          name="RiskTolerance"
          label="Votre tolérance au risque"
          placeholder="Sélectionnez votre tolérance au risque"
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />
        <SelectField
          name="preferredIndustry"
          label="secteur de prédilection"
          placeholder="Sélectionnez votre secteur de prédilection"
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting
            ? "Espace en cours de création"
            : "Prenez le contrôle de votre avenir financier"}
        </button>

        <FooterLink
          text="Vous avez déjà un compte ?"
          linkText="Connectez-vous"
          href="/sign-in"
        />
      </form>
    </>
  );
};
export default SignUp;
