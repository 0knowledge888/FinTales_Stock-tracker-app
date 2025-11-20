'use server';

import {getAuthInstance} from '@/lib/better-auth/auth';
import { inngest } from '@/lib/inngest/client';
import { headers } from 'next/headers';

export const signUpWithEmail = async ({ 
    
    email, 
    password, 
    fullName, 
    country, 
    investmentGoals, 
    riskTolerance, 
    preferredIndustry
  }: SignUpFormData) => {
    try {
      // Validation des inputs
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { success: false, message: 'Invalid email address.' };
      }
      if (!password || password.length < 8) {
        return { success: false, message: 'Password must be at least 8 characters.' };
      }
      if (!fullName?.trim()) {
        return { success: false, message: 'Full name is required.' };
      }

      const auth = await getAuthInstance();
  
      const response = await auth.api.signUpEmail({
        body: { email, password, name: fullName }
      });
  
      // Vérification plus robuste
      if (response?.user) {
        // Try-catch pour l'event Inngest
        try {
          await inngest.send({
            name: 'app/user.created',
            data: {
              email,
              name: fullName,
              country,
              investmentGoals,
              riskTolerance,
              preferredIndustry,
            }
          });
        } catch (eventError) {
          console.error('Failed to send welcome email event:', eventError);
          // L'utilisateur est créé, mais l'email n'est pas parti
          // On log l'erreur mais on ne fait pas échouer l'inscription
        }
      }
  
      return { success: true, data: response };
  
    } catch (error) {
      console.error('Sign up failed:', error);
      return { 
        success: false, 
        message: error instanceof Error ? error.message : 'Sign up failed. Please try again.' 
      };
    }
  };
  

  export const signInWithEmail = async ({ email, password }: SignInFormData) => {
    
    try {
      // Validation des inputs
      if (!email || !password) {
        return { success: false, message: 'Email and password are required.' };
      }

      const auth = await getAuthInstance();
  
      const response = await auth.api.signInEmail({
        body: { email, password }
      });
  
      return { success: true, data: response };
  
    } catch (error) {
      console.error('Sign In failed:', error);
      return { 
        success: false, 
        message: error instanceof Error ? error.message : 'Invalid email or password.' 
      };
    }
  };
  

export const signOut = async () => {
    const auth = await getAuthInstance();
    try {
        await auth.api.signOut({ headers: await headers() });
        return { success: true };
    } catch (error) {
        console.error('Sign out failed:', error);
        return { success: false, message: 'Sign out failed. Please try again.' };
    }
}