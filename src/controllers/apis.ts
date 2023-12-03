import { supabase } from "../libraries/supabase";

export function signInWithPassword(email: string, password: string) {
  return supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
}
