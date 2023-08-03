
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nhaeoelpwkvlytbchnnd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oYWVvZWxwd2t2bHl0YmNobm5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwODQ4MjUsImV4cCI6MjAwNjY2MDgyNX0.sP0ZvYL0GEuBwutA4k1u8zlcNi7sF71_PTsIlrmFxp8'
export const supabase = createClient(supabaseUrl, supabaseKey)