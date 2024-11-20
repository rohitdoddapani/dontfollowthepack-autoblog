// This could be a new file like testSupabase.js in your project
import supabase from '../utils/supabaseClient.js';  // Adjust the path according to your project structure

async function testSupabaseConnection() {
  const { data, error } = await supabase
    .from('channels')  // Or any other table you have
    .select('*')
    .limit(1);  // Fetch only one record for testing

  if (error) {
    console.error('Error connecting to Supabase:', error);
    return;
  }

  console.log('Success! Data retrieved from Supabase:', data);
}

testSupabaseConnection();
