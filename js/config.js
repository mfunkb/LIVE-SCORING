// js/config.js
const SUPABASE_URL = 'https://ozvuclwfyehtuywioner.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96dnVjbHdmeWVodHV5d2lvbmVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2OTE1MjcsImV4cCI6MjA5MjI2NzUyN30.H1t75CTSEXb5s_BnCRKEnWCyBM7sFVJeQVKJu4vPHww';

// Ganti nama variabel dari 'supabase' menjadi 'db'
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);