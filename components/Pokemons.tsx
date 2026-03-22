import { createClient } from '@/lib/supabase/server'

export default async function Pokemons() {
  const supabase = await createClient()
  const { data } = await supabase.from('Pokemon').select()

  return (
  <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}