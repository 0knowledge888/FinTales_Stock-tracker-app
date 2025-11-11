'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import InputField from '@/components/ui/forms/InputField';
import FooterLink from '@/components/ui/forms/FooterLink';

const SignIn = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
    });

    const onSubmit = async (data: SignInFormData) => {
        try {
            
            console.log('Sign in data:', data);
        } catch (e) {
            console.error(e);
          
        }
    }

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
                    validation={{ required: 'le mail est requis', pattern: /^\w+@\w+\.\w+$/ }}
                />

                <InputField
                    name="password"
                    label="Mot de passe"
                    placeholder="Entrer votre mot de passe"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{ required: 'le mot de passe est requis', minLength: 8 }}
                />

                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Signing In' : 'Se connecter'}
                </Button>

                <FooterLink text="Pas encore membre ?" linkText="Crée un compte" href="/sign-up" />
            </form>
        </>
    );
};
export default SignIn;