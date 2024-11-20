// src/utils/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);
// console.log(supabase);

const { data: blogs, error } = await supabase.from('blogs').select('*');
    // console.log('Data fetched:', blogs);

export default supabase;


// import { createServerClient } from '@supabase/ssr'
// import { cookies } from 'next/headers'

// export function createClient() {
// //   const cookieStore = cookies()

//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
//   )
// }