import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabase: SupabaseClient = createClient(
  String(import.meta.env['VITE_SUPABASE_URL']) || '',
  String(import.meta.env['VITE_SUPABASE_ANON']) || ''
)

const Fetcher = async () => {
  const { data, error } = await supabase
  .from('secret_message')
  .select()
  if (error) {
    console.log(error)
  }

  return !error ? data : null
}

const SubmitPost = async (message: string) => {
  const { data, error } = await supabase
    .from('secret_message')
    .insert([{ message: message }])

  if (error) {
    console.log(error)
  }

  return !error ? data : null
}

export { SubmitPost }

export default Fetcher
