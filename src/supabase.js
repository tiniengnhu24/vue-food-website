import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://orvpnejnomfzqgyyqkel.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ydnBuZWpub21menFneXlxa2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4MzM1MjUsImV4cCI6MjA2NDQwOTUyNX0.tnMtSEYWwJFdo2l23R2yMdaKXtn-TD0uVxq6-4lDX4k'

export const supabase = createClient(supabaseUrl, supabaseKey)
